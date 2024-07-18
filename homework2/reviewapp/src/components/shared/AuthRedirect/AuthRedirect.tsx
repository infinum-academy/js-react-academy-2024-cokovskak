'use client'
import { authFetcher, fetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useSWR, { mutate } from "swr";
interface IAuthRedirect {
    to: string,
    isLogged: boolean
 }
 
 export const AuthRedirect =({to, isLogged} :  IAuthRedirect)=>
 {
    const route = useRouter();
    const {data, isLoading} = useSWR(swrKeys.user, authFetcher);
    console.log("auth redirect");
    useEffect(() => {
       if (isLoading) return;
       console.log(data, isLogged);
       if (!data && isLogged == false) {
          route.push(to);
       }
 
       if (data && isLogged == true) { 
          route.push(to);
       }
 
    }, [data, isLoading, to, isLogged, route]);
 
    return null;
 }