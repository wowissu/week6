import type { User } from '@/@types/user'
import { useApi } from '@/api/api.plugin'
import { defineStore } from 'pinia'
import { reactive, ref, toRefs } from 'vue';

// export const useUserStore = defineStore({
//   id: 'user',
//   state: () => ({
//     users: [] as User[]
//   }),
//   actions: {
//     async fetchUsers() {
//       const res = await useApi().getUsers();

//       if (res.data) {
//         this.$state.users = res.data;
//       }
//     }
//   }
// })

export const useUserStore = defineStore('user', () => {

  const state = reactive({
    users: [] as User[]
  });

  // const users = ref<User[]>();

  async function fetchUsers() {
    const res = await useApi().getUsers();

    if (res.data) {
      state.users = res.data;
      // users.value = res.data;
    }
  }

  return {
    ...toRefs(state),
    fetchUsers
  }
})
