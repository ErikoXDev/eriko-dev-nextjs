import Image from "next/image"
import Link from "next/link"
import NavBarItem from "./NavBarItem"

import eriko from "../../public/eriko_4k.png"
import ThemeButton from "./ThemeButton"


const NavBar = () => {
  return (
    <div className="flex justify-between items-center h-12 border-b border-b-gray-200 dark:border-b-zinc-700 text-zinc-900 dark:text-white dark:bg-zinc-900 bg-white w-full gap-1 p-2">
      <div className="flex gap-1">
        <NavBarItem href="/" label="Home" />
        <NavBarItem href="/projects" label="Projects" />
      </div>
      <div className="flex gap-2">
        <ThemeButton />
        <a href="https://eriko.dev">
          <div>

            eriko.dev

          </div>
        </a>
      </div>
    </div>
  )
}

export default NavBar