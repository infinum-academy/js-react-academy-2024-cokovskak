'use client'
import { useRouter } from 'next/navigation';
import styles from "./page.module.css";
import { useEffect } from 'react';



export default function Home() {
 const router=useRouter();
 
 useEffect(() => {
  router.replace('/all-shows');
}, [router]);

return null;
}
