import axios from 'axios'

axios.defaults.baseURL='http://localhost:3000';

//设置请求头
// axios.defaults.headers.post["Content-type"] = "application/json;charset=utf-8"
var service = axios.create({
    timeout: 5000
})
service.interceptors.request.use( function( config ) {
        let token = localStorage.getItem("token");
        if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
          config.headers.token = `${token}`;
        } 
  return config
},
function( error ) {
    return Promise.reject( error )
}
)

service.interceptors.response.use( function( response ) {

 return response
},
 function( error ) {
     return Promise.reject(error)
 }
)


// get请求

service.get = function(url,param){
//promise示例 
return new Promise((resolve,reject)=>{
    service({
        method:'get',
        url:url,
        params:param
    }).then(res=>{  //axios返回的是一个promise对象
        resolve(res)  //resolve在promise执行器内部 
    }).catch(err=>{
        console.log(err,'异常')
    })

})
}
// post请求
  service.post = function(url, param) {
     
    return new Promise( (resolve) => {
        service({
            method:'post',
            url:url,
            data:param
        }).then( (res) => {
            resolve(res)
        })
    })
}

export const registerAxios = function(vue) {
    vue.prototype.$axios = service
}
