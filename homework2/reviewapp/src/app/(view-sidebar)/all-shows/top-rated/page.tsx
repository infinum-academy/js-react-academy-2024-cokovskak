"use client";

import { TopRated } from "@/components/features/shows/TopRatedSection/TopRatedSection";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";


export default function TopRatedPage() {
	return (
	<>
	 <AuthRedirect to="/login" isLogged={false}/>
	 <TopRated />
	</>);
}