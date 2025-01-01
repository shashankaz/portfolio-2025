import Link from "next/link";
import { Blend } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between gap-8 py-4">
      <Link href="/" className="focus:outline-none">
        <span className="font-bold">
          <Blend />
        </span>
      </Link>
      <div className="flex gap-6">
        <Link
          href="/github"
          className="font-medium hover:text-blue-500 focus:outline-none"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="font-medium hover:text-blue-500 focus:outline-none"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
