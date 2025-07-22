import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { featureLists, goodLists } from '../constants/index.js';

gsap.registerPlugin(ScrollTrigger);

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const start = isMobile ? 'top 20%' : 'top top';

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#art',
        start,
        end: 'bottom center',
        scrub: 1.5,
        pin: !isMobile, // ✅ Disable pinning on mobile
      },
    });

    maskTimeline
      .to('.will-fade', { opacity: 0, stagger: 0.2, ease: 'power1.inOut' })
      .to('.masked-img', {
        scale: 1.3,
        maskPosition: 'center',
        maskSize: '400%',
        duration: 1,
        ease: 'power1.inOut',
      })
      .to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut' });
  }, [isMobile]);

  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade text-center">The ART</h2>

        <div className="content flex flex-col md:flex-row items-center justify-between gap-8 mt-10">
          {/* Left List */}
          <ul className="space-y-4 will-fade w-full md:w-1/3">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p className="w-full">{feature}</p>
              </li>
            ))}
          </ul>

          {/* Image */}
          <div className="cocktail-img w-full md:w-1/3">
            <img
              src="/images/under-img.jpg"
              alt="cocktail"
              className="abs-center masked-img size-full object-contain"
            />
          </div>

          {/* Right List */}
          <ul className="space-y-4 will-fade w-full md:w-1/3">
            {featureLists.map((feature, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="check" />
                <p className="w-full md:w-fit">{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Masked Text Content */}
        <div className="masked-container mt-16 text-center">
          <h2 className="will-fade">Sip-Worthy Perfection</h2>
          <div id="masked-content" className="opacity-0">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
