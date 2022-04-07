import type { User } from '@/@types/user'
import { useApi } from '@/api/api.plugin'
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    users: [] as User[]
  }),
  actions: {
    async fetchUsers() {
      const res = await useApi().getUsers();

      if (res.data) {
        this.$state.users = res.data;
      }
    }
  }
})
