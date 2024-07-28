'use client'
import { Stepper } from "@/components/features/stepper/Stepper/Stepper";
import { swrKeys } from "@/fetchers/swrKeys";
import { fontSize } from "@/styles/theme/foundations/font";
import { Button, Flex,Heading,Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import useSWR, { mutate } from "swr";
export const SidebarContent=()=>{
  const pathname=usePathname();
  const to=useRouter();
  const onLogout=()=>{
    localStorage.removeItem('loginInfo');
    mutate(swrKeys.user,null,{revalidate: false});
   to.push('/');
  }
return (
  <>


  <Button as={NextLink} href="/all-shows" variant="navbar"  isActive={pathname === "/all-shows"}   >
    All shows
  </Button>
  <Button as={NextLink} href="/all-shows/top-rated" variant="navbar"  isActive={pathname === "/all-shows/top-rated"} >
    Top rated
  </Button>
  <Button  as={NextLink} href="/my-profile" variant="navbar" isActive={pathname === "/my-profile"} >
    My profile
  </Button>
  <Stepper/>
  <Button onClick={onLogout} variant="navbar"    fontSize="medium"  >
    Log out
  </Button>
</>
);

}