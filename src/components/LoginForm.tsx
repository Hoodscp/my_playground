'use client'
import Image from 'next/image'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

export default function LoginForm() {
  const { status, data: session } = useSession()
  return (
    <nav className="flex justify-between items-center  px-8 py-4">
      <div className="flex">
        <div className="flex">
          {status === 'authenticated' ? (
            <>
              <div className="flex gap-2 items-center mr-2">
                <Image
                  className="rounded-full"
                  src={session?.user?.image ?? '/default-avatar.png'}
                  width={40}
                  height={40}
                  alt={session?.user?.name ?? 'user'}
                />
                <a href="/dashboard" className=" font-bold hover:">
                  {session?.user?.name}
                </a>
              </div>
              <button
                className="bg-black text-white dark:bg-white dark:text-black text-lg font-bold px-4 py-2 rounded-md hover:bg-black/75 dark:hover:bg-white/75 "
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link
              className="bg-black text-white dark:bg-white dark:text-blacktext-lg font-bold px-4 py-2 rounded-md hover:bg-black/75 dark:hover:bg-white/75 "
              href="/login"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
