import { QueryFn } from "@/lib/api/query-fn";
import React from "react";

const UserList = async () => {
  const data = await QueryFn({ url: "/api/public/city/all" });

  return <div>{JSON.stringify(data)}</div>;
};

export default UserList;
