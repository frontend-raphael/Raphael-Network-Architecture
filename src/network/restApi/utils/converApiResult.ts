import axios, { AxiosResponse } from "axios";
import { ApiFailure, ApiSuccess, CommonApiResult } from "..";
import { isAxiosResponse } from "@/utils";
import { commonErrorCode } from "@/types";

/*
  T: Response Type
  any: all Http Response
*/

const convertApiResult = <T>(
  res: AxiosResponse<T> | any
): CommonApiResult<T> => {
  if (isAxiosResponse(res)) {
    if (res.status >= 200 && res.status < 300) {
      return new ApiSuccess(res.data);
    } else {
      return new ApiFailure(res.status, res.statusText, null);
    }
  } else {
    if (axios.isAxiosError(res)) {
      if (res.response) {
        const { status, statusText, data } = res.response;
        let apiFailure = new ApiFailure(status, statusText, null);

        // customError
        if (data) {
          apiFailure = new ApiFailure(status, statusText, data);
        }

        return apiFailure;
      } else if (res.request) {
        res.request;
        return new ApiFailure(99, commonErrorCode[99], res);
      } else {
        return new ApiFailure(99, commonErrorCode[99], res);
      }
    } else {
      return new ApiFailure(99, commonErrorCode[99], res);
    }
  }
};

export default convertApiResult;
