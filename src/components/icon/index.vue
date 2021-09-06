<script setup lang="ts">

defineProps<{ 
    icon: string,
    styles: Object 
}>();


</script>

<template>
    <svg class="icon" aria-hidden="true" @click="$emit('click',$event)" :style="styles">
        <use :xlink:href="`#${icon}`" />
    </svg>
</template>


<style scoped lang='scss'>
.icon {
  width: 15px;
  height: 15px;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
  margin-right: 4px;
}
</style>

