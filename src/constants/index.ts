import { MessageSquare, TrendingUp, Users, Settings, Info } from 'lucide-react';
import { CodesandboxIcon } from 'lucide-react';
const sidebarItems = [
  { icon: CodesandboxIcon, label: 'Dashboard', active: true },
  { icon: TrendingUp, label: 'Analytics' },
  { icon: MessageSquare, label: 'Messages' },
  { icon: Users, label: 'Users' },
  { icon: Settings, label: 'Settings' },
  { icon: Info, label: 'Help' },
];

export { sidebarItems };
