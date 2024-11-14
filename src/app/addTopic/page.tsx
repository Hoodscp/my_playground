'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
export default function AddTopic() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!title || !description) {
      alert('타이틀과 설명 모두 작성을 해야합니다.')
    }
    try {
      const res = await fetch('api/topics', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      })
      if (res.ok) {
        router.push('/')
        router.refresh()
      } else {
        throw new Error('Failed to create a Topic')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <h1 className="text-2xl ml-2">토픽 추가</h1>
      <input
        type="text"
        className="border border-sky-500 p-4"
        placeholder="토픽 제목"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
        value={title}
      />
      <textarea
        className="border border-sky-500 p-4 h-32"
        placeholder="토픽 설명"
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setDescription(e.target.value)
        }
        value={description}
      />
      <button
        className="bg-sky-300 text-sky-100 font-bold px-6 py-3 w-fit rounded-md hover:bg-sky-500"
        type="submit"
      >
        토픽 추가
      </button>
    </form>
  )
}
