import { ResponseGetImageDetail, ResponseGetImageList } from "../response";

interface PicsumApi {
  getImageList: (page: number, limit: number) => Promise<ResponseGetImageList>;
  getImageDetail: (id: number) => Promise<ResponseGetImageDetail>;
}

export type { PicsumApi };
