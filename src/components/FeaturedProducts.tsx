import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, ShoppingCart, MoreHorizontal } from 'lucide-react';

import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
const featuredProducts = [
  {
    id: 1,
    name: 'Sneaker',
    price: 30.0,
    sold: 35,
    rating: 4.5,
    sku: '#QID324681',
  },
  {
    id: 2,
    name: 'Headphone',
    price: 30.0,
    sold: 35,
    rating: 4.5,
    sku: '#QID324681',
  },
  {
    id: 3,
    name: "Men's Hat",
    price: 30.0,
    sold: 35,
    rating: 4.5,
    sku: '#QID324681',
  },
  {
    id: 4,
    name: 'Fashion Bag',
    price: 30.0,
    sold: 35,
    rating: 4.5,
    sku: '#QID324681',
  },
];
const FeaturedProducts = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">
          Featured Products
        </CardTitle>
        <Button variant="ghost" size="sm" className="text-gray-500">
          See all
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {featuredProducts.map(product => (
          <div key={product.id} className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
            <div className="flex-1">
              <h4 className="font-medium">{product.name}</h4>
              <p className="text-sm text-gray-500">{product.sku}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">{product.sold} Sold</p>
              <div className="flex items-center gap-1">
                <span className="text-sm">{product.rating}</span>
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold">${product.price.toFixed(2)}</p>
              <Button
                size="sm"
                variant="outline"
                className="text-orange-600 border-orange-600 hover:bg-orange-50 bg-transparent">
                <ShoppingCart className="w-3 h-3 mr-1" />
                Add to cart
              </Button>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="w-6 h-6">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default FeaturedProducts;
