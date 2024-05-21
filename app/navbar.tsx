'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaRegHospital } from 'react-icons/fa';
import classNames from 'classnames';

const NavBar = () => {
  const currPath = usePathname();

  const links = [
    { label: 'Rooms', href: '/rooms' },
    { label: 'Other', href: '/rooms' }
  ];

  return (
    <nav className="flex space-x-6 borber-b mb-5 px-5 h-14 items-center">
      <Link href={'/'}>
        <FaRegHospital />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classNames({
              'text-zinc-900': link.href === currPath,
              'text-zinc-500': link.href !== currPath,
              'hover:text-zinc-800 transition-colors': true
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
