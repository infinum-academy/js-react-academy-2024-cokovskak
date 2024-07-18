'use client'
import { mutator } from "@/fetchers/mutators";
import { swrKeys } from "@/fetchers/swrKeys";
import { Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading,Input,InputGroup,InputLeftElement,Link,Text, chakra } from "@chakra-ui/react"
import { useState } from "react";
import { useForm } from "react-hook-form"
import useSWRMutation from "swr/mutation";
import { useRouter } from "next/navigation";
import { EmailIcon } from "@chakra-ui/icons";
import PasswordInput from "../PasswordInput/PasswordInput";
import { mutate } from "swr";


interface IRegisterFormInputs {
    email: string;
    password: string;
    password_confirmation: string;
  }
  

export const  RegisterForm=()=> {
    const router = useRouter();
    const [registered, setRegistered] = useState(false);
    const {register, handleSubmit, watch, setError, formState: {isSubmitting, errors}} = useForm<IRegisterFormInputs>();
 
    const {trigger} = useSWRMutation(swrKeys.register, mutator, {
       onError: (error,) => { 
          setError("email", {message: error.errors[0]});
       },
       onSuccess: (data) => {
         mutate(swrKeys.user,data,{revalidate: false});
          setRegistered(true);
       }
    });
 
    const onRegister = async (data : IRegisterFormInputs) => {
       try {
          await trigger(data);
       }
       catch(error) {}
    }
 
    const emailRequirements = {
       required: 'Email is required'
    }
 
    const passwordRequirements = {
       required: 'Password is required', 
       minLength: {
          value: 8, 
          message: 'At least 8 characters'
       }
    }
 
    const passwordConfirmationRequirements = {
       ...passwordRequirements,
       validate: {
          equals: (value: string) => {
             return watch("password") == value || 'Make sure passwords are the same';
          }
       }
    }
 
    return <>
    {registered && (router.push("/login"))}
    {!registered && (
       <Flex margin="auto" direction="column" padding={2} alignItems="center">
          <chakra.form width="80%" onSubmit={handleSubmit(onRegister)}>
             
             <FormControl isInvalid={Boolean(errors.email)} marginTop={10} gap={10 }as='fieldset' disabled={isSubmitting} display="flex" flexDirection="column"  padding={2} borderRadius="20px">
                
                <InputGroup  marginBottom={2} display="flex" flexDirection="column" alignContent="left">
                   <InputLeftElement>
                      <EmailIcon color="white" />
                   </InputLeftElement>
                   <Input {...register("email", emailRequirements)} type="email" color="white" placeholder="Email"/>

                </InputGroup>
                <FormErrorMessage margin={0} textAlign="left">{errors?.email?.message}</FormErrorMessage>

             </FormControl>

            <FormControl isInvalid={Boolean(errors.password)} marginTop={10} gap={10 }as='fieldset' disabled={isSubmitting} display="flex" flexDirection="column"  padding={2} borderRadius="20px">
                <PasswordInput registerProps={{...register("password", passwordRequirements)}} errors={errors.password} />
                <FormErrorMessage margin={0} textAlign="left">{errors?.password?.message}</FormErrorMessage>
            </FormControl>
                
            <FormControl  isInvalid={Boolean(errors.password_confirmation)} marginTop={10} gap={10 }as='fieldset' disabled={isSubmitting} display="flex" flexDirection="column"  padding={2} borderRadius="20px">
                <PasswordInput registerProps={{...register("password_confirmation", passwordConfirmationRequirements)}} errors={errors.password_confirmation} />
                <FormErrorMessage margin={0} textAlign="left">{errors?.password_confirmation?.message}</FormErrorMessage>

             </FormControl>
              
            <FormControl marginTop={10} gap={10 }as='fieldset' disabled={isSubmitting} display="flex" flexDirection="column"  padding={2} borderRadius="20px">
               <Button isLoading={isSubmitting} width="60%" type="submit" color="darkblue" margin="auto">SIGN UP</Button>
            </FormControl>
            
            <FormControl marginTop={10} gap={10 }as='fieldset' disabled={isSubmitting} display="flex" flexDirection="column"  padding={2} borderRadius="20px">
                <FormHelperText textAlign="center" color="white">Already have an account? <Link fontWeight="bold" href="/login">Login</Link></FormHelperText>
            </FormControl>
          </chakra.form>
       </Flex>
    )}
    </>;
 }