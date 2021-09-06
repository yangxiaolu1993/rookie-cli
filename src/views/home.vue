<script setup lang="ts">
import { ref ,reactive} from 'vue'

const list = reactive([
  {id:'6',title:'创建 demo ',desc:'详情描述 demo 做了哪些事情 ',route:'home',icon:'6.jpg'}
])


</script>

<template>
  <div class="home">
    <div class="home-title"><svg-icon icon='icon-naoling'></svg-icon>表单动态配置</div>
    <div class="group">
        <div class="group-list" v-for="(item,i) in list" :key="i" @click="jump(item)">
            <div class="img"><img :src="`/public/img/${item.icon}`" alt=""></div>
            <div class="content">
                <div class="title">{{item.title}}</div>
                <div class="desc">{{item.desc}}</div>
            </div>  
        </div>
    </div>

  </div>
</template>

<style>
h1{
  font-size: 24px;
}
</style>
