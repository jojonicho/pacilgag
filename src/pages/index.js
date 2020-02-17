import tw from "tailwind.macro"
import React, { useEffect, useState } from "react";
import SEO from "../components/seo"
import Navbar from '../components/Navbar'
// import useFetch from '../components/useFetch'
// import Img from "gatsby-image";
// import { BarLoader } from 'react-spinners';
// import Modal from 'react-modal';
import Memes from "../components/Memes"

// const Wrapper = tw.div`
//   flex items-center justify-center flex-row font-sans bg-gray-900 p-6 flex-wrap
// `

// const Main = tw.div`
//   p-6 bg-gray-100 rounded-lg shadow-2xl ml-2 mr-2 mb-4 w-1/4
// `

// const Heading = tw.h1`
//   text-2xl text-gray-500 uppercase
// `

// const Text = tw.p`
//   text-xl text-gray-700
// `

// const Logos = tw.div`
//   flex items-center justify-around mb-6 px-16
// `

// const Icon = tw.img`
// w-full
// `

// const Footer = tw.footer`
//   mt-6 text-center
// `

// const SmallIcon = tw.img`
//   inline-block h-6
// `

const Index = () => {
  return (
    <>
      <Navbar />
        <SEO title="Pacilgag Jonathan Nicholas COMPFEST" />
        <Memes />
    </>
  )
}

export default Index;