'use client'

import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import { fetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { Container, Flex, Heading,Text,Image } from "@chakra-ui/react";
import useSWR from "swr";

export interface IUser {
    uid: string;
    email: string;
    image_url: string;
  }
interface IApiResponse{
  user: IUser;
}

export default function MyProfile() {
    
  const { data } = useSWR(swrKeys.user, fetcher) as { data: IApiResponse };
  return (
    <>
      <AuthRedirect to="/login" isLogged={false}/>
      <Flex gap={30} flexDirection="column" padding={30} >
            <Heading  as='h2' >My profile</Heading>
            <Text>Email:
            {data?.user?.email}
            </Text>
            <Image  src= {data?.user.image_url ? data?.user.image_url:'/assets/images/noImage.jpg'} alt="Avatar" width="300px" height="300px"></Image>
      </Flex>
    

      
    </>
  );
}