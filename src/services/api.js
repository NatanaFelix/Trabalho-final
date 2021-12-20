import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.vagalume.com.br/',
    // headers: {
    //     'content-type': 'application/json;charset=utf-8'        
    // },
    
})

// axios.request(api).then(function (response)  {
//     console.log(response.data)
// }).catch(function (error){
//     console.log(error)
// })

export default api