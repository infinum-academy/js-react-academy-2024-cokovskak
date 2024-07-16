'use client'
import { useRouter } from 'next/navigation';
import styles from "./page.module.css";
import { useEffect } from 'react';
import { AuthRedirect } from '@/components/shared/AuthRedirect/AuthRedirect';



export default function Home() {
  <>
  <AuthRedirect to={"/login"} isLogged={false} />
  <AuthRedirect to={"/shows"} isLogged={true} />
</>
}
