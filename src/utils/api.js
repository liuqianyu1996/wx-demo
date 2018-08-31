const URL = "https://douban.uieee.com/v2/movie/";
import fetch from './fetch'

// 获取列表类数据
export function fetchGet(path, page = 1, pageSize = 20, search) {
    const query = { start: (page - 1) * pageSize, count: pageSize }
    return fetch(URL, path, search ? { q: search, ...query} : query, 'GET')
}
export function fetchGetData(path, param) {
    return fetch(URL, path, param, 'GET')
}
// 获取单个数据
// export function fetchGetList(path, param) {
//     return fetchGet(path, param)
// }
