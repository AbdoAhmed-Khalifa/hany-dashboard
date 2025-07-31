'use client';
import { sidebarItems } from '@/constants';
import { LogOut } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

/**
 * Sidebar component that renders a vertical navigation bar with a logo at the top,
 * followed by a list of buttons representing menu items, and a logout button at the bottom.
 *
 * @author Abdelrahman
 */
const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <div className="w-24 bg-white border-r border-gray-200 flex flex-col items-center py-4">
      <div className="mb-8">
        <div className="w-16 h-16  rounded-lg flex items-center justify-center">
          <Image src="/images/logo.svg" alt="Logo" width={36} height={36} />
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-4">
        {sidebarItems.map(item => (
          <button
            key={item.label}
            onClick={() => setActiveItem(item.label)}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
              item.active || activeItem === item.label
                ? 'bg-orange-100 text-orange-600'
                : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
            }`}>
            <item.icon className="w-5 h-5" />
          </button>
        ))}
        <button className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
          <LogOut className="w-5 h-5" />
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
