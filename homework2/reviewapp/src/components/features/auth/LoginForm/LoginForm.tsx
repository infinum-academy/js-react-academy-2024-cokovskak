'use client'

import { mutator } from "@/fetchers/mutators";
import { swrKeys } from "@/fetchers/swrKeys";
import { EmailIcon } from "@chakra-ui/icons";
import { Flex, Image,chakra, FormControl, InputGroup, InputLeftElement, Input, FormHelperText, Button, FormErrorMessage, useStyleConfig } from "@chakra-ui/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import useSWR, { mutate } from "swr";
import useSWRMutation from "swr/mutation";
import PasswordInput from "../PasswordInput/PasswordInput";

interface ILoginFormInput {
    email: string,
    password: string
 }

 export const LoginForm=()=>{
    const {register, handleSubmit, setError,formState: {isSubmitting, errors}} = useForm<ILoginFormInput>();
    
    const {trigger} = useSWRMutation(swrKeys.login, mutator, {
       onSuccess: (data) => {
          mutate(swrKeys.user,data, {revalidate: false});
       },
       onError: async (error) => {
         setError("email", {message: error.errors[0]});
      }
    });
 
    const onLogin = async (data: ILoginFormInput) => {
       try {
          await trigger(data);
       }
       catch(error) {}
    }
   
    return (
       <Flex flexDirection= "column"
       alignItems="center"
       borderRadius="24px"
       bg="purple.200"
       margin= "auto"
       marginTop="150px"
       width= "500px"
       height= "600px"
       padding="20px"
       gap="30px"       position= "relative"   >
          <Flex   marginTop={10} >
         <Image width="200px" height="32px" src="/assets/images/logo.png"/>
         </Flex>
          <chakra.form width="80%" onSubmit={handleSubmit(onLogin)}>
            
             <FormControl isInvalid={Boolean(errors.email)}  as='fieldset' isDisabled={isSubmitting} display="flex" flexDirection="column" padding={2} borderRadius="20px">
                <InputGroup marginBottom={2} display="flex" flexDirection="column" alignContent="left">
                   <InputLeftElement>
                      <EmailIcon color="white" />
                   </InputLeftElement>
                   <Input {...register("email", {required: 'Email is required'})} type="email" color="white" placeholder="Email" data-testid="email"/>
               </InputGroup>

               <FormErrorMessage  margin={0} textAlign="left">{errors?.email?.message}</FormErrorMessage>
               </FormControl>
            
            
            <FormControl  isInvalid={Boolean(errors.password)} as='fieldset' isDisabled={isSubmitting} display="flex" flexDirection="column" padding={2} borderRadius="20px">

                <PasswordInput data-testid="password" registerProps={{...register("password", {required: 'Password is required'})}} errors={errors}  />
                <FormErrorMessage  margin={0} textAlign="left">{errors?.password?.message}</FormErrorMessage>

             </FormControl>
             
             <FormControl as='fieldset' isDisabled={isSubmitting} display="flex" flexDirection="column" padding={2} borderRadius="20px">
             
               <Button isLoading={isSubmitting} width="60%" type="submit" color="darkblue" margin="auto" data-testid="loginButton">LOGIN</Button>
 
             </FormControl>
             
             <FormControl  as='fieldset' isDisabled={isSubmitting} display="flex" flexDirection="column" padding={2} borderRadius="20px">
            
                <FormHelperText textAlign="center" color="white">Don't have an account? <Link  href="/register">Register</Link></FormHelperText>

             </FormControl>
          </chakra.form>
       </Flex>
    )
 }