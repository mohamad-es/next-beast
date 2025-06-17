import { QueryFn } from "@/lib/api/QueryFn";
import React from "react";

const UserList = async () => {
  const data = await QueryFn({ url: "/api/public/city/all" });

  return <div>{JSON.stringify(data)}</div>;
};

export default UserList;
