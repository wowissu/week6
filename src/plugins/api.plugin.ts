import { inject, provide, type App, type InjectionKey, type Plugin } from 'vue'
import axios, { type AxiosPromise } from 'axios'

declare module 'vue' {
  interface ComponentCustomProperties {
    $api: ApiServices;
  }
}

interface User {
  name : string;
  password : string;
  profession : string;
  id: number;
}

interface ApiServices {
  getUsers(): AxiosPromise<Record<string, User>>
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

    app.config.globalProperties.$api = apiServices
    app.provide(apiProviderKey, apiServices);
  }
} as Plugin

export function useApi () {
  return inject(apiProviderKey);
}

export default apiPlugin;