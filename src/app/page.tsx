import UserList from "./UserList";

export default async function Home() {
  // const queryClient = getQueryClient();

  // await queryClient.prefetchQuery({
  //   queryKey: ["city"],
  //   queryFn: () => QueryFn({ url: "/api/public/city/all" }),
  // });

  return (
    // <HydrationBoundary state={dehydrate(queryClient)}>
    <UserList />
    // </HydrationBoundary>
  );
}
