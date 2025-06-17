import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { axiosInstance } from "./axiosInstance";
import { TBaseResponse } from "@/types/response";
import { createFormData } from "../utils/createFormData";
import { toast } from "sonner";

type Props = {
  url: string;
  offToast?: boolean;
  onSuccess?: () => void;
  onError?: () => void;
};

const MutationFn = ({ url, onSuccess, onError, offToast }: Props) => {
  const mutation = useMutation({
    mutationFn: async (data: Record<string, unknown>) => {
      try {
        const formData = createFormData(data);
        const response: AxiosResponse<TBaseResponse<unknown>> = await axiosInstance({
          method: "POST",
          url,
          data: formData,
        });

        if (!offToast) {
          const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: "Sonner" }), 2000));

          toast.promise(promise, {
            loading: "Loading...",
            success: response.data.message,
          });
        }

        return response;
      } catch (err) {
        const error = err as AxiosError<TBaseResponse<unknown>>;

        const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: "Sonner" }), 2000));

        toast.promise(promise, {
          loading: "Loading...",
          error: error.message,
        });
      }
    },
    onSuccess,
    onError,
  });

  return {
    mutate: mutation.mutate,
    isPending: mutation.isPending,
    error: mutation.error,
    reset: mutation.reset,
  };
};

export default MutationFn;
