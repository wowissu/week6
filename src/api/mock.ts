import type { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';

export function useMock(axiosInstance: AxiosInstance) {
  const mock = new MockAdapter(axiosInstance);

  mock.onGet('/api/getUsers').reply(() => {
    return [200, [
      {
        "id": 4,
        "name" : "Wowissu"
      },
      {
        "id": 3,
        "name" : "Sophia"
      }
    ]]
  })

  mock.onGet('/api/getBooks').reply(() => {
    return [200, [
      {
        "id": 1,
        "name" : "窮爸爸富爸爸"
      }
    ]]
  })

  mock.onAny().reply(404);
}