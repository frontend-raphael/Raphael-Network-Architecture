import axios from "axios";

const apiModule = axios.create({
  baseURL: "https://picsum.photos/v2/list",
});

export default apiModule;
