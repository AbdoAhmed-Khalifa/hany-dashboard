import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from './ui/button';

const BalanceCard = () => {
  return (
    <Card className="mb-4 h-[150px] overflow-hidden">
      <CardContent className="p-2 px-5">
        <div className="flex items-center justify-between ">
          <span className="text-sm text-gray-500">Total Balance</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-gray-500">
                3 days
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Today</DropdownMenuItem>
              <DropdownMenuItem>3 days</DropdownMenuItem>
              <DropdownMenuItem>7 days</DropdownMenuItem>
              <DropdownMenuItem>30 days</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-bold">$ 45,892.33</h2>
          <span className="text-green-500 text-sm">+$1,176.29</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="font-bold">
            <p className="text-sm text-gray-500">Affiliate account</p>
            <p className="font-mono text-sm">**** **** **** 7890</p>
          </div>
          <Button size="sm" className="bg-orange-500 hover:bg-orange-600 p-4">
            Top Up
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BalanceCard;
