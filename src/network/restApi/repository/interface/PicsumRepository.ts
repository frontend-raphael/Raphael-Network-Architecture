import { CommonResult } from "@/network";
import {
  PicsumImageDetailParams,
  PicsumImageListParams,
  PicsumItem,
} from "../..";

interface PicsumRepository {
  getImageList: (
    params: PicsumImageListParams
  ) => Promise<CommonResult<PicsumItem[]>>;
  getImageDetail: (
    params: PicsumImageDetailParams
  ) => Promise<CommonResult<PicsumItem>>;
}

export type { PicsumRepository };
