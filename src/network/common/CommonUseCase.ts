/*
  P: Parameter Type
  R: Response Type
*/

import { isCommonFailure, isCommonSuccess } from "@/utils";
import { CommonResult, Failure, Success } from ".";
import { commonErrorCode } from "@/types";

abstract class CommonUseCase<P, R> {
  public async invoke(parameter: P): Promise<CommonResult<R>> {
    try {
      const result = await this.execute(parameter);

      if (isCommonSuccess(result)) {
        return new Success(result.data);
      } else if (isCommonFailure(result)) {
        return new Failure(
          result.errorCode,
          result.errorMessage,
          result.errorData
        );
      } else {
        return new Failure(99, commonErrorCode[99]);
      }
    } catch (e) {
      return new Failure(99, commonErrorCode[99], e);
    }
  }

  protected abstract execute(parameter: P): Promise<CommonResult<R>>;
}

export default CommonUseCase;
