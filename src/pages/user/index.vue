<template>
  <div>
    <view class="user">
        <image :src="userInfo.avatarUrl" />
        <text>Hi~ {{userInfo.nickName}}</text>
    </view>
  </div>
</template>
<script>
import { formatTime } from '@/utils/index'
import { fetchGet } from '@/utils/api'

export default {
  components: {
  },

  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
  },

  created() {
    const thisPage = this;
    wx.getUserInfo({
      withCredentials: true,
      lang: 'zh_CN',
      success: function(res){
        // success
        thisPage.userInfo = res.userInfo;
        console.log(res)
      }
    })
  }
  
}
</script>

<style>
.user {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  padding: 30rpx;
  font-size: 28rpx;
  text-align: center;
}
.user image {
  width: 200rpx;
  height: 200rpx;
  border-radius: 50%;
}
.user text {
  padding: 20rpx;
}


</style>
