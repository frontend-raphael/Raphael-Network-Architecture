import { CommonResultStatus, commonResultStatus } from "@/types";
abstract class CommonApiResult<T> {
  public readonly status: CommonResultStatus;

  protected constructor(status: CommonResultStatus) {
    this.status = status;
  }
}

class ApiSuccess<T> extends CommonApiResult<T> {
  public readonly data: T;

  constructor(data: T) {
    super(commonResultStatus.SUCCESS);
    this.data = data;
  }
}

class ApiFailure extends CommonApiResult<never> {
  public readonly errorCode: number;
  public readonly message: string;
  public readonly errorData: any | null; // your Custom Error Type
  constructor(errorCode: number, message: string, errorData: any = null) {
    super(commonResultStatus.FAILURE);
    this.errorCode = errorCode;
    this.message = message;
    this.errorData = errorData;
  }
}

export { CommonApiResult, ApiSuccess, ApiFailure };
