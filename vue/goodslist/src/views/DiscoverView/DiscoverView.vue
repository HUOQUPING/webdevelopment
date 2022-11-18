<template>
  <div class="discover-view" >
    <van-nav-bar fixed z-index="10" safe-area-inset-top>
      <template #left>
        <van-icon name="wap-nav" size="18" />
      </template>
      <template #title>
        <van-search
          class="search-bar"
          shape="round"
          background="#000"
          placeholder="请输入搜索关键词"
        />
      </template>
      <template #right>
        <van-icon name="service" size="18" />
      </template>
    </van-nav-bar>
    <div class="discover-container">
      <DiscoverCard 
      v-for="(b,i) in blocks" 
      :key="i"
      :showType="b.showType"
      :subTitle="b.subTitle"
      :button="b.button"
      :creatives="b.creatives"
      />
    </div>
  </div>
</template>

<script>
import DiscoverCard from "./DiscoverCard.vue";
import { getDiscoverDataAPI } from "@/apis/discover.js";

export default {
  data() {
    return {
      blocks: [],
    };
  },
  mounted() {
    this.getDiscoverBlock()
  },
  methods: {
    async getDiscoverBlock() {
      let { data } = await this.$axios(getDiscoverDataAPI);

      this.blocks = data.blocks.map((b) => {
        return {
          showType: b.showType,
          subTitle: b.uiElement.subTitle.title,
          button: b.uiElement.button.text,
          creatives: b.creatives,
        };
      });
    },
  },
  components: {
    DiscoverCard,
  },
};
</script>

<style lang="scss" scoped>
.discover-view {
  .search-bar {
    height: 46px;
    // padding: 0;

    .van-search__content {
      background-color: #333;
    }
  }

  .discover-container {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 46px;
    padding-bottom: 50px;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background-color: #111;
  }
}
</style>