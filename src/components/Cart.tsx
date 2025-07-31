import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './ui/button';
import { X } from 'lucide-react';
const cartItems = [
  { id: 1, name: 'Sneaker', price: 30.0 },
  { id: 2, name: "Men's Hat", price: 30.0 },
];
const Cart = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="text-lg font-semibold">My Cart</CardTitle>
        <Button variant="ghost" size="sm" className="text-gray-500">
          See all
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
            <div className="flex-1">
              <h4 className="font-medium">{item.name}</h4>
              <p className="font-semibold">${item.price.toFixed(2)}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="w-6 h-6 text-gray-400">
              <X className="w-4 h-4" />
            </Button>
          </div>
        ))}

        <Button className="w-full bg-orange-500 hover:bg-orange-600 mt-4">
          Get Pay $ 60.00
        </Button>
      </CardContent>
    </Card>
  );
};

export default Cart;
