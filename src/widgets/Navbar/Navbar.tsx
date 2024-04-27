import Image from "next/image";
import Link from "next/link";
import Button from "@/shared/ui/Button/Button";

const Navbar = () => (
  <nav className="py-6 px-8 flex items-center justify-between w-full bg-black bg-opacity-30">
    <div className="flex items-center gap-12 w-full">
      <Link href="/">
        <Image
          className="relative"
          src="/allumi-logo.svg"
          alt="Next.js Logo"
          width={180}
          height={47}
          priority
        />
      </Link>
      <Link href="/community" className="hover:text-primary">
        <p>Community</p>
      </Link>
      <Link href="/mentors">
        <p className="hover:text-primary">Mentors</p>
      </Link>
    </div>
    <div className="flex gap-4">
      <Link href="/login">
        <Button
          className="bg-primary text-black rounded-lg"
        >
          Войти
        </Button>
      </Link>
      <Link href="/register">
        <Button
          variant="outlined"
        >
          Регистрация
        </Button>
      </Link>
    </div>
      </nav>
);

Navbar.displayName = 'Navbar';

export default Navbar;
