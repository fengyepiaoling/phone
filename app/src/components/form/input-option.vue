<template>
  <div class="ts-option">
    <span class="ts-label">{{ label }}</span>
    <div class="ts-text">
      <input type="text" v-model="inputValue">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'input-option'
  export default {
    name: COMPONENT_NAME,
    props: {
      label: {
        type: String
      },
      value: null,
      minValue: null
    },
    data () {
      return {
        inputValue: this.value
      }
    },
    watch: {
      inputValue: function (newValue) {
        this.$emit('update:value', this.minValue ? Math.max(newValue, this.minValue) : newValue)
      }
    }
  }
</script>