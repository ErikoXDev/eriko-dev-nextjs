import type { NextPage } from 'next'

import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import ProjectList from '../components/Projects/ProjectList'




import eriko from "../public/eriko_4k.png"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="Vaq0y3DpIRAeO5NTVUiUEIh6GomDGhYCNT9Pw1GEkhg" />
      </Head>
      <div className="flex flex-col md:flex-row items-center justify-between sm:gap-4 md:gap-12 ">
        <div className="text-center md:text-left mb-4 md:mb-0 ">
          <h1 className="text-2xl md:text-5xl xl:text-6xl font-black">Hi, I&apos;m <span className="text-gradient">ErikoXDev.</span>
          </h1>
          <div className="flex justify-center md:block">
            <p className="md:text-xl sm:w-3/4 mt-2">I&apos;ve been programming various projects for more than 4 years.</p>
          </div>
        </div>

        <div className="mr-2 md:mr-8">

          <Image
            src={eriko}
            width={128}
            height={128}
            alt=""
            className="h-32 w-32 bg-slate-50 dark:bg-zinc-800 rounded-full"
          />


        </div>


      </div>
      <div className="mt-8">
        <p className="text-xl md:text-2xl font-bold">Featured Projects</p>
        <div className="flex gap-1 text-zinc-500 dark:text-zinc-400 text-sm">You can find more projects on the
          <Link className="" href="/projects">
            <div className="underline cursor-pointer">projects page</div>
          </Link>
        </div>
        <ProjectList listFilter="featured" moreControls={false} />
      </div >


    </>
  )
}

export default Home