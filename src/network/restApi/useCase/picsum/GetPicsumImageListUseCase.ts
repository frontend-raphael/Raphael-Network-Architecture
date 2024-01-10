import { CommonResult, CommonUseCase, PicsumItem } from "@/network";
import { picsumRepositoryImpl } from "../../repository";

interface PicsumImageListParams {
  page: number;
  limit?: number;
}

class GetPicsumImageListUseCase extends CommonUseCase<
  PicsumImageListParams,
  PicsumItem[]
> {
  protected execute(
    parameter: PicsumImageListParams
  ): Promise<CommonResult<PicsumItem[]>> {
    return picsumRepositoryImpl.getImageList(parameter);
  }
}

export type { PicsumImageListParams };
export default GetPicsumImageListUseCase;
