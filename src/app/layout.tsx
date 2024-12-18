import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/Navbar'
import { NextAuthProvider } from '@/components/Providers'
import { auth } from '@/auth'
import Image from 'next/image'

const geistSans = localFont({
  src: './fonts/DungGeunMo.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/DungGeunMo.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: '웹이추',
  description: 'Create, Read, Update, and Delete in MongoDB',
  icons: {
    icon: '/favicon.ico',
    // 선택적으로 다양한 크기의 아이콘 추가 가능
    shortcut: '/favicon-16x16.png',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-geist-mono)] `}
      >
        <NextAuthProvider session={session}>
          <Navbar />
          <div className="flex justify-between items-start gap-4">
            {/* 왼쪽 광고 배너 */}
            <div className="my-4 hidden lg:block w-[160px] h-[600px] sticky top-4">
              <a
                href="https://2024-2-team-library.vercel.app/"
                className="block rounded-lg shadow-sm border border-gray-200 w-full h-full hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="h-full flex flex-col items-center justify-center p-4 text-center">
                  <Image
                    src="/kirby.png"
                    alt="Kirby"
                    width={100}
                    height={100}
                    className="mb-4"
                  />
                  <p className="text-lg font-bold text-blue-600 mb-2">
                    🎉 팀 페이지 구경하기
                  </p>
                  <p className="text-sm text-gray-600">
                    우리 팀원들의 이야기가 궁금하다면?
                  </p>
                  <p className="text-sm font-bold text-blue-500 mt-4 animate-bounce">
                    👆 클릭!
                  </p>
                  <Image
                    src="/kirby.png"
                    alt="Kirby"
                    width={100}
                    height={100}
                    className="mt-4"
                  />
                </div>
              </a>
            </div>

            {/* 메인 콘텐츠 */}
            <div className="flex-1 max-w-4xl mx-auto px-2 sm:px-0 lg:px-0 py-10">
              <div className="space-y-8">
                <main>
                  <div className=" rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-4">{children}</div>
                  </div>
                </main>
                <footer className="text-center text-sm text-gray-500 py-4">
                  © 2024 웹이추. JBU Web Security Project.
                </footer>
              </div>
            </div>

            {/* 오른쪽 광고 배너 */}
            <div className="my-4 hidden lg:block w-[160px] h-[600px] sticky top-4">
              <a
                href="https://2024-2-team-library.vercel.app/"
                className="block rounded-lg shadow-sm border border-gray-200 w-full h-full hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="h-full flex flex-col items-center justify-center p-4 text-center">
                  <Image
                    src="/kirby.png"
                    alt="Kirby"
                    width={100}
                    height={100}
                    className="mb-4"
                  />
                  <p className="text-lg font-bold text-blue-600 mb-2">
                    💫 팀원 소개
                  </p>
                  <p className="text-sm text-gray-600">웹이추를 만든 사람들</p>
                  <p className="text-sm font-bold text-blue-500 mt-4 animate-bounce">
                    👆 여기를 클릭!
                  </p>
                  <Image
                    src="/kirby.png"
                    alt="Kirby"
                    width={100}
                    height={100}
                    className="mt-4"
                  />
                </div>
              </a>
            </div>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  )
}
