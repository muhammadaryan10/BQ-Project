import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer'
import { Statistic } from './Statistics';
import Feature2 from './Feature2';
import Slider from './Slider';
import {Header} from './Hero';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Slider/>
      <Feature2/>
      <Statistic/>
      <Footer />
    </div>
  )
}
