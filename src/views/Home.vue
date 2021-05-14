<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <myEditor v-model="value" placeholder="我是placeholder"></myEditor>
    <br />
    <button @click="getValue">获取文本内容</button>
    <br />
    <div v-html="value"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive, toRefs, onMounted } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import myEditor from '@/components/myEditor'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    myEditor
  },
  setup(props) {
    const state = reactive({
      value: ''
    })

    onMounted(() => {
      setTimeout(() => {
        state.value = '99999999999'
      }, 500);
    })

    function getValue () {
      console.log(state.value)

    }

    return {
      ...toRefs(state),
      getValue
    }
  }
}
</script>
