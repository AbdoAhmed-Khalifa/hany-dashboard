import { Search, Bell, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

/**
 * The main header component for the app.
 *
 * This component is a horizontal bar that sticks to the top of the page. It
 * contains a search bar on the left and three items on the right:
 * - A bell icon for notifications
 * - A message square icon for messages
 * - A user avatar
 *
 *  @author Abdelrahman
 */

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 w-full">
          <div className="relative">
            <div className="absolute  right-10 top-1/2 transform -translate-y-1/2 bg-gray-400 w-[1px] h-4"></div>
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input className="pl-10 bg-gray-50 border-0" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MessageSquare className="w-5 h-5" />
          </Button>
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
