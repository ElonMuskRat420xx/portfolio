import { FaGithub, FaTwitter, FaFacebookMessenger } from "react-icons/fa";

const SocialIcons = () => (
  <span className="flex gap-x-5">
    <a
      href="mailto:gnelson684@gmail.com"
      className="group cursor-pointer"
      aria-label="Email"
      title="Email"
    >
      <FaFacebookMessenger color="#fdfdfd" size={14}/>
    </a>
    <a
      href="https://github.com/ElonMuskRat420xx"
      target="_blank"
      rel="noreferrer"
      className="group cursor-pointer"
      aria-label="Github"
      title="Github"
    >
      <FaGithub color="#fdfdfd" size={14}/>
    </a>
    <a
      href="https://nitter.glkn.xyz"
      target="_blank"
      rel="noreferrer"
      className="group cursor-pointer text-fore-subtle"
      aria-label="Twitter"
      title="Twitter"
    >
      <FaTwitter color="#fdfdfd" size={14}/>
    </a>
    <a
      href="https://nitter.glkn.xyz"
      target="_blank"
      rel="noreferrer"
      className="group cursor-pointer text-fore-subtle"
      aria-label="Twitter"
      title="Twitter"
    ></a>
  </span>
);
export default SocialIcons;
