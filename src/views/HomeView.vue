<script setup lang="ts">
import { useApi } from '@/api/api.plugin';
import { onMounted, ref } from 'vue';
import type { User } from '@/@types/user';

const apiService = useApi();
const user = ref<User>();

onMounted(() => {
  apiService?.getUsers().then((res) => {
    user.value = res.data

    console.log(res.data);
  })
})
</script>

<template>
  <main >
    <div class="w-screen h-screen bg-gray-700 text-white flex items-center justify-center">
      <div class="font-bold tracking-widest">
        [{{ user?.id }}] {{ user?.name }}
      </div>
    </div>
  </main>
</template>
