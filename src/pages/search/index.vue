<template>
  <div>
   <van-search
    :value="value"
    placeholder="请输入搜索内容"
    show-action="true"
    @search="onSearch"
    @cancel="onCancel"
    data-key="value"
    use-action-slot="true"
  >
    <view slot="action" @click="onSearch">搜索</view>
  </van-search>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'

export default {
  components: {
    card
  },

  data () {
    return {
     value: ''
    }
  },

  methods: {
    onSearch(event) {
      console.log('000',event.detail)
    }
  },

  created () {
    const logs = (wx.getStorageSync('logs') || [])
    this.logs = logs.map(log => formatTime(new Date(log)))
  }
}
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
