import { AxiosError, AxiosResponse } from "axios";
import { axiosInstance } from "./axiosInstance";
import { TBaseResponse } from "@/types/response";
import { toast } from "sonner";

type props = {
  url: string;
  params?: unknown;
};

export async function QueryFn({ url, params }: props) {
  try {
    const response: AxiosResponse<TBaseResponse<unknown>> = await axiosInstance({
      method: "GET",
      url,
      params,
    });
    const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: "Sonner" }), 2000));

    toast.promise(promise, {
      loading: "Loading...",
      success: response.data.message,
    });

    return response.data;
  } catch (err) {
    const error = err as AxiosError<TBaseResponse<unknown>>;

    toast(`message: ${error.message}`, {
      description: `error code: ${error.code}`,
      action: {
        label: "close",
        onClick: () => console.log("close"),
      },
    });
  }
}
