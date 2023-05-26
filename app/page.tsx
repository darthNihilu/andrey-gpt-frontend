'use client'
import {getTelegramWindowObject} from "@/src/utils/getTelegramWindowObject";

export default function Home() {
  console.log('here', getTelegramWindowObject()?.platform)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{getTelegramWindowObject()?.platform}</p>
    </main>
  )
}
