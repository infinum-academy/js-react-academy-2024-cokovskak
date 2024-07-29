'use client'
import { useRouter } from 'next/navigation';
import styles from "./page.module.css";
import { useEffect } from 'react';
import { AuthRedirect } from '@/components/shared/AuthRedirect/AuthRedirect';



export default function Home() {
  return(
  <>
  {/* <AuthRedirect to="/login" isLogged={false} />
  <AuthRedirect to="/all-shows" isLogged={true} /> */}
</>
  );
}
