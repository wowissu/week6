import { inject, type InjectionKey, type Plugin } from 'vue'
import axios, { type AxiosPromise } from 'axios'
import type { User } from '@/@types/user';
import { useMock } from '@/api/mock';
import type { Book } from '@/@types/book';

declare module 'vue' {
  interface ComponentCustomProperties {
    $api: ApiServices;
  }
}

interface ApiServices {
  getUsers(): AxiosPromise<User[]>
  getBooks(): AxiosPromise<Book[]>
}

export const apiProviderKey: InjectionKey<ApiServices> = Symbol('apiProvider');

const apiPlugin = {
  install(app) {
    const instance = axios.create({
      baseURL: '/api',
    })

    useMock(instance);

    const apiServices: ApiServices = {
      getUsers() {
        return instance.get('getUsers')
      },
      getBooks() {
        return instance.get('getBooks')
      }
    }

    app.config.globalProperties.$api = apiServices;
    app.provide(apiProviderKey, apiServices);
  }
} as Plugin

export function useApi () {

  const services = inject(apiProviderKey);

  if (!services) {
    throw new Error('Can not found services');
  }

  return services;
}

export default apiPlugin;