import { get } from '../api/index';
import CONFIG from '../config/config';

type ResponseBody = {
  data: [];
};

export async function getBooks(page: number, limit: number): Promise<ResponseBody> {
  let res = await get<ResponseBody>(`${CONFIG.API}?limit=${limit}&page=${page}`);
  console.log(res);
  return res;
}
