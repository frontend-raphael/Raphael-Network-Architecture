import { defaultParams } from "@/resources";
import { PicsumService } from "..";
import {
  ResponseGetImageDetail,
  ResponseGetImageList,
  apiModule,
  convertApiResult,
} from "@/network";
import { convertCommonError } from "@/utils";

const getImageList = async (
  page: number,
  limit: number = defaultParams.limit
) => {
  const res = await apiModule
    .get<ResponseGetImageList>("v2/list", {
      params: {
        page: page,
        limit: limit,
      },
    })
    .catch((error) => {
      return convertCommonError(error);
    });

  return convertApiResult(res);
};

const getImageDetail = async (id: number) => {
  const res = await apiModule
    .get<ResponseGetImageDetail>(`/id/${id}/info`)
    .catch((error) => {
      return convertCommonError(error);
    });

  return convertApiResult(res);
};

const picsumServiceImpl: PicsumService = {
  getImageList: getImageList,
  getImageDetail: getImageDetail,
};

export default picsumServiceImpl;
