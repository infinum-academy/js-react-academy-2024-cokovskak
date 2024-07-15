import { RegisterForm } from "@/components/features/auth/RegisterForm/RegisterForm";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import { Container } from "@chakra-ui/react";

export default function Register(){
    return <Container marginTop={50} maxBlockSize={700} backgroundColor="#371587" padding={50}>
        <AuthRedirect to="/all-shows" condition="isLoggedIn" />

        <RegisterForm/>
    </Container>
}