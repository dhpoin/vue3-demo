<template>
  <div class="composition-api-container">
    <el-button type="primary" @click="handleClick">点击次数：{{ count }}</el-button>
  </div>
</template>

<script>
  import {ref, watch} from 'vue';
  import {ElMessage} from 'element-plus'

  export default {
    name: "CompositionAPI",
    setup() {
      const count = ref(0);

      function handleClick() {
        count.value++;
      }

      watch(count, () => {
        ElMessage.success(`你点击了${count.value}次`);
      })

      return {
        count,
        handleClick
      }
    }
  };
</script>

<style lang="scss" scoped>
  .composition-api-container {

  }
</style>