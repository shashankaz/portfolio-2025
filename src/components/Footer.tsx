import Image from "next/image";
import Link from "next/link";

const items = [
  {
    href: "https://github.com/shashankaz/",
    icon: "/GithubIcon.svg",
  },
  {
    href: "https://twitter.com/shashankaz/",
    icon: "/TwitterIcon.svg",
  },
  {
    href: "https://in.linkedin.com/in/shashankaz/",
    icon: "/LinkedinIcon.svg",
  },
  {
    href: "https://www.instagram.com/shashankaz",
    icon: "/InstagramIcon.svg",
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
            className="focus:outline-none"
          >
            <Image
              src={item.icon}
              alt="logo"
              height="100"
              width="100"
              className="h-6 w-6"
            />
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
