import {
  CommonApiResult,
  ResponseGetImageDetail,
  ResponseGetImageList,
} from "../..";

interface PicsumService {
  getImageList: (
    page: number,
    limit: number
  ) => Promise<CommonApiResult<ResponseGetImageList>>;
  getImageDetail: (
    id: number
  ) => Promise<CommonApiResult<ResponseGetImageDetail>>;
}

export type { PicsumService };
