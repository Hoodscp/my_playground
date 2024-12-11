'use client'
import Link from 'next/link'
import LoginForm from '@/components/LoginForm'
import { useState } from 'react'

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center px-8 py-1 border-b-8 border-double border-b-black dark:border-b-white">
      <div
        className="relative"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <Link
          href="/"
          className="text-4xl font-extrabold hover:opacity-75 w-full text-left block"
        >
          웹페이지 이름 추천좀
        </Link>
        <div
          className={`absolute top-full left-0 w-48 bg-white dark:bg-black shadow-lg rounded-md 
          transition-all duration-300 ease-in-out transform origin-top z-50
          ${
            isDropdownOpen
              ? 'opacity-100 scale-y-100 pointer-events-auto'
              : 'opacity-0 scale-y-0 pointer-events-none'
          }`}
        >
          <ul className="py-2">
            <li>
              <Link
                href="/LibraryPage"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-black dark:hover:text-white/75 whitespace-nowrap"
              >
                자유 게시판
              </Link>
            </li>
            <li>
              <Link
                href="/RecommendPage"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-black dark:hover:text-white/75 whitespace-nowrap"
              >
                공부 게시판
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-black dark:hover:text-white/75 whitespace-nowrap"
              >
                내 소개
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-black dark:hover:text-white/75 whitespace-nowrap"
              >
                웹 포트폴리오
              </Link>
            </li>
            <li>
              <Link
                href="/repos"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-black dark:hover:text-white/75 whitespace-nowrap"
              >
                깃허브
              </Link>
            </li>
            <li>
              <Link
                href="/pdfviewer"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-black dark:hover:text-white/75 whitespace-nowrap"
              >
                발표 자료실
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex">
        <LoginForm />
      </div>
    </nav>
  )
}
