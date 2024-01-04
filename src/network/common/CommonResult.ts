/*
  T: Data Type
*/

import {
  CommonErrorCode,
  CommonResultStatus,
  commonResultStatus,
} from "@/types";

abstract class CommonResult<T> {
  public readonly state: CommonResultStatus;

  protected constructor(state: CommonResultStatus) {
    this.state = state;
  }
}

class Success<T> extends CommonResult<T> {
  public readonly data: T;

  constructor(data: T) {
    super(commonResultStatus.SUCCESS);
    this.data = data;
  }
}

class Failure extends CommonResult<never> {
  public readonly errorCode: CommonErrorCode;
  public readonly errorMessage: string;

  constructor(errorCode: CommonErrorCode, errorMessage: string) {
    super(commonResultStatus.FAILURE);
    this.errorCode = errorCode;
    this.errorMessage = errorMessage;
  }
}

export { CommonResult, Success, Failure };