import React from 'react';
import { cocktailLists, mockTailLists } from '../constants/index.js';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';4
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Cocktails() {

   useGSAP(() => {
  const parallaxTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#cocktails",
      start: "top 60%",
      end: "bottom top",
      scrub: true,
    },
  });

  parallaxTimeline
    .from("#c-left-leaf", {
      x: -150,
      y: 150,
      rotate: -15,
      opacity: 0,
      scale: 0.8,
      ease: "power2.out",
    })
    .from(
      "#c-right-leaf",
      {
        x: 150,
        y: 150,
        rotate: 15,
        opacity: 0,
        scale: 0.8,
        ease: "power2.out",
      },
      "<" // start at same time as previous
    );
});


  return (
    <section id='cocktails' className='noisy'>

      <img src="/images/cocktail-left-leaf.png" id='c-left-leaf' alt="l-leaf" />
      <img src="/images/cocktail-right-leaf.png" id='c-right-leaf' alt="r-leaf" />

      <div className='list'>

        <div className='popular'>
          <h2>Most Popular Cocktails</h2>

          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className='md:me-28'>
                  <h3>{name}</h3>
                  <p>{country} | {detail}</p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>

        </div>
        
        <div className='loved'>
          <h2>Most Loved Mocktails</h2>

          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className='me-28'>
                  <h3>{name}</h3>
                  <p>{country} | {detail}</p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>

        </div>



      </div>

       
    </section>
  );
}

export default Cocktails;
