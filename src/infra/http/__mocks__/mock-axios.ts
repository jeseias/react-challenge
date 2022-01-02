import axios from 'axios'
import * as faker from 'faker'

export const mockHttpResponse = (): any => ({
  data: faker.random.objectElement(),
  status: faker.random.arrayElement([200, 201, 400, 400, 500])
})  

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.request.mockResolvedValue(mockHttpResponse())
  return mockedAxios
}