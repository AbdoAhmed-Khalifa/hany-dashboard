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
    <Card >
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">
          Featured Products
        </CardTitle>
        <Button variant="ghost" size="sm" className="text-gray-500">
          See all
        </Button>
      </CardHeader>
      <CardContent className="space-y-2">
  {featuredProducts.map(product => (
    <div
      key={product.id}
      className="flex items-center justify-between rounded-md hover:bg-gray-50 px-3 py-2"
    >
      {/* Product Image */}
      <div className="flex items-center gap-3 w-1/4 min-w-[150px]">
        <div className="w-10 h-10 bg-gray-200 rounded-lg shrink-0" />
        <div>
          <p className="font-medium">{product.name}</p>
          <p className="text-xs text-gray-500">{product.sku}</p>
        </div>
      </div>

      {/* Sold Count */}
      <div className="text-sm text-gray-600 w-[60px] text-center">{product.sold} Sold</div>

      {/* Price */}
      <div className="text-sm font-semibold w-[80px] text-center">${product.price.toFixed(2)}</div>

      {/* Rating */}
      <div className="flex items-center gap-1 w-[60px] text-sm text-center justify-center">
        {product.rating}
        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
      </div>

      {/* Add to Cart */}
      <div className="w-[130px] flex justify-end">
        <Button
          size="sm"
          variant="outline"
          className="text-orange-600 border-orange-600 hover:bg-orange-50 bg-transparent"
        >
          <ShoppingCart className="w-4 h-4 mr-1" />
          Add to cart
        </Button>
      </div>

      {/* More Options */}
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
