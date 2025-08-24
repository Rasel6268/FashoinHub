'use client'
import Hero from "@/components/Hero";
import ProductHighlights from "@/components/ProductHighlights";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";



export default  function Home() {
  const session = useSession()
 
  return (
   <div>
    <Hero></Hero>
    <ProductHighlights></ProductHighlights>
   </div>
  );
}
