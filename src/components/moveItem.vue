<template>
  <div>
    <view class="move-list">
      <view class="move-item">
          <view class='move-img'>
            <image :src="move.images.large"/>
          </view>
          <view class="mobe-berif">
          <view>
            <view>片名：<text>{{move.title}}</text></view>
            <view>类型：<text v-for="(genres, i) in move.genres" :key="i">{{genres}} </text></view>
            <view>主演：<text v-for="(casts, i) in move.casts" :key="i">{{casts.name}} </text></view>
            <view>导演：<text v-for="(directors, i) in move.directors" :key="i" v-if="i <= 4">{{directors.name}} </text></view>
          </view>
          </view>
      </view>
    </view>
  </div>
</template>

<script>
export default {
  props: ['move'],
  name: 'move-item'
}
</script>

<style scoped>
.move-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 250rpx;
  border-bottom: 1px solid #ccc;
}
.move-img {
  width: 25%;
  padding: 10rpx;
}
.move-img image {
  width: 100%;
  height: 200rpx;
}
.mobe-berif {
  margin-top: 10rpx;
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  font-size: 28rpx;
}
.mobe-berif view {
  width: 100%;
}
.mobe-berif text {
  font-weight: 400;
  font-size: 26rpx;
}
</style>
