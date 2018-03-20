<template>
  <div class="search-option">
    <div class="ts-text">
      <input type="text" v-model="inputValue">
    </div>
    <div class="ts-btn">搜搜</div>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'search-option'
  export default {
    name: COMPONENT_NAME,
    props: {
      value: null
    },
    data () {
      return {
        inputValue: this.value
      }
    },
    watch: {
      inputValue: function (newValue) {
        this.$emit('update:value', newValue)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.search-option
  display flex
  height 100%
  justify-content space-between
  align-items stretch
  transform rotate(0deg) // fix 子元素超出边框圆角部分不隐藏的问题
  overflow hidden
  .ts-text
    flex 1 1 auto
    input
      padding 0 10px
      background-color $color-white
      box-shadow 0 0 1px 1px #eee inset
      outline none
      border-radius $r-size-medium
      &focus
        outline #fc9153 solid 1px
        outline-offset -1px
  .ts-btn
    flex 0 0 120px
    padding-left 10px
    display inline-flex
    align-items center
</style>