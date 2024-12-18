'use client'

import { useState, useEffect } from 'react'
import styles from './Portfolio.module.css'

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const imageLinks = [
    { src: '/imgs/web1.png', link: 'https://2024-2-jbu-web-demo.vercel.app/' },
    { src: '/imgs/web2.png', link: 'https://jhblog2024.netlify.app/blog' },
    { src: '/imgs/web3.png', link: 'https://jhjsblog2024.netlify.app/' },
    {
      src: '/imgs/web4.png',
      link: 'https://jhjsblog2024.netlify.app/javascript_web/web_book/',
    },
    {
      src: '/imgs/web5.png',
      link: 'https://jhjsblog2024.netlify.app/javascript_web/web_gallery/',
    },
    {
      src: '/imgs/web6.png',
      link: 'https://jhjsblog2024.netlify.app/javascript_web/web_menu/',
    },
    {
      src: '/imgs/web7.png',
      link: 'https://jhjsblog2024.netlify.app/javascript_web/web_pingpong/',
    },
    { src: '/imgs/web8.png', link: 'https://js-web-team-jh.vercel.app/' },
    { src: '/imgs/web9.png', link: 'https://jbus4jh.netlify.app/' },
    {
      src: '/imgs/web10.png',
      link: 'https://2024-2-clerk-api-test2.vercel.app/',
    },
    { src: '/imgs/web11.png', link: 'https://2024-2-mongo-crud.vercel.app/' },
    {
      src: '/imgs/web12.png',
      link: 'https://2024-2-daiso-shopping.vercel.app/',
    },
    { src: '/imgs/web13.png', link: 'https://2024-2-team-library.vercel.app/' },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === imageLinks.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? imageLinks.length - 1 : prev - 1))
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
        {imageLinks.map((item, index) => (
          <a
            key={index}
            href={imageLinks[index].link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              display: currentIndex === index ? 'flex' : 'none',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 0,
              padding: 0,
            }}
          >
            <img
              src={item.src}
              alt={`Slide ${index + 1}`}
              className={`${currentIndex === index ? styles.active : ''}`}
              style={{
                objectFit: 'contain',
                margin: 0,
                padding: 0,
                width: '100%',
                height: '100%',
              }}
            />
          </a>
        ))}
      </div>
      <button className={styles.nextButton} onClick={nextSlide}>
        &#10095;
      </button>

      <div className={styles.indicators}>
        {imageLinks.map((_, index) => (
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
