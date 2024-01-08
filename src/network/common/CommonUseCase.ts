/*
  P: Parameter Type
  R: Response Type
*/

import { CommonError, CommonResult, Failure, Success } from ".";
import { commonErrorCode } from "@/types";

abstract class CommonUseCase<P, R> {
  public async invoke(parameter: P): Promise<CommonResult<R>> {
    try {
      const result = (await this.execute(parameter)) as Success<R>;

      return new Success(result.data);
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
