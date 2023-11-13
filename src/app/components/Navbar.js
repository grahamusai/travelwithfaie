// components/Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
         <nav className="bg-light p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-black text-lg font-bold">logo</span>
        </Link>

        <div className="space-x-3 ">
          <Link href="/">
            <span className="text-black">Home</span>
          </Link>
          <Link href="/about">
            <span className="text-black">About</span>
          </Link>
          <Link href="/contact">
            <span className="text-black">Service</span>
          </Link>
          <Link href="/contact">
            <span className="text-black">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
    </div>
  ) ;
};

export default Navbar;
