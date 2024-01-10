import { defaultParams } from "@/resources";
import { PicsumDataSource } from "..";
import {
  CommonApiResult,
  ResponseGetImageDetail,
  ResponseGetImageList,
  convertApiResult,
  picsumApiImpl,
} from "@/network";

const getImageList = async (
  page: number,
  limit: number = defaultParams.limit
): Promise<CommonApiResult<ResponseGetImageList>> => {
  const res = await picsumApiImpl.getImageList(page, limit);

  return convertApiResult(res);
};

const getImageDetail = async (
  id: number
): Promise<CommonApiResult<ResponseGetImageDetail>> => {
  const res = await picsumApiImpl.getImageDetail(id);

  return convertApiResult(res);
};

const picsumDataSourceImpl: PicsumDataSource = {
  getImageList: getImageList,
  getImageDetail: getImageDetail,
};

export default picsumDataSourceImpl;
