'use client';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import Chart from '@/components/Chart';
import FeaturedProducts from '@/components/FeaturedProducts';
import BalanceCard from '@/components/BalanceCard';
import Cart from '@/components/Cart';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        <div className="flex-1 flex">
          {/* Main Dashboard Content */}
          <div className="flex-1 p-6">
            {/* Hero Banner */}
            <HeroBanner />

            {/* Analytics Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Chart */}
              <Chart />

              {/* Featured Products */}
              <FeaturedProducts />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 bg-white border-l border-gray-200 p-6">
            {/* Balance Card */}
            <BalanceCard />
            {/* Cart */}
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}
