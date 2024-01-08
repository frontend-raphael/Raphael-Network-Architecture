import { CommonResult, Failure, Success } from "@/network/common";

const isCommonSuccess = <T>(result: CommonResult<T>): result is Success<T> => {
  return result.status === "SUCCESS";
};

const isCommonFailure = <T>(result: CommonResult<T>): result is Failure => {
  return result.status === "FAILURE";
};

export { isCommonSuccess, isCommonFailure };
