import { CommonErrorCode } from "@/types";

class CommonError extends Error {
  status: CommonErrorCode;
  errorMessage: string;

  constructor(status: CommonErrorCode, errorMessage: string, ...params: any) {
    super(...params);

    this.status = status;
    this.errorMessage = errorMessage;
  }
}

export default CommonError;
