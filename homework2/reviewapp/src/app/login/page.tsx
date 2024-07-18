'use client'
import { LoginForm } from "@/components/features/auth/LoginForm/LoginForm";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import { Container } from "@chakra-ui/react";

export default function Login(){
    return <Container marginTop={50} maxBlockSize={700} backgroundColor="#371587" padding={50}>
         
         <AuthRedirect to="/all-shows" isLogged={true} />
         <LoginForm/>
        
        
    </Container>
}