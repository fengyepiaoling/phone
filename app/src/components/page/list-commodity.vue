<template>
  <div class="list-commodity" :class="type">
    <div class="ts-header">
      <span class="ts-title">
        相册列表
      </span>
    </div>
    <div class="ts-content">
      <div class="ts-item">
        <div class="ts-img"><img src="@/_cache/home/2018-04-02_204306.png"/></div>
        <div class="ts-msg-group">
          <span class="ts-text">十二寸基础款水晶册</span>
          <span class="ts-msg">特点：覆膜防水 | 水晶面 | 180度全景展开</span>
          <span class="ts-amount">
            <b>￥69</b>
            <em>￥128</em>
            <cube-button :inline="true" :light="true" type="ts-btn">立即制作</cube-button>
          </span>
        </div>
      </div>
      <div class="ts-item">
        <div class="ts-img"><img src="@/_cache/home/2018-04-02_204306.png"/></div>
        <div class="ts-msg-group">
          <span class="ts-text">十二寸基础款水晶册</span>
          <span class="ts-msg">特点：覆膜防水 | 水晶面 | 180度全景展开</span>
          <span class="ts-amount">
            <b>￥69</b>
            <em>￥128</em>
            <cube-button :inline="true" :light="true" type="ts-btn">立即制作</cube-button>
          </span>
        </div>
      </div>
      <div class="ts-item">
        <div class="ts-img"><img src="@/_cache/home/2018-04-02_204306.png"/></div>
        <div class="ts-msg-group">
          <span class="ts-text">十二寸基础款水晶册</span>
          <span class="ts-msg">特点：覆膜防水 | 水晶面 | 180度全景展开</span>
          <span class="ts-amount">
            <b>￥69</b>
            <em>￥128</em>
            <cube-button :inline="true" :light="true" type="ts-btn">立即制作</cube-button>
          </span>
        </div>
      </div>
      <div class="ts-item">
        <div class="ts-img"><img src="@/_cache/home/2018-04-02_204306.png"/></div>
        <div class="ts-msg-group">
          <span class="ts-text">十二寸基础款水晶册</span>
          <span class="ts-msg">特点：覆膜防水 | 水晶面 | 180度全景展开</span>
          <span class="ts-amount">
            <b>￥69</b>
            <em>￥128</em>
            <cube-button :inline="true" :light="true" type="ts-btn">立即制作</cube-button>
          </span>
        </div>
      </div>
      <div class="ts-item">
        <div class="ts-img"><img src="@/_cache/home/2018-04-02_204306.png"/></div>
        <div class="ts-msg-group">
          <span class="ts-text">十二寸基础款水晶册</span>
          <span class="ts-msg">特点：覆膜防水 | 水晶面 | 180度全景展开</span>
          <span class="ts-amount">
            <b>￥69</b>
            <em>￥128</em>
            <cube-button :inline="true" :light="true" type="ts-btn">立即制作</cube-button>
          </span>
        </div>
      </div>
      <div class="ts-item">
        <div class="ts-img"><img src="@/_cache/home/2018-04-02_204306.png"/></div>
        <div class="ts-msg-group">
          <span class="ts-text">十二寸基础款水晶册</span>
          <span class="ts-msg">特点：覆膜防水 | 水晶面 | 180度全景展开</span>
          <span class="ts-amount">
            <b>￥69</b>
            <em>￥128</em>
            <cube-button :inline="true" :light="true" type="ts-btn">立即制作</cube-button>
          </span>
        </div>
      </div>
      <div class="ts-item">
        <div class="ts-img"><img src="@/_cache/home/2018-04-02_204306.png"/></div>
        <div class="ts-msg-group">
          <span class="ts-text">十二寸基础款水晶册</span>
          <span class="ts-msg">特点：覆膜防水 | 水晶面 | 180度全景展开</span>
          <span class="ts-amount">
            <b>￥69</b>
            <em>￥128</em>
            <cube-button :inline="true" :light="true" type="ts-btn">立即制作</cube-button>
          </span>
        </div>
      </div>
      <div class="ts-item">
        <div class="ts-img"><img src="@/_cache/home/2018-04-02_204306.png"/></div>
        <div class="ts-msg-group">
          <span class="ts-text">十二寸基础款水晶册</span>
          <span class="ts-msg">特点：覆膜防水 | 水晶面 | 180度全景展开</span>
          <span class="ts-amount">
            <b>￥69</b>
            <em>￥128</em>
            <cube-button :inline="true" :light="true" type="ts-btn">立即制作</cube-button>
          </span>
        </div>
      </div>
    </div>
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
.list-commodity
  width auto
  padding 20px
  background $c-white
  margin-top 10px
  &>.ts-header
    margin-bottom 20px
    .ts-title
      font-size $f-large-xxx
  &>.ts-content
    .ts-item
      border $c-row-line
      box-shadow $b-shadow
      padding 10px
      &~.ts-item
        margin-top 20px
      .ts-img
        img
          width 100%
      .ts-msg-group
        margin-top 10px
        font-size $f-large-xx
        &>span
          display block
        .ts-msg
          margin-top 10px
          font-size $f-medium
          color $c-light-grey
        .ts-amount
          height 32px
          line-height 32px
          margin-top 10px
          position relative
          // font-family $f-family-number
          b
            color $c-orange
          em
            font-style normal
            font-size .6em
            color $c-light-grey
            text-decoration line-through
          .cube-btn
            position absolute
            top 0
            right 0
            font-size $f-medium
            background $c-orange
            color $c-white
</style>
