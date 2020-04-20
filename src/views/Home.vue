<template>
  <div class="home">
    <input
    @keyup.enter="addTask"
      class="input"
      type="text"
      v-model="inputValue"
      placeholder="请输入" />
    <ul class="ul">
      <li class="item" v-for="(item, index) in taskList" :key="index">
        <p
        @click="updateStatus(index, !item.isfinished)"
        class="content"
        :class="item.isfinished ? 'active' : ''"
        >{{item.lable}}</p>
        <div class="item-delete" @click="deleteTask(index)">X</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, getCurrentInstance, computed } from 'vue';

export default {
  setup() {
    const { ctx } = getCurrentInstance();
    const taskList = computed(() => ctx.$store.state.taskList);
    const inputValue = ref('');

    const addTask = () => {
      ctx.$store.commit('createTask', {
        lable: inputValue.value,
        isfinished: false
      })

      inputValue.value = ''
    }

    const updateStatus = (index, status) => {
      ctx.$store.commit('updateStatus', {
        index,
        status
      })
    }

    const deleteTask = (index) => {
      ctx.$store.commit('deleteTask', index)
    }

    return {
      inputValue,
      taskList,
      addTask,
      updateStatus,
      deleteTask
    };
  }
};
</script>
<style scoped lang="less">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;

  text-align: left;
}
.home {
  max-width: 400px;
  margin: 0 auto;
  .input {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    outline-style: none;
    border: 2px solid #999;
    padding: 5px 10px;
  }
  .ul {
    margin-top: 10px;
  }

  .item {
    height: 40px;
    line-height: 40px;
    padding-bottom: 5px;
    border-bottom: 1px solid #dcdfe6;
    color: #333333;
  }
  .content {
    float: left;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
  }
  p.active {
    text-decoration:line-through; 
    color: #999999;
  }
  .item-delete {
    float: right;
    width: 25px;
    text-align: center;
    cursor: pointer;
  }
}
</style>