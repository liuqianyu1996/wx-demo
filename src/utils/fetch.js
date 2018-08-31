
//  * @param  {String} api    api 根地址
//  * @param  {String} path   请求路径
//  * @param  {Objece} params 参数
//  * @param  {Objece} method 请求方式
export default function(api, path, params, method) {
    return new Promise((reslove, reject) => {
        wx.request({
            url: `${api}${path}`,
            data: {...params},
            method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            header: { 'Content-Type': 'json' }, // 设置请求的 header
            success: reslove,
            fail: reject
        })
    })
}