"use client";
import image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
  const handleScroll = () => {

  }
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          Find, book or rent a car - quickly and easily!
        </h1>
        <p className='hero__subtitle'>
          Streamline your car rental exoerience with our effortless booking process.
        </p>

        <CustomButton 
        title="Explore Cars"
        containerstyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className="hero__image">
          <image src="/hero.png" alt="hero" fill className="object-contain" />
          <div className='hero__image-overlay' />
        </div>
      </div>

    </div>
  )
}

export default Hero
