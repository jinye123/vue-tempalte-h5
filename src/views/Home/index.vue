<template>
  <div class="container-box">
    Home
  </div>
</template>

<script>

import {mobile} from "@/utils/validate";
import {getHomeData} from "@/api";
import {Toast} from "vant";

console.log(getHomeData)
export default {
  name: "webCamp",
  data() {
    return {

    }
  },
  computed: {},
  methods: {

  }
}
</script>

<style scoped lang="scss">

</style>
