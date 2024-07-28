'use client'
import { LoginForm } from "@/components/features/auth/LoginForm/LoginForm";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import { Container } from "@chakra-ui/react";

export default function Login(){
    return <>
     <AuthRedirect to="/all-shows" isLogged={true} />
     <LoginForm/></>
         
        
        
        
  
}