import TopicsList from '@/components/Topiclist'

export default function Home() {
  return (
    <div>
      <h1 className="ml-2 text-3xl font-bold">My PlayGround</h1>
      <p className="mb-4 ml-2">This is my PlayGround</p>
      <TopicsList />
    </div>
  )
}
