import Link from "next/link"

const FooterItem = ({ href, label }: any) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <div className="p-1 cursor-pointer hover:underline">
        {label}
      </div>

    </a>
  )
}

export default FooterItem