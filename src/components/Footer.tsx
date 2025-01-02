import Link from "next/link";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { SiCodechef, SiLeetcode } from "react-icons/si";

const items = [
  {
    href: "https://github.com/shashankaz/",
    icon: <FaGithub />,
  },
  {
    href: "https://twitter.com/shashankaz/",
    icon: <FaXTwitter />,
  },
  {
    href: "https://in.linkedin.com/in/shashankaz/",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://www.instagram.com/shashankaz",
    icon: <FaInstagram />,
  },
  {
    href: "https://leetcode.com/",
    icon: <SiLeetcode />,
  },
  {
    href: "https://www.codechef.com/",
    icon: <SiCodechef />,
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 w-full border-t flex flex-col items-center gap-4">
      <Link href="/" className="focus:outline-none">
        <h3 className="text-2xl font-semibold">Shashank</h3>
      </Link>
      <div className="flex items-center gap-4">
        {items.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            target="_blank"
            prefetch={false}
            className="focus:outline-none text-xl hover:text-blue-500 transition-colors"
          >
            {item.icon}
          </Link>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">
        &copy; {year} Shashank. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
