import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
// import article1 from '../../public/images/articles/pagination component in reactjs.jpg';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);

const FeaturedArticles = ({img, title, time, summary, link}) => {
    return (
        <li className='relative col-span-1 w-full p-4 bg-light border-2 border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
        
        <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt="title" className="w-full h-auto"
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        priority
       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
       />
      </Link>
      <Link href={link} target='_blank'>
        <h2 className='capitalize text-2xl font-bold my-2 hover:underline xs:text-lg'>{title}</h2>
      </Link>
      <p className='text-sm mb-2'>{summary}</p>
      <span className='text-primary dark:text-primaryDark  font-semibold'>{time}</span>
        </li>
    );
}

const articles = () => {
  return (
    <>
       <Head>
        <title>Articles Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect/>
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text="Words Can Change The World!" classNmae='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
            <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                <FeaturedArticles
                title="Build A Custom Pagination Component In Reactjs From Scratch"
                summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                 Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                time="9 min read"  
                link="/"  
                // img={article1}           
                />
                <FeaturedArticles
                title="Build A Custom Pagination Component In Reactjs From Scratch"
                summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                 Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                time="9 min read"  
                link="/"  
                // img={article1}           
                />
            </ul>
        </Layout>
      </main>
    </>
  )
}

export default articles