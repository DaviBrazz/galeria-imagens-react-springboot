'use client'

import { useAuth } from "@/resources"
import GaleriaPage from "./galeria/page";
import LoginPage from "./login/page";

export default function Home() {

  const auth = useAuth();
  const user = auth.getUserSession();

  if (!user) {
    return <LoginPage />
  }


  return (
    <GaleriaPage />
  )
}
