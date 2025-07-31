import { Card, CardContent } from '@/components/ui/card';
import { Button } from './ui/button';

/**
 * update HeroBanner structure
 *
 *  @author Abdelrahman
 */

const HeroBanner = () => {
  return (
    <Card className="mb-6 border-0 bg-gradient-to-r h-[400px] from-orange-400 to-orange-600 text-white overflow-hidden">
      <CardContent className="px-10 my-auto relative">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-10">EASY SHOPPING EASY!</h1>
          <p className="text-lg mb-6 opacity-90">
            Search and buy anything with just a few
            <br />
            simple steps even at home.
          </p>
          <Button className="bg-white sm:mt-16 text-lg py-5 text-orange-600 hover:bg-gray-100">
            Explore Now
          </Button>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full opacity-20 transform translate-x-32 -translate-y-32"></div>
      </CardContent>
    </Card>
  );
};

export default HeroBanner;
