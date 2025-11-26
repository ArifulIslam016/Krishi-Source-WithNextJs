"use client";
import FertilizerTools from '@/Components/FertilizerTools/FertilizerTools';
import Footer from '@/Components/footer/footer';
import Getupdates from '@/Components/Getupdates/Getupdates';
import HowItworks from '@/Components/HowItWorks/HowItWorks';
import LatestProducts from '@/Components/LatestProducts/LatestCrops';
import Navbar from '@/Components/Navbar/Navbar';
import News from '@/Components/News/News';
import Slider from '@/Components/Slider/Slider';
import React, {  useContext } from 'react';

const Page = () => { 

  return (
<div>
<Slider></Slider>
<LatestProducts></LatestProducts>
<HowItworks></HowItworks>
<News></News>
<FertilizerTools></FertilizerTools>
<Getupdates></Getupdates>

</div>
  );
};

export default Page;