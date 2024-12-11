import { getAllData } from '@/actions/dataActions'
import { getAllTopics } from '@/actions/topicActions'
import DatasSimple from '@/components/DataSimple'
import TopicsSimple from '@/components/TopicSimple'
import Link from 'next/link'
import { FaCodeBranch, FaEye, FaStar } from 'react-icons/fa'
const username = 'Hoodscp'

export default async function Home() {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
    { next: { revalidate: 60 } }
  )
  const repos = await response.json()
  const { topics } = await getAllTopics()
  const { datas } = await getAllData()
  return (
    <div>
      <div>
        <div>
          <h1 className="text-3xl font-bold mb-4 ">웹이추 게시판</h1>
          <p className="mb-6 ">
            이 웹사이트는 둥근모 폰트를 사용하여 작성되었습니다!
          </p>
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <a
                href="/LibraryPage"
                className="text-xl font-semibold p-1  hover:text-black/75 dark:hover:text-white/75"
              >
                자유 게시판
              </a>
              <Link
                className="text-lg p-1 font-bold rounded-md bg-black text-white dark:bg-white dark:text-black hover:bg-black/75 dark:hover:bg-white/75"
                href="/addTopic"
              >
                글쓰기
              </Link>
            </div>
            <TopicsSimple topics={topics} />
          </div>
          <div className="mt-8">
            <div className="flex justify-between mb-2">
              <a
                href="/RecommendPage"
                className="text-xl font-semibold p-1  hover:text-black/75 dark:hover:text-white/75"
              >
                공부 게시판
              </a>
              <Link
                className="text-lg p-1 font-bold rounded-md bg-black text-white hover:bg-black/75 dark:bg-white dark:text-black dark:hover:bg-white/75"
                href="/addData"
              >
                글쓰기
              </Link>
            </div>
            <DatasSimple datas={datas} />
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">
              추천 GitHub 레포지토리
            </h2>
            <div className="p-4 border border-black grid gap-4">
              {repos.slice(0, 3).map((repo: any) => (
                <Link key={repo.name} href={`/repos/${repo.name}`}>
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold">{repo.name}</h3>
                    <span className="flex items-center gap-2">
                      <FaStar /> {repo.stargazers_count}
                      <span className="flex items-center gap-2">
                        <FaCodeBranch /> {repo.forks_count}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaEye /> {repo.watchers_count}
                      </span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
