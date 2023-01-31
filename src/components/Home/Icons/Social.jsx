
import { GitHub, Twitter, Mail } from "react-feather";

const SocialIcons = () => (
    <span className="flex gap-x-5">
      <a
        href="mailto:gnelson684@gmail.com"
        className="group cursor-pointer"
        aria-label="Email"
        title="Email"
      >
        <Mail color="#fdfdfd" size={22}  strokeWidth={1.25}/>
      </a>
      <a
        href="https://github.com/ElonMuskRat420xx"
        target="_blank"
        rel="noreferrer"
        className="group cursor-pointer"
        aria-label="Github"
        title="Github"
      >
        <GitHub color="#fdfdfd" size={22} strokeWidth={1.25}/>
      </a>
      <a
        href="nitter.glkn.xyz"
        target="_blank"
        rel="noreferrer"
        className="group cursor-pointer text-fore-subtle"
        aria-label="Twitter"
        title="Twitter"
      >
        <Twitter color="#fdfdfd" size={22}  strokeWidth={1.25} />
      </a>
    </span>
  )
  export default SocialIcons
  


