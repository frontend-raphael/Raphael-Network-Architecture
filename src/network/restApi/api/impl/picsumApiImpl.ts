import { defaultParams } from "@/resources";
import { PicsumApi } from "..";
import {
  ResponseGetImageDetail,
  ResponseGetImageList,
  apiModule,
} from "@/network";

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
      return error;
    });

  return res;
};

const getImageDetail = async (id: number) => {
  const res = await apiModule
    .get<ResponseGetImageDetail>(`/id/${id}/info`)
    .catch((error) => {
      return error;
    });

  return res;
};

const picsumApiImpl: PicsumApi = {
  getImageList: getImageList,
  getImageDetail: getImageDetail,
};

export default picsumApiImpl;
