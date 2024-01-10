import { ApiFailure, ApiSuccess, CommonApiResult } from "@/network";

const isApiSuccess = <T>(
  result: CommonApiResult<T>
): result is ApiSuccess<T> => {
  return result.status === "SUCCESS";
};

const isApiFailure = <T>(result: CommonApiResult<T>): result is ApiFailure => {
  return result.status === "FAILURE";
};

export { isApiSuccess, isApiFailure };
