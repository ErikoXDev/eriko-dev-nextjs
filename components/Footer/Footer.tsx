import FooterItem from "./FooterItem"


const Footer = () => {
  return (
    <div className="absolute left-0 w-full">
      <div className="w-full bg-white dark:bg-zinc-900 bg-[url('/layer1.svg')] aspect-[960/180] bg-no-repeat bg-center bg-cover">
      </div>
      <div className="bg-[#970285] h-20">
        <div className="flex justify-center items-center h-full text-white gap-4 text-lg">
          <FooterItem href="https://github.com/ErikoXDev" label="GitHub" />
          <FooterItem href="https://replit.com/@ErikoXDev" label="Replit" />
          <FooterItem href="https://erikoxdev.itch.io/" label="Itch.io" />
        </div>
      </div>
    </div>
  )
}

export default Footer