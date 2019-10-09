import axios from 'axios'

axios.defaults.baseURL='http://localhost:3000';
// 设置axios请求的token
// axios.defaults.headers.common['token'] = 'f4c902c9ae5a2a9d8f84868ad064e706'
//设置请求头
// axios.defaults.headers.post["Content-type"] = "application/json;charset=utf-8"
var service = axios.create({
    timeout: 5000
})
service.interceptors.request.use( function( config ) {
  config.headers['token'] = 'f4c902c9ae5a2a9d8f84868ad064e706'
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
        url,
        params:param,
        headers: {
    		'Content-Type': 'application/json',
  	}
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
            url,
            data:param,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
          }
        }).then( (res) => {
            resolve(res)
        })
    })
}

export const registerAxios = function(vue) {
    vue.prototype.$axios = axios
}
