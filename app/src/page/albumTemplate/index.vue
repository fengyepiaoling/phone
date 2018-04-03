<template>
  <cube-page>
    <div slot="content" class="album-template">
      <list-template></list-template>
      <div class="fixed-bottom-btn">
        <span class="ts-btn">批量上传</span>
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '@/components/ui/cube-page.vue'
  import ListTemplate from '@/components/page/list/list-template.vue'
  export default {
    components: {
      CubePage,
      ListTemplate
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.album-template
  padding-bottom 70px
.fixed-bottom-btn
  position fixed
  bottom 0
  left 0
  right 0
  padding 10px
  background $c-background
  border-top 1px solid $c-row-line
  .ts-btn
    display block
    width 100%
    height 50px
    line-height 50px
    border-radius $r-size-btn-circle
    text-align center
    background $c-orange
    color $c-white
</style>