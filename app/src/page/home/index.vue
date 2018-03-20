<template>
  <cube-page>
    <div slot="content">
      <search-option></search-option>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '@/components/ui/cube-page.vue'
  import SearchOption from '@/components/form/search-option.vue'
  export default {
    components: {
      CubePage,
      SearchOption
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.aaa
  color $c-orange
</style>
