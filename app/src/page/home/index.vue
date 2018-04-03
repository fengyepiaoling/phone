<template>
  <cube-page>
    <div slot="content" class="form-group">
      <search-option></search-option>
      <slide></slide>
      <list-commodity></list-commodity>
    </div>

  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '@/components/ui/cube-page.vue'
  import SearchOption from '@/components/form/search-option.vue'
  import ListCommodity from '@/components/page/list/list-commodity.vue'
  import Slide from './components/slide.vue'
  export default {
    components: {
      CubePage,
      SearchOption,
      Slide,
      ListCommodity
    }
  }
</script>