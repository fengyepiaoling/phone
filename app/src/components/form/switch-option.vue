<template>
  <div class="switch-option">
    <span class="name">{{ name }}</span>
    <div class="switch-ellipse" :class="{ active: checked }" @click="clickSwitch">
      <span class="switch-circle" :class="{ active: checked }"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'switch-option'
  export default {
    name: COMPONENT_NAME,
    props: {
      name: {
        type: String
      },
      value: null
    },
    data () {
      return {
        checked: this.value
      }
    },
    watch: {
      checked: function (newValue) {
        this.$emit('update:value', newValue)
      }
    },
    methods: {
      clickSwitch: function () {
        this.checked = !this.checked
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable.styl"

  .switch-option
    display flex
    justify-content space-between
    align-items stretch
    height: 100%
    padding 0 15px
    .name
      display flex
      align-items: center
      flex: 0 1 auto
    .switch-ellipse
      align-self: center
      flex: 0 0 auto
      margin-top: 5px
      display: inline-block
      position: relative
      height: 22px
      width: 36px
      background-color: $color-white
      border-radius: 1000px
      border: 2px solid rgba(0, 0, 0, .1)
      transition: all 0.1s
      &.active
        background-color: $color-orange
        border-color: transparent
        transition: all 0.2s ease 0.2s
      .switch-circle
        position: absolute
        display: inline-block
        height: 20px
        width: 20px
        background: white
        border-radius: 50%
        border: 1px solid rgba(0, 0, 0, .1)
        box-shadow: -1px 1px 1px #999
        top: 0
        left: 0
        transition: all 0.3s
        &.active
          left: 14px
          border: 1px solid $color-white
          box-shadow: -1px 1px 1px $color-dark-orange
          transition: all 0.3s ease 0.05s

</style>
