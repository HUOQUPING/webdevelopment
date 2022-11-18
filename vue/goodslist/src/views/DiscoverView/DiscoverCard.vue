<template>
  <div class="discover-card">
    <div class="card-head">
      <h3 class="subTitle">{{ subTitle }}</h3>
      <span class="button" :class="buttonClass">{{ buttonStr }}</span>
    </div>
    <div class="card-list"></div>
  </div>
</template>

<script>
const typeOption = {
  HOMEPAGE_SLIDE_PLAYLIST: {
    button: "更多",
    class: "more",
  },
  HOMEPAGE_SLIDE_SONGLIST_ALIGN: {
    button: "播放",
    class: "play",
  },
  HOMEPAGE_SLIDE_LISTEN_LIVE: {
    button: "更多",
    class: "more",
  },
};
export default {
  props: {
    showType: String,
    subTitle: String,
    button: String,
    creatives: Array,
  },
  computed: {
    buttonStr() {
      return typeOption[this.showType].button || "更多";
    },
    buttonClass() {
      return typeOption[this.showType].class || "more";
    },
  },
};
</script>

<style lang="scss" scoped>
.discover-card {
  border-radius: 10px;
  margin-top: 10px;
  padding: 15px 10px;
  color: #fff;
  background-color: #333;

  .card-head {
    display: flex;
    justify-content: space-between;

    .subTitle {
      flex: 1;
      margin-right: 10px;
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .button {
      padding: 5px 10px;
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 999px;
      font-size: 12px;

      &.play::before {
        display: inline-block;
        margin-right: 3px;
        width: 0;
        height: 0;
        border: 5px solid #fff;
        border-right: 0;
        border-top-color: transparent;
        border-bottom-color: transparent;
        
        content: '';
      }

      &.more::after {
        margin-left: 3px;
        content: '>';
      }
    }
  }
}
</style>