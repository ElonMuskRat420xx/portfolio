
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
  


