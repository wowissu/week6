import { inject, type InjectionKey, type Plugin } from 'vue'
import axios, { type AxiosPromise } from 'axios'
import type { User } from '@/@types/user';

declare module 'vue' {
  interface ComponentCustomProperties {
    $api: ApiServices;
  }
}

interface ApiServices {
  getUsers(): AxiosPromise<User>
}

export const apiProviderKey: InjectionKey<ApiServices> = Symbol('apiProvider');

const apiPlugin = {
  install(app) {
    const instance = axios.create({
      baseURL: '/api',
    })

    const apiServices: ApiServices = {
      getUsers() {
        return instance.get('getUser')
      }
    }

    app.config.globalProperties.$api = apiServices;
    app.provide(apiProviderKey, apiServices);
  }
} as Plugin

export function useApi () {
  return inject(apiProviderKey);
}

export default apiPlugin;