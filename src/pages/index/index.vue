<template>
  <div class="container">
    <swiper indicator-dots="true"
    autoplay="true" interval="2000" duration="500">
    <swiper-item v-for="(item, index) in movies[0].move" :key="index" v-if="movies.length > 0 && index < 5">
        <image :src="item.images.large" mode="aspectFill"/>
    </swiper-item>
  </swiper>
  <block v-for="(move, i) in movies" :key="i">
    <view style="text-align:center" class="move-slogan">
        <text class="move-title">{{move.title}}</text>
    </view>
    <scroll-view class="scroll-view_H" scroll-x style="width: 100%">
      <view class="move-list">
       <view v-for="(item, index) in move.move" :key="index" 
        class="move-item"
        v-if="movies.length > 0">
           <a :href="'/pages/detail/main?id=' + item.id">
            <image :src="item.images.large"/>
            <text>{{item.title}}</text>
          </a>
        </view>
      </view>
    </scroll-view>
  </block>
  </div>
</template>

<script>
import store from './store'

export default {
  data () {
    return {
      // movies: []
    }
  },
  computed: {
    movies () {
      return store.state.movies
    },
    loaded () {
      return store.state.loaded
    },
  },
  watch: {
     movies (val) {
      this.movies = val
    },
  },
  components: {
  },

  methods: {
    // bindDetail(id) {
    //   wx.navigateTo({ url: `../../pages/detail/main?id=${id}` })
    // }
  },
  onLoad () {
    store.dispatch('getMovies')
  },
  created () {
    //store.dispatch('getMovies')
  }
}
</script>

<style scoped>
page {
  width: 100%;
  height: 100%;
  background-color: #ccc;
  font-size: 30rpx;
}
.container {
  padding: 0;
  height: 100%;
}
swiper {
  width: 100%;
  height: 500rpx;
}
swiper-item {
  width: 100%;
  height: 100%;
}
swiper-item image{
  width: 100%;
  height: 100%;
}

.move-slogan {
  width: 100%;
  background: #fff;
  padding-top: 20rpx;
}
.move-list {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.move-title {
  font-size: 30rpx;
  text-align: center;
}
.move-item {
  padding: 10rpx;
  text-align: center;
  background: #fff
}
.move-item image {
  width: 230rpx;
  height: 260rpx;
}
.move-item text {
  display: block;
  width: 100%;
  height: 50rpx;
  font-size: 28rpx;
  overflow: hidden;
  white-space:nowrap;
  text-overflow: ellipsis;
}
</style>
