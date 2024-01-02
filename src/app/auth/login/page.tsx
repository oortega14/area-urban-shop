import { titleFont } from '@/config/fonts'
import Image from 'next/image'

export default function Home() {
  return (
    <main >
      hola mundo
      <h1 className={`${titleFont.className} text-xl`}>login page</h1>
    </main>
  )
}
