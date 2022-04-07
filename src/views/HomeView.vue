<script setup lang="ts">
import { useApi } from '@/plugins/api.plugin';
import { onMounted } from 'vue';


onMounted(() => {
  useApi()?.getUsers().then((res) => {
    console.log(res)
  })
})


</script>

<template>
  <main>

  </main>
</template>
