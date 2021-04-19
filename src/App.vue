<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <TabBar v-show="$route.meta.hasTabBar"></TabBar>
  </div>
</template>
<script>
import TabBar from '@/components/TabBar'

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    TabBar,
  },
  methods: {},
  mounted() {

  }
}
</script>
<style lang="scss" scoped>

</style>
