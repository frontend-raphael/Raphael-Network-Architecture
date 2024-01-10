import { AxiosResponse } from "axios";

const isAxiosResponse = (response: any): response is AxiosResponse => {
  return (
    "config" in response &&
    "data" in response &&
    "headers" in response &&
    "status" in response &&
    "statusText" in response
  );
};

export default isAxiosResponse;
