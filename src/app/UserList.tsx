"use client";

import { QueryFn } from "@/lib/api/QueryFn";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const UserList = () => {
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: () => QueryFn({ url: "/api" }),
  });

  return <div>{JSON.stringify(data)}</div>;
};

export default UserList;
