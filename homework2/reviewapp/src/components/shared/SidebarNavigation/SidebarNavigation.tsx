'use client'
import { swrKeys } from "@/fetchers/swrKeys";
import { fontSize } from "@/styles/theme/foundations/font";
import { Button, Flex,Heading,Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import useSWR, { mutate } from "swr";
export const SidebarNavigation=()=>{
  const pathname=usePathname();
  const to=useRouter();
  const onLogout=()=>{
    localStorage.removeItem('loginInfo');
    mutate(swrKeys.user,null,{revalidate: false});
   to.push('/');
  }
return (
  <Flex
  bg="darkpurple"
  flexDirection="column"
  gap={4}
  width="20vw"
  color="white"
  height="auto"
  minHeight="100vh"
  padding={10}
  fontSize={fontSize.title}
>
  <Button as={NextLink} href="/all-shows" variant="navbar"  isActive={pathname === "/all-shows"}   >
    All shows
  </Button>
  <Button as={NextLink} href="/all-shows/top-rated" variant="navbar"  isActive={pathname === "/all-shows/top-rated"} >
    Top rated
  </Button>
  <Button  as={NextLink} href="/my-profile" variant="navbar" isActive={pathname === "/my-profile"} >
    My profile
  </Button>
  <Button onClick={onLogout} variant="navbar"  marginTop="auto"  fontSize="medium"  >
    Log out
  </Button>
</Flex>
);

}