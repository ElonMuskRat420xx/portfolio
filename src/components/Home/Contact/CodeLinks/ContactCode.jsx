import styles from './ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'glkn.xyz',
    href: 'https://glkn.xyz',
  },
  {
    social: 'email',
    link: 'gregornelson@glkn.xyz',
    href: 'mailto:gnelson684@gmail.com',
  },
  {
    social: 'github',
    link: 'ElonMuskRat420xx',
    href: 'https://github.com/ElonMuskRat420xx',
  },
  {
    social: 'twitter',
    link: 'nitter.glkn.xyz',
    href: 'https://nitter.glkn.xyz',
  },
  {
    social: 'reddit',
    link: 'libreddit.glkn.xyz',
    href: 'https://libreddit.glkn.xyz',
  },
  {
    social: 'searxng',
    link: 'search.glkn.xyz',
    href: 'https://search.glkn.xyz',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;