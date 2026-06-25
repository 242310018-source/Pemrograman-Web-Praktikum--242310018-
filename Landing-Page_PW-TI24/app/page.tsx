"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/landing-pages/navbar";
import {HeroSection} from "../components/landing-pages/herosection";
import FeaturedBooksSection from "../components/landing-pages/featuressection"
import {CategoriesSection} from "../components/landing-pages/categoriessection"
import {TestimonSection} from "../components/landing-pages/testimonsection"

export default function Home() {
  const [info, setInfo] = useState(null);

  const GetAPIInfo = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/info");
      setInfo(response.data);
    } catch (error) {
      console.error("Error fetching API data:", error);

      if (error instanceof Error) {
        setInfo(error.message);
      } else {
        setInfo(String(error));
      }
    }
  };

  useEffect(() => {
    GetAPIInfo();
  }, []);

  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <FeaturedBooksSection/>
      <CategoriesSection/>
      <TestimonSection/>

      
      {/* {info && <pre>{JSON.stringify(info, null, 2)}</pre>} */}
    </div>
  );
}