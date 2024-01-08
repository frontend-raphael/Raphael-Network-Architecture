import { ApiFailure, ApiSuccess, CommonApiResult } from "..";
import { AxiosResponse } from "axios";
import { getCommonErrorCode } from "@/utils";

/*
  T: Response Type
  any: all Http Response
*/

const convertApiResult = <T>(
  res: AxiosResponse<T, any>
): CommonApiResult<T> => {
  if (res.status >= 200 && res.status < 300) {
    return new ApiSuccess(res.data);
  } else {
    return new ApiFailure(getCommonErrorCode(res.status), res.statusText);
  }
};

export default convertApiResult;
