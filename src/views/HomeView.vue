<script setup lang="ts">
import { useApi } from '@/api/api.plugin';
import { onMounted, ref } from 'vue';
import type { User } from '@/@types/user';

const apiService = useApi();
const users = ref<User[]>();

onMounted(() => {
  apiService?.getUsers().then((res) => {
    users.value = res.data

    console.log(res.data);
  })
})

function getBooks() {
  apiService?.getBooks().then((res) => {
    console.log(res);
  })
}
</script>

<template>
  <main >
    <div class="w-screen h-screen bg-gray-700 text-white flex items-center justify-center">
      <div class="space-y-10">
        <div class="font-bold tracking-widest" v-for="user in users" :key="user.id">
          [{{ user.id }}] {{ user.name }}
        </div>
        <div>
          <button class="rounded bg-red-400 p-4" @click="getBooks">Call Other API</button>
        </div>
      </div>

    </div>
  </main>
</template>
