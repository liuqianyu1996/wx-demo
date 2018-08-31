# my-project

> 之前用原生小程序做了个简单demo、现在用mpvue改一版，踩踩坑。

# Introduction：

> 主要组成部分： 

* 首屏加载，第一次进入页面加载图片，利用本地化存储将图片存起来，一定时间内过期后再次加载。
* 首页轮播图、列表横向滚动展示、列表项进入可以查看详细介绍
* 搜索页


> 用到的技术：mpvue、vuex、promise。接口来自豆瓣电影api

* 其实理论上这个demo用不着vuex，因为没有复杂的数据交互
* 还要注意一点就是，首次进入小程序由于接口限制，需要打开右上角详情，勾选不校验合法域选项，载重新刷新下，才可以加载接口

```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
