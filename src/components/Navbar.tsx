import Link from 'next/link'
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-sky-300 px-8 py-4">
      <Link
        className="text-sky-100 text-4xl font-extrabold hover:text-sky-400"
        href="/"
      >
        E_plus
      </Link>
      <Link
        className="bg-sky-400 text-lg font-bold px-4 py-2 rounded-md hover:bg-sky-600"
        href="/addTopic"
      >
        New Post
      </Link>
    </nav>
  )
}
