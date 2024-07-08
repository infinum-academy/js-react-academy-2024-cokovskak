'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { IShow } from "./typings/show";
import { ShowDetails } from "./components/features/shows/ShowDetails/ShowDetails";
import { useState } from "react";
import { ShowContainer } from "./components/features/shows/ShowContainer/ShowContainer";


export default function Home() {
 
 
  return (
    <main className={styles.main}>
      <ShowContainer></ShowContainer>
    </main>
  );
}
