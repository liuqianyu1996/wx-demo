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
    <view v-for="(item, index) in searchVal" :key="index">{{item.id}}
      <navigator :url="'/pages/detail/main?id=' + item.id" class="move-item" :key="item.id">
        <move-item :move="searchVal" v-if="searchVal.length > 0" ></move-item>
      </navigator>
    </view>
    <van-loading v-if="loading"/>
  </div>
</template>
<script>
import { formatTime } from '@/utils/index'
import moveItem from '@/components/moveItem'
import { fetchGet } from '@/utils/api'

export default {
  components: {
    moveItem
  },

  data () {
    return {
      value: '',
      searchVal: [],
      loading: false,
      pageOpt: {
        page: 1,
        pageSize: 10
      }
    }
  },
  methods: {
    loadMovies(search) {
      this.loading = true;
      fetchGet('/search', this.pageOpt.page++, this.pageOpt.pageSize, search).then(res => {
        this.searchVal = this.searchVal.concat(res.data.subjects);
        console.log(this.loading)
        console.log('search', this.searchVal)
        this.loading = false;
        console.log(this.loading)
      })
    },
    onSearch(event) {
      if (!event.target.value) return false;
      this.value = event.target.value;
      this.searchVal = [];
      this.loadMovies(event.target.value)
    }
  },
  onReachBottom() {
    console.log('chufa bottom')
    this.loadMovies(this.value)
  }
}
</script>

<style>

</style>
