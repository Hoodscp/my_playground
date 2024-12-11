import Link from 'next/link'
import { FaFolder } from 'react-icons/fa'
interface RepoProps {
  name: string
}
const RepoDirs: React.FC<RepoProps> = async ({ name }) => {
  const username = 'Hoodscp'
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await fetch(
    `https://api.github.com/repos/${username}/${name}/contents`
  )
  const contents = await response.json()
  const dirs = contents.filter((content: any) => content.type === 'dir') // console.log(dirs)
  return (
    <div className="mt-2 ">
      <h3 className="text-xl font-bold">Directories</h3>
      <ul>
        {dirs.map((dir: any) => (
          <li key={dir.path} className="flex">
            <FaFolder className="mt-1" />
            <Link
              className="underline ml-2"
              href={`https://github.com/${username}/${name}/tree/master/${dir.path}`}
            >
              {dir.path}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default RepoDirs
