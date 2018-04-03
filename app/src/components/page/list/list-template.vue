<template>
  <div class="list-template" :class="type">
    <div class="ts-title">模板标题<span class="ts-msg"> · 点击单张制作</span></div>
    <div class="ts-img"><img src="@/_cache/template/1.jpg"/></div>
    <div class="ts-img"><img src="@/_cache/template/2.jpg"/></div>
    <div class="ts-img"><img src="@/_cache/template/3.jpg"/></div>
    <div class="ts-img"><img src="@/_cache/template/4.jpg"/></div>
    <div class="ts-img"><img src="@/_cache/template/5.jpg"/></div>
    <div class="ts-img"><img src="@/_cache/template/6.jpg"/></div>
    <div class="ts-img"><img src="@/_cache/template/7.jpg"/></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      type: {
        type: String,
        default: ''
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.list-template
  width auto
  padding 20px
  background $c-white
  .ts-title
    font-size $f-large-xx
    &~.ts-title
      margin-top 20px
    .ts-msg
      color $c-light-grey
      font-size .8em
  .ts-img
    margin-top 20px
    img
      width 100%
</style>
