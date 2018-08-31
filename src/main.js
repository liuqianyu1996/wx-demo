import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()


// export default {
//     // 这个字段走 app.json
//     config: {
//         pages: [
//             "pages/screen/main",
//             "pages/index/main",
//             "pages/logs/main"
//         ],
//         window: {
//             "backgroundTextStyle": "light",
//             "navigationBarBackgroundColor": "#000",
//             "navigationBarTitleText": "豆瓣电影",
//             "navigationBarTextStyle": "#fff"
//         },
//         tabBar: {
//             "color": "#202020",
//             "selectedColor": "#ec5045",
//             "list": [{
//                 "pagePath": "pages/index",
//                 "text": "首页",
//                 "iconPath":"/static/image/all（1）.png",
//                 "selectedIconPath": "/static/image/all.png"
//             }, {
//                 "pagePath": "pages/log",
//                 "text": "日志",
//                 "iconPath": "/static/image/1.png",
//                 "selectedIconPath": "/static/image/2.png"
//             }
//         ]},
//     }
// }  