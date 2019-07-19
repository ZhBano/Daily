#axios的封装
```js
//request.js

import axios from 'axios'
import { MessageBox, Message } from 'element-ui'  //成功、失败提醒
import store from '@/store'
import { getToken } from '@/utils/auth'  //cookie封装
import Qs from 'qs'  //地址转对象

// 创建一个axios实例
const baseURL = 'http://192.168.1.12:8056'
const service = axios.create({
  baseURL:baseURL, // url = base url + request url
  // baseURL: process.env.VUE_APP_BASE_API, 
  withCredentials: true, // 当跨域请求时发送cookie
  timeout: 5000, // 请求时间
  transformRequest: [function (data) {
    data = Qs.stringify(data);
    return data;
  }],
  headers: {  //请求头携带
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization' : 'X-admin-ToKen'
  }
})

// 请求拦截
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么

    if (store.getters.token) {
      // 让每个请求携带 token
      // ['Authorization']是一个自定义头键
      //请根据实际情况修改
      //' config '是为请求提供给' axios '的配置
      config.headers['Authorization'] = getToken()
    }
    return config
  },
  error => {
    // 处理请求错误
    console.log(error) // 调试
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  /**
   * 如果您想获得http信息，例如头信息或状态信息
   * 请返回response => response
   * 通过HTTP状态代码来判断状态
  */
  response => {
    const res = response.data

    // 如果状态码不是200，则判断为错误。
    if (res.code !== 200) {
      Message({
        message: res.message || 'error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008:非法令牌;50012:其他客户登录;50014:令牌过期;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // 重新登陆
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(res.message || 'error')
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service

```
调用
```js
import request from '@/utils/request'

export function fetchList(data) {
        return request({
                url: '/auth/feign/bdcolornew/list',
                method: 'post',
               data
        })
}

export function fetchList(id) {
        return request({
                url: '/auth/feign/bdcolornew/list',
                method: 'get',
               params:{ id }
        })
}

```