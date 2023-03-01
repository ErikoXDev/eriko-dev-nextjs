import type { NextPage } from 'next'

import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="mt-16 flex items-center flex-col">
      <h1 className="text-2xl font-bold">404 Page not found</h1>
      <Link href="/" className="text-lg mt-6"><div className="cursor-pointer hover:underline">Return home</div></Link>



    </div>
  )
}

export default Home