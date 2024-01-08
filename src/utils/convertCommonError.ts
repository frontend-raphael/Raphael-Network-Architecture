import { CommonError } from "@/network";
import { commonErrorCode } from "@/types";
import axios, { AxiosError } from "axios";

const getCommonErrorCode = (code: number) => {
  if (code in commonErrorCode) {
    return commonErrorCode[code];
  } else {
    return commonErrorCode[99];
  }
};

const convertCommonError = (error: Error | AxiosError) => {
  console.error(error);
  if (axios.isAxiosError(error)) {
    if (error.response) {
      throw new CommonError(
        getCommonErrorCode(error.response.status),
        error.message
      );
    } else if (error.request) {
      throw new CommonError(commonErrorCode[99], error.message);
    } else {
      throw new CommonError(commonErrorCode[99], "AXIOS ERROR");
    }
  } else {
    throw new CommonError(commonErrorCode[99], error.message);
  }
};

export { getCommonErrorCode };
export default convertCommonError;
