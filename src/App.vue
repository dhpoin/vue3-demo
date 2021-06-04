<template>
  <div class="app-container">
    <el-tabs :model-value="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="组合式 API" name="compositionAPI"></el-tab-pane>
      <el-tab-pane label="待办列表" name="todoList"></el-tab-pane>
    </el-tabs>
    <router-view/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: "compositionAPI",
      };
    },
    methods: {
      handleClick(tab) {
        this.$router.push(`/${tab.paneName}`);
      },
    },
    watch: {
      $route: {
        handler() {
          this.activeName = this.$route.name;
        }
      }
    }
  };
</script>

<style lang="scss">
  .app-container {
    padding: 20px;
  }
</style>
