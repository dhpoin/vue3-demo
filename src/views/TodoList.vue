<template>
  <div class="todo-list-container">
    <el-form ref="form" inline :model="formData" :rules="rules">
      <el-form-item label="标题" prop="title">
        <el-input v-model="formData.title" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="时间" prop="time">
        <el-date-picker v-model="formData.time" type="datetime" placeholder="请选择时间"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button plain @click="resetFields">重置</el-button>
        <el-button type="primary" @click="addTodoList">添加</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="todoList">
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="time" label="时间" :formatter="timeFormatter"></el-table-column>
      <el-table-column prop="address" label="操作" fixed="right">
        <template #default="scope">
          <el-popconfirm title="确定删除待办吗？" @confirm="deleteTodoList(scope.row)">
            <template #reference>
              <el-button type="text">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {ref, reactive, computed} from 'vue';
  import {useStore} from "vuex";

  export default {
    name: "TodoList",
    setup() {
      // 使用store
      const store = useStore();
      // form表单实例，和vue2中this.$refs.form类似
      const form = ref(null);

      // 表单数据
      const formData = reactive({
        id: '',
        title: '',
        time: ''
      });

      // 表单校验规则
      const rules = computed(() => {
        return {
          title: [
            {required: true, message: '请输入标题', trigger: 'blur'}
          ],
          time: [
            {required: true, message: '请选择时间', trigger: 'change'}
          ],
        }
      })

      // 从store中获取的待办列表
      const todoList = computed(() => store.state.todoList);

      // 清空表单
      function resetFields() {
        form.value.resetFields();
      }

      // 添加待办
      function addTodoList() {
        form.value.validate().then(() => {
          formData.id = new Date().getTime().toString();
          console.log(formData.time);
          store.commit('addTodoList', formData);
          resetFields();
        })
      }

      // 删除待办
      function deleteTodoList(row) {
        store.commit('deleteTodoList', row.id);
      }

      // 返回值给template模板使用
      return {
        form,
        formData,
        rules,
        todoList,
        resetFields,
        addTodoList,
        deleteTodoList
      }
    }
  }
</script>

<style lang="scss" scoped>
  .todo-list-container {

  }
</style>