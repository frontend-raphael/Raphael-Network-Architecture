import { CommonResult, CommonUseCase, PicsumItem } from "@/network";
import { picsumRepositoryImpl } from "../../repository";

interface PicsumImageDetailParams {
  id: number;
}

class GetPicsumImageDetailUseCase extends CommonUseCase<
  PicsumImageDetailParams,
  PicsumItem
> {
  protected execute(
    parameter: PicsumImageDetailParams
  ): Promise<CommonResult<PicsumItem>> {
    return picsumRepositoryImpl.getImageDetail(parameter);
  }
}

export type { PicsumImageDetailParams };
export default GetPicsumImageDetailUseCase;
