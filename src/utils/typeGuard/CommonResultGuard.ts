import { CommonResult, Failure, Success } from "@/network/common";

const isCommonSuccess = <T>(result: CommonResult<T>): result is Success<T> => {
  return result.state === "SUCCESS";
};

const isCommonFailure = <T>(result: CommonResult<T>): result is Failure => {
  return result.state === "FAILURE";
};

export { isCommonSuccess, isCommonFailure };
