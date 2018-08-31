<template>
  <div>
    <view class="move-container" v-if="loaded">
      <view class="move-img">
        <image :src="move.images.large" />
      </view>
      <view class="move-berif">
        <view>
          年份：<text>{{move.year}}</text>
        </view>
        <text>影片名称：{{move.title}}</text>
        <view>
          影片类型：<text v-for="(item, index) in move.genres" :key="index">{{item}} </text>
        </view>
        <text>影片简介：{{move.summary}}</text>
      </view>
    </view>
    <view>
      <view class="move-title" v-if="loaded">影人简介</view>
      <view class="move-list">
        <view v-for="(item, index) in move.casts" :key="index" class="move-item">
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

  data () {
    return {
      move: [],
      loaded: false
    }
  },

  onLoad (query) {
    console.log(query)
    wx.showLoading({ title: '正在获取详情' })
    fetchGetData(`subject/${query.id}`).then(res => {
      console.log(res)
      this.move = res.data;
      this.loaded = true;
      wx.hideLoading();
    })
  },

  onHide() {
    this.move = [];
  }
}
</script>

<style>
page {
  font-size: 28rpx;
}
.move-container {
}
.move-img {
  background-color: #ccc;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.move-img image {
  width: 50%;
}
.move-berif {
  padding: 5px;
}
.move-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.move-title {
  font-size: 32rpx;
  text-align: center;
}
.move-item {
  padding: 10rpx;
  width: 30%;
  text-align: center;
}
.move-item image {
  width: 100%;
  height: 300rpx;
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
