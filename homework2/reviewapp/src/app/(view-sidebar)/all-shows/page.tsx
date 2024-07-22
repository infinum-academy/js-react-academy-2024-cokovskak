"use client";

import { ShowsListSection } from "@/components/features/shows/ShowsListSection/ShowsListSection";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";

export default function AllShows(){
   
        return (
                <>
                <AuthRedirect to="/login" isLogged={false}/>
                <ShowsListSection />
                </>
         );
    
}