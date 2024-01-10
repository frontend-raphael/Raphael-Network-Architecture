import { AxiosResponse } from "axios";
import { ResponseGetImageDetail, ResponseGetImageList } from "../../response";

interface PicsumApi {
  getImageList: (
    page: number,
    limit: number
  ) => Promise<AxiosResponse<ResponseGetImageList>>;
  getImageDetail: (
    id: number
  ) => Promise<AxiosResponse<ResponseGetImageDetail>>;
}

export type { PicsumApi };
