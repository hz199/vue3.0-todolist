<template>
  <div class="about">
    <h1>{{count}}</h1>
    <button @click="add">add</button>

    <hr>
    <h1>{{count1}}</h1>
    <button @click="add1">add</button>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'about',
  setup() {
    const count = ref(0);

    const count1 = ref(0)

    // watch(
    //   () => count.value,
    //   val => {
    //     console.log(`监听 count, ${val}`);
    //   }
    // );

    watch([() => count.value, () => count1.value], ([val1, val2]) => {
      console.log(`count is: ${val1}`);
      console.log(`count1 is: ${val2}`);
    });

    const add = () => {
      count.value++;
    };

    const add1 = () => {
      count.value++;
    };
    return {
      count,
      count1,
      add,
      add1
    };
  }
};
</script>
