/*
  P: Parameter Type
  R: Response Type
*/

import { isCommonSuccess } from "@/utils/typeGuard";
import { CommonError, CommonResult, Failure, Success } from ".";
import { commonErrorCode } from "@/types";

abstract class CommonUseCase<P, R> {
  public async invoke(parameter: P): Promise<CommonResult<R>> {
    try {
      const result: CommonResult<R> = await this.execute(parameter);

      if (isCommonSuccess(result)) {
        return new Success(result.data);
      }

      return new Failure(commonErrorCode[99], commonErrorCode[99]);
    } catch (e) {
      if (e instanceof CommonError) {
        return new Failure(e.status, e.errorMessage);
      }

      return new Failure(commonErrorCode[99], commonErrorCode[99]);
    }
  }

  protected abstract execute(parameter: P): Promise<CommonResult<R>>;
}

export default CommonUseCase;
