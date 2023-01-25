
import { AiFillGithub, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";


const SocialIcons = () => (
    <span className="flex gap-x-5">
      <a
        href="mailto:gnelson684@gmail.com"
        className="group cursor-pointer"
        aria-label="Email"
        title="Email"
      >
        <AiOutlineMail />
      </a>
      <a
        href="https://github.com/ElonMuskRat420xx"
        target="_blank"
        rel="noreferrer"
        className="group cursor-pointer"
        aria-label="Github"
        title="Github"
      >
        <AiFillGithub />
      </a>
      <a
        href="nitter.glkn.xyz"
        target="_blank"
        rel="noreferrer"
        className="group cursor-pointer text-fore-subtle"
        aria-label="Twitter"
        title="Twitter"
      >
        <AiOutlineTwitter />
      </a>
    </span>
  )
  export default SocialIcons
  

  //SVG Icons


  export const PaperIcon = () => {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M124 80v322c0 7.7-6.3 14-14 14s-14-6.3-14-14V112H80c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h353.1c17 0 30.9-13.8 30.9-30.9V80c0-17.7-14.3-32-32-32l-278 2c-17.7 0-30 12.3-30 30zm66 32h84c7.7 0 14 6.3 14 14s-6.3 14-14 14h-84c-7.7 0-14-6.3-14-14s6.3-14 14-14zm0 160h148c7.7 0 14 6.3 14 14s-6.3 14-14 14H190c-7.7 0-14-6.3-14-14s6.3-14 14-14zm196 108H190c-7.7 0-14-6.3-14-14s6.3-14 14-14h196c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-160H190c-7.7 0-14-6.3-14-14s6.3-14 14-14h196c7.7 0 14 6.3 14 14s-6.3 14-14 14z"></path>
      </svg>
    )
  }