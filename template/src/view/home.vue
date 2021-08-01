<template>
  <div class="home">
    <div class="home-title"><svg-icon icon='icon-naoling'></svg-icon>开始你的表演吧！</div>
    <div class="group">
        <div class="group-list" v-for="(item,i) in list" :key="i" @click="jump(item)">
            <div class="img"><img :src="require(`../assets/img/header/${item.icon}`)" alt=""></div>
            <div class="content">
                <div class="title">{{item.title}}</div>
                <div class="desc">{{item.desc}}</div>
            </div>  
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      list:[
        {id:'6',title:'hash 路由',desc:'手写路由 ',route:'hashRouter',icon:'6.jpeg'}
      ]
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import '@s/home.scss';
</style>
