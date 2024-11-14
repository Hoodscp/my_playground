'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

interface EditTopicFormProps {
  id: string
  title: string
  description: string
}

export default function EditTopicForm({
  id,
  title,
  description,
}: EditTopicFormProps) {
  const [newTitle, setNewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(description)
  const router = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await fetch(`/api/topics/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ newTitle, newDescription }),
      })
      if (!res.ok) {
        throw new Error('토픽 업데이트에 실패했습니다.')
      }
      router.push('/')
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <h1 className="text-2xl">토픽 수정</h1>
      <input
        type="text"
        className="border border-sky-800 p-4"
        placeholder="토픽 제목"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTitle(e.target.value)
        }
        value={newTitle}
      />
      <textarea
        className="border border-sky-800 p-4 h-32"
        placeholder="토픽 설명"
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setNewDescription(e.target.value)
        }
        value={newDescription}
      />
      <button
        className="bg-sky-700 text-sky-400 font-bold px-6 py-3 w-fit rounded-md hover:bg-sky-900"
        type="submit"
      >
        토픽 수정
      </button>
    </form>
  )
}
