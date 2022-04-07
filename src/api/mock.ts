import type { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';

export function useMock(axiosInstance: AxiosInstance) {
  const mock = new MockAdapter(axiosInstance);

  mock.onGet('/api/getUser').reply(() => {
    return [200, {
      "id": 4,
      "name" : "Wowissu"
    }]
  })
}