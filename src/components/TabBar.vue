<template>
  <div>
    <van-tabbar inactive-color="#999999" active-color="#232324" fixed route>
      <van-tabbar-item to="/home">
        <span>首页</span>
        <template #icon="props">
          <img v-if="props.active" src="../assets/img/home1.png" />
          <img v-else src="../assets/img/home.png" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/message" >
        <span>消息</span>
        <template #icon="props">
          <img v-if="props.active" src="../assets/img/message1.png" />
          <img v-else src="../assets/img/message.png" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/my">
        <span>我的</span>
        <template #icon="props">
          <img v-if="props.active" src="../assets/img/my1.png" />
          <img v-else src="../assets/img/my.png" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

  export default {
    name: 'TabBar',
    data() {
      return {
        active: 0,
        icon:{

        }
      }
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  img{
    height: 100%;
  }
</style>
