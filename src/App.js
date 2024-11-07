import React from 'react';
import Testamonials from './components/Testamonials';
import Accordion from './components/Accordion';
import Carousel from './components/Carousel';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header 
        backgroundPic={"personalTrainer.jpg"}
        fontFamily={"'Great Vibes', cursive"}
      />
      <main className='flex-grow p-4 max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row gap-8'>
          <Testamonials content={<h3>Andrew Hage Personal Training</h3>}>
            <img
              src='/images/personalTrainer.jpg'
              alt='Personal Trainer'
              className='w-120 h-auto shadow-2xl roundedp-lg mt-8'
            />
          </Testamonials>
          <section className='md:w-1/3'>
            <h2 className='text-2xl font-semibold mb-4'>FAQ</h2>
            {accordionData.map((item, index) => (
              <Accordion 
              key={index}
              title={item.title}
              content={item.content}
              />
            ))}
          </section>
          <section className='md:w-2/3'>
            <h2 className='text-2xl font-semibold mb-4'>Albums</h2>
            <Carousel items={carouselData} />
          </section>
        </div>
        <link href='https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap' rel='stylesheet' />
      </main>
      <Footer
        footerText="© 2024 Andrew Hage Personal Training. All rights reserved"
        link1Text="Twitter"
        link1Url="https://twitter.com/andrewhage"
        link2Text="Instagram"
        link2Url="https://www.instagram.com/andrewhage/"
      />

    </div>
  );
}

export default App;

const accordionData = [
  {
    title: "About Andrew",
    content: "Andrew is an experienced personal trainer with over a decade in the fitness industry, known for his expertise in strength training, functional movement, and weight management.",
  },
  {
    title: "Career",
    content: "He began his career working in top fitness centers, where he quickly gained a reputation for his personalized approach and ability to help clients of all fitness levels achieve their goals.",
  },
  {
    title: "Awards",
    content: "Personal Trainer of the Year - Awarded by the National Association of Fitness Professionals (2023) Most Inspiring Coach Award – Voted by clients at Premier Fitness Studio for his motivation and dedication to client success (2019)" ,
  },
];

const carouselData = [
  {
    image: "./images/treadmills.jpeg",
    title: "Treadmills",
    description: "2006",
  },
  {
    image: "./images/bicepCurl.jpeg",
    title: "Bicep Curls",
    description: "2008",
  },
  {
    image: "./images/femaleLifting.jpg",
    title: "Female Lifting",
    description: "2010",
  },
  {
    image: "./images/freeWeights.jpeg",
    title: "Free Weights",
    description: "2012",
  },
  {
    image: "./images/homeGym.jpg",
    title: "Home Gym",
    description: "2014",
  },
  {
    image: "./images/kettleBall.jpeg",
    title: "Kettle Bell",
    description: "2010",
  },
  {
    image: "./images/weights.jpeg",
    title: "Weights",
    description: "2010",
  },
];

