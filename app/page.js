import Image from "next/image";
import Layout from "./components/Layout"
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3"
import Slideshow from "./components/Slideshow";

export default function Home() {
  return (
   <>
   
   <Layout>

    <Hero />

    <Hero2 />

    <Hero3 />

    <Slideshow />



    </Layout>
   </>
  );
}
