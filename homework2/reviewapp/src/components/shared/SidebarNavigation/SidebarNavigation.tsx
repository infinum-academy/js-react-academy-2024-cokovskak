'use client'
import { swrKeys } from "@/fetchers/swrKeys";
import { Flex,Heading,Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import useSWR from "swr";
export const SidebarNavigation=()=>{
  const pathname=usePathname();
  const route = usePathname();
  const to = useRouter();
  const {mutate} = useSWR(swrKeys.user);

  const logOut = () => {
     localStorage.setItem('loginInfo', '');
     mutate(null, {revalidate: false});
     to.push('/');
  }
return (
    <Flex bg="#2a0066" flexDirection="column" 
    gap={4} width="20vw" color="white" height="auto"
    minHeight="100vh"

    padding={10}
    fontSize="large"
    
    >
      <Heading marginLeft={2}> TV SHOWS APP</Heading>
      <Text color="white"  background={pathname === "/all-shows" ? "rgba(255, 255, 255, 0.2)" : "transparent"} as={NextLink} href={`/all-shows`}>
        All shows
      </Text>
      <Text color="white"  background={pathname === "/top-rated" ? "rgba(255, 255, 255, 0.2)" : "transparent"}  as={NextLink} href={`/top-rated`}>
        Top rated
      </Text>
      <Text color="white"  background={pathname === "/my-profile" ? "rgba(255, 255, 255, 0.2)" : "transparent"}  as={NextLink} href={`/my-profile`}>
        My profile
      </Text>
      <Text color="white" onClick={logOut} background={pathname === "/log-out" ? "rgba(255, 255, 255, 0.2)" : "transparent"}  as={NextLink} href={`/log-out`} marginTop="auto" fontSize="medium">
        Log out
      </Text>
    </Flex>
);

}