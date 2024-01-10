import { isApiFailure, isApiSuccess } from "@/utils";
import { CommonApiResult } from "..";
import { Success, Failure } from "@/network";
import { commonErrorCode } from "@/types";

const convertCommonResult = <T>(res: CommonApiResult<T>) => {
  if (isApiSuccess(res)) {
    return new Success(res.data);
  } else if (isApiFailure(res)) {
    return new Failure(res.errorCode, res.message, res.errorData);
  }

  return new Failure(99, commonErrorCode[99]);
};

export default convertCommonResult;
