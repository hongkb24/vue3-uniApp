<template>
  <view class="index-page">
    <text class="h2"> 查看其它页面示例↓ </text>
    <u-button type="primary" @click="addPages">addPages</u-button>
    <u-icon name="photo" color="#2979ff" size="50"></u-icon>
    <u-tabs :list="pages" :is-scroll="false"></u-tabs>

    <div v-for="(item, index) in pages" :key="index">
      {{ item.name }}
    </div>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const pages = reactive([]) as { name?: string }[]
const addPages = () => {
  pages.push({
    name: 'hello'
  })
}
</script>

<style scoped lang="scss">
.index-page {
  font-style: normal;
  text-align: center;
}
.h2 {
  color: green;
  font-size: 50rpx;
}
navigator {
  color: #1e80ff;
}
</style>
