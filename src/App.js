import React from 'react';
import Testamonials from './components/Testamonials';
import Accordion from './components/Accordion';
import Carousel from './components/Carousel';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Header className='header'
        backgroundPic={"personalTrainer.jpg"}
        fontFamily={"'Times New Roman', Times, serif"}
      />
      <main className='flex-grow p-4 max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row gap-8'>
          <section className='md:w-1/3'>
            <h2 className='text-2xl font-semibold mb-4'>FAQ</h2>
            {accordionData.map((item, index) => (
              <Accordion className='accordion'
              key={index}
              title={item.title}
              content={item.content}
              />
            ))}
          </section>
          <section className='md:w-2/3'>
            <h2 className='text-2xl font-semibold mb-4'>Training</h2>
            <Carousel className="carousel" items={carouselData} />
          </section>
        </div>

        <div>
            <Testamonials className='testimonials'
                title="What people are saying"
                testimonialText="Working with Andrew has been a game-changer for my fitness journey! ..."
                authorName="Andrew Hage"
                authorTitle="Founder of Andrew's Training Inc."
                authorImage="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
            />
            
            <Testamonials className='testimonials'
                title="Client Review"
                testimonialText="This experience transformed the way I approach fitness, and I feel healthier and stronger every day!"
                authorName="Jennifer Clinton"
                authorTitle="Fitness Enthusiast"
                authorImage="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
            />
        </div>

        <link href='https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap' rel='stylesheet' />
      </main>
      <Footer className='footer'
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
  },
  {
    image: "./images/bicepCurl.jpeg",
    title: "Bicep Curls",
  },
  {
    image: "./images/femaleLifting.jpg",
    title: "Female Lifting",
  },
  {
    image: "./images/freeWeights.jpeg",
    title: "Free Weights",
  },
  {
    image: "./images/homeGym.jpg",
    title: "Home Gym",
  },
  {
    image: "./images/kettleBall.jpeg",
    title: "Kettle Bell",
  },
  {
    image: "./images/weights.jpeg",
    title: "Weights",
  },
];

