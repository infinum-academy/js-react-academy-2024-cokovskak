'use client';

import { ShowContainer } from "@/components/features/shows/ShowContainer/ShowContainer";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";

export default function ShowCardPage()
{

    return (                
        <>
         <AuthRedirect to="/login" isLogged={false}/>
         <ShowContainer/> 
        </>

   );
}