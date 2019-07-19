# 用户登录Cookie封装
```js
//真心发现npm居然还有封装好的Cookies，npm贼好用
//起名 auth
import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

export function getToken() {
  return Cookies.get(TokenKey)  //获取cookie
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)  //存cookie
}

export function removeToken() {
  return Cookies.remove(TokenKey)   //删除cookie
}

```