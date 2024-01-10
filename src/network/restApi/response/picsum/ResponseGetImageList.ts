interface ResponseGetImageItem {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

type ResponseGetImageList = ResponseGetImageItem[];

export type { ResponseGetImageList };
