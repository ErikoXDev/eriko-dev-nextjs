import Link from "next/link"

const NavBarItem = ({ href, label }: any) => {
  return (
    <Link
      href={href}
    >
      <div className="p-1 cursor-pointer hover:text-gradient">
        {label}
      </div>

    </Link>
  )
}

export default NavBarItem