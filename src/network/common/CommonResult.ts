/*
  T: Data Type
*/

import { CommonResultStatus, commonResultStatus } from "@/types";

abstract class CommonResult<T> {
  public readonly status: CommonResultStatus;

  protected constructor(status: CommonResultStatus) {
    this.status = status;
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
  public readonly errorCode: number;
  public readonly errorMessage: string;
  public readonly errorData: any | null; // your Custom Error Type

  constructor(errorCode: number, errorMessage: string, errorData: any = null) {
    super(commonResultStatus.FAILURE);
    this.errorCode = errorCode;
    this.errorMessage = errorMessage;
    this.errorData = errorData;
  }
}

export { CommonResult, Success, Failure };
