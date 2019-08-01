const {
  MongoClient,
  ObjectId
} = require('mongodb');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = '1810';
// Use connect method to connect to the server

let connect = () => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, (err, client) => {
      if (err) {
        reject(err)
      } else {
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        resolve({
          db,
          client
        })
      }
    });
  })
}

//增
let insert = (col, arr) => {
  return new Promise(async (resolve, reject) => {
    let {
      db,
      client
    } = await connect();
    const collection = db.collection(col);
    collection.insertMany(arr, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result);
        client.close();
      }
    })
  })
}

//删
let del = (col, obj) => {
  return new Promise(async (resolve, reject) => {
    let {
      db,
      client
    } = await connect();
    const collection = db.collection(col);
    collection.deleteOne(obj, function (err, result) {
      if (err) {
        reject(err)
      } else {
        resolve(result);
        client.close();
      }
    });
  })
}
//查
let find = (col, obj) => {
  return new Promise(async (resolve, reject) => {
    let {
      db,
      client
    } = await connect();
    const collection = db.collection(col);
    collection.find({
      ...obj
    }).toArray(function (err, docs) {
      if (err) {
        reject(err)
      } else {
        resolve(docs);
        client.close();
      }
    });
  })
}

//改
let update = (col, obj, obj2) => {
  return new Promise(async (resolve, reject) => {
    let {
      db,
      client
    } = await connect();
    const collection = db.collection(col);
    collection.updateOne(obj, { $set: obj2 }, function(err, result) {
      if (err) {
        reject(err)
      } else {
        resolve(result);
        client.close();
      }
    });
  })
}

//排序
let sort = (col, obj, obj2) => {
  return new Promise(async (resolve, reject) => {
    let {
      db,
      client
    } = await connect();
    const collection = db.collection(col);
    collection.find({
      ...obj
    }).sort({
      ...obj2
    }).toArray(function (err, docs) {
      if (err) {
        reject(err)
      } else {
        resolve(docs);
        client.close();
      }
    });
  })
}

module.exports = {
  connect,
  insert,
  find,
  ObjectId,
  sort,
  del,
  update
}

// node express mongodb jquery