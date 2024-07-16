'use client'
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import { fetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { useEffect } from "react";
import useSWR from "swr";

function clearLocalStorage() {
  localStorage.removeItem("uid");
  localStorage.removeItem("access-token");
  localStorage.removeItem("client");
}
export default function Logout(){
  const { data, isLoading, mutate } =  useSWR(swrKeys.user, fetcher);
  useEffect(() => {
    if (isLoading) {
      return;
    }
    clearLocalStorage();
    mutate(undefined, {"revalidate": false});
  }, [data, isLoading, mutate]);

  return <AuthRedirect to="/login" isLogged={true} />;
}