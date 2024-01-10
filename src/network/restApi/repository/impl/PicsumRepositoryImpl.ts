import { Failure, Success } from "@/network";
import { PicsumRepository } from "..";
import {
  PicsumImageListParams,
  PicsumImageDetailParams,
  picsumDataSourceImpl,
  PicsumItem,
} from "../..";
import { defaultParams } from "@/resources";
import { isApiFailure, isApiSuccess } from "@/utils";
import { commonErrorCode } from "@/types";

const getImageList = async (params: PicsumImageListParams) => {
  const res = await picsumDataSourceImpl.getImageList(
    params.page,
    (params.limit = defaultParams.limit)
  );

  if (isApiSuccess(res)) {
    const data = res.data.map((value) => {
      const picsumItem: PicsumItem = {
        id: value.id,
        author: value.author,
        url: value.url,
      };
      return picsumItem;
    });
    return new Success<PicsumItem[]>(data);
  } else if (isApiFailure(res)) {
    return new Failure(res.errorCode, res.message, res.errorData);
  }

  return new Failure(99, commonErrorCode[99]);
};

const getImageDetail = async (params: PicsumImageDetailParams) => {
  const res = await picsumDataSourceImpl.getImageDetail(params.id);

  if (isApiSuccess(res)) {
    const data: PicsumItem = {
      id: res.data.id,
      author: res.data.author,
      url: res.data.url,
    };
    return new Success(data);
  } else if (isApiFailure(res)) {
    return new Failure(res.errorCode, res.message, res.errorData);
  }

  return new Failure(99, commonErrorCode[99]);
};

const picsumRepositoryImpl: PicsumRepository = {
  getImageList: getImageList,
  getImageDetail: getImageDetail,
};

export default picsumRepositoryImpl;
