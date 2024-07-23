'use client'

import { RegisterForm } from "@/components/features/auth/RegisterForm/RegisterForm";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import { Container } from "@chakra-ui/react";

export default function Register(){
    return <>
          <AuthRedirect to="/all-shows" isLogged={true} />
        <RegisterForm/>
    </>
}