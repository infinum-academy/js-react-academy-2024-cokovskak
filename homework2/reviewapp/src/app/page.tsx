'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { IShow } from "./typings/show";
import { ShowDetails } from "./components/features/shows/ShowDetails/ShowDetails";
import { useState } from "react";

const mockShow : IShow = {
  title: 'Brooklyn99',
  description: `Comedy series following the exploits of Det. Jake Peralta and his diverse, 
               lovable colleagues as they police the NYPD's 99th Precinct.`,
  imageUrl: 'https://roost.nbcuni.com/bin/viewasset.html/content/dam/Peacock/Landing-Pages/2-0-design/bk99/brooklyn-99-social.jpg/_jcr_content/renditions/original.JPEG',
  averageRating: 0
};
export default function Home() {
 
  const [show, setShow] = useState(mockShow);
  return (
    <main className={styles.main}>
      <ShowDetails show={show}></ShowDetails>
    </main>
  );
}
