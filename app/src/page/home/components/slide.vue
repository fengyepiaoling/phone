<template>
  <div class="slide-group">
    <cube-slide ref="slide" :data="items" @change="changePage">
      <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
        <a :href="item.url">
          <img :src="item.image" class="ts-img">
        </a>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        items: [
          {
            url: '#',
            image: require('@/_cache/home/2018-04-02_215837.png')
          },
          {
            url: '#',
            image: require('@/_cache/home/2018-04-02_215837.png')
          }
        ]
      }
    },
    methods: {
      changePage (current) {
        console.log('当前轮播图序号为:' + current)
      },
      clickHandler (item, index) {
        console.log(item, index)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-group
    height 120px
    width 100%
    overflow hidden
    .ts-img
      width 100%
</style>