import { getQueryClient } from "@/lib/api/get-query-client";
import { QueryFn } from "@/lib/api/QueryFn";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import UserList from "./UserList";

export default async function Home() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["user"],
    queryFn: () => QueryFn({ url: "/api" }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UserList />
    </HydrationBoundary>
  );
}
