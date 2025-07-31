'use client';
import {
  MessageSquare,
  Box,
  TrendingUp,
  Users,
  Settings,
  Info,
  LogOut,
} from 'lucide-react';
import { useState } from 'react';
const sidebarItems = [
  { icon: Box, label: 'Dashboard', active: true },
  { icon: TrendingUp, label: 'Analytics' },
  { icon: MessageSquare, label: 'Messages' },
  { icon: Users, label: 'Users' },
  { icon: Settings, label: 'Settings' },
  { icon: Info, label: 'Help' },
];
const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4">
      <div className="mb-8">
        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
          <Box className="w-5 h-5 text-white" />
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
      </nav>

      <button className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
        <LogOut className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Sidebar;
