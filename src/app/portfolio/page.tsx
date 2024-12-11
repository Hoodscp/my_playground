'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Portfolio.module.css'

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = Array.from({ length: 8 }, (_, i) => `/imgs/web${i + 1}.png`)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles.slideshow}>
      <button className={styles.prevButton} onClick={prevSlide}>
        &#10094;
      </button>
      <div className={styles.slideContainer}>
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Slide ${index + 1}`}
            width={1200}
            height={100}
            priority={index === 0}
            className={`${currentIndex === index ? styles.active : ''}`}
            style={{ objectFit: 'contain' }}
          />
        ))}
      </div>
      <button className={styles.nextButton} onClick={nextSlide}>
        &#10095;
      </button>

      <div className={styles.indicators}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              currentIndex === index ? styles.activeIndicator : ''
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
