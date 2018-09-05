<template>
  <div>
    <view class="moveObj-container" v-if="loaded">
      <view class="moveObj-img">
        <image :src="moveObj.images.large" />
      </view>
      <view class="moveObj-berif">
        <view>
          年份：<text>{{moveObj.year}}</text>
        </view>
        <text>影片名称：{{moveObj.title}}</text>
        <view>
          影片类型：<text v-for="(item, index) in moveObj.genres" :key="index">{{item}} </text>
        </view>
        <text>影片简介：{{moveObj.summary}}</text>
      </view>
    </view>
    <view>
      <view class="moveObj-title">演员简介</view>
      <view class="moveObj-list">
        <view v-for="(item, index) in moveObj.casts" :key="index" class="moveObj-item">
          <image :src="item.avatars.large" />
          <text>主演-{{item.name}}</text>
        </view>
      </view>
    </view>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import { fetchGetData } from '@/utils/api'

export default {
  components: {
  },
  // created() {
  //   this.moveObj = []
  // },
  data () {
    return {
      moveObj: {},
      loaded: false
    }
  },
  onLoad () {
    wx.showLoading({ title: '正在获取详情' })
    console.log('this',this)
    fetchGetData(`subject/${this.$root.$mp.query.id}`).then(res => {
      this.moveObj = res.data;
      console.log(this.moveObj.images.large);
      this.loaded = true;
      wx.hideLoading();
      wx.setNavigationBarTitle({ title: `豆瓣电影 • ${res.data.title}` })
    })
  },
  onHide () {
    this.moveObj = {}
  },
  // onLoad () {
  //    wx.showLoading({ title: '正在获取详情' })
  //   fetchGetData(`subject/${this.$root.$mp.query.id}`).then(res => {
  //     this.moveObj = res.data;
  //     console.log(this.moveObj);
  //     wx.hideLoading();
  //     wx.setNavigationBarTitle({ title: `豆瓣电影 • ${res.data.title}` })
  //   })
  // },
}
</script>

<style>
page {
  font-size: 28rpx;
}
.moveObj-img {
  width: 100%;
  background-color: #ccc;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.moveObj-img image {
  width: 50%;
}
.moveObj-berif {
  padding: 5px;
}
.moveObj-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.moveObj-title {
  font-size: 32rpx;
  text-align: center;
}
.moveObj-item {
  padding: 10rpx;
  width: 30%;
  text-align: center;
}
.moveObj-item image {
  width: 100%;
  height: 300rpx;
}
.moveObj-item text {
  display: block;
  width: 100%;
  height: 50rpx;
  font-size: 28rpx;
  overflow: hidden;
  white-space:nowrap;
  text-overflow: ellipsis;
}
</style>
