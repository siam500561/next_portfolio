import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex items-center justify-center py-6">
      <div className="m-8 flex items-center justify-center gap-6 text-2xl">
        <Link href="/">
          <FaGithub />
        </Link>
        <Link href="/">
          <FaLinkedin />
        </Link>
        <Link href="/">
          <FaTwitter />
        </Link>
        <Link href="/">
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
}
