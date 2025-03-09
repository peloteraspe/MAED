'use client';

import { useState } from 'react';
import DropdownProfile from './DropdownProfile';

export default function Navbar({ user }: { user: any }) {
  console.log(user, 'user');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <header className="absolute right-4 top-4">
      <DropdownProfile align="right" userName={user?.email} />
    </header>
  );
}
