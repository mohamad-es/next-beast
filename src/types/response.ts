export type TBaseResponse<T> = {
  response_code: number;
  is_success: boolean;
  message: string;
  data: T;
};
