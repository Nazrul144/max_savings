'use client'

import Works from "@/components/addYourBusiness/Works";
import Finance from "@/components/browseCatagories/Finance";
import Travel from "@/components/browseCatagories/Travel";
import About from "@/components/publicLandingPage/About";
import EmailSubscription from "@/components/publicLandingPage/EmailSubscription";
import Faq from "@/components/publicLandingPage/Faq";
import Header from "@/components/publicLandingPage/Header";
import LatestNews from "@/components/publicLandingPage/LatestNews";
import Subscription from "@/components/publicLandingPage/Subscription";
import BrowseCategories from "@/components/userLandingPage/BrowseCategories";
import Fasion from "@/components/userLandingPage/Fasion";
import Hero from "@/components/userLandingPage/Hero";
import HomeAndLifeStyle from "@/components/userLandingPage/HomeAndLifeStyle";
import { useState } from "react";



export default function Home() {

  const [isLogin, setIsLogin] = useState(true)

  if(isLogin){
    return (
      <div>
        <Hero/>
        <BrowseCategories/>
        <Fasion/>
        <Travel/>
        <HomeAndLifeStyle/>
        <Finance/>
        <EmailSubscription/>
        <Faq/>
      </div>
    )
  }

  return (
    <div>
      <Header/>
      <Works/>
      <About/>
      <Subscription/>
      <LatestNews/>
      <EmailSubscription/>
      <Faq/>
    </div>
  );
}
