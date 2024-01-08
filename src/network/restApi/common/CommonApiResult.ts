import {
  CommonErrorCode,
  CommonResultStatus,
  commonResultStatus,
} from "@/types";

abstract class CommonApiResult<T> {
  public readonly status: CommonResultStatus;
  public readonly data: T | null;
  public readonly errorCode: CommonErrorCode | null;
  public readonly message: string | null;

  protected constructor(
    status: CommonResultStatus,
    data: T | null,
    errorCode: CommonErrorCode | null,
    message: string | null
  ) {
    this.status = status;
    this.data = data;
    this.errorCode = errorCode;
    this.message = message;
  }
}

class ApiSuccess<T> extends CommonApiResult<T> {
  public readonly data: T;

  constructor(data: T) {
    super(commonResultStatus.SUCCESS, data, null, null);
    this.data = data;
  }
}

class ApiFailure extends CommonApiResult<never> {
  constructor(errorCode: CommonErrorCode, message: string) {
    super(commonResultStatus.FAILURE, null, errorCode, message);
  }
}

export { CommonApiResult, ApiSuccess, ApiFailure };
