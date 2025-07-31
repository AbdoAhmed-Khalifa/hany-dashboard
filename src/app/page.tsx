"use client";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import Chart from "@/components/Chart";
import FeaturedProducts from "@/components/FeaturedProducts";
import BalanceCard from "@/components/BalanceCard";
import Cart from "@/components/Cart";

export default function Dashboard() {
  return (
    <div className="flex  bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        <div className="flex-1 flex">
          {/* Main Dashboard Content */}
          <div className="flex-1 p-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="col-span-1 lg:col-span-3">
                {/* Hero Banner */}
                <HeroBanner />
              </div>
              {/* Right Sidebar */}
              <div className="col-span-1 lg:col-span-1  h-[400px]  ">
                {/* Balance Card */}
                <BalanceCard />
                {/* Cart */}
                <Cart />
              </div>
            </div>
            {/* Analytics Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-6">
              {/* Chart */}
              <Chart />

              {/* Featured Products */}
              <FeaturedProducts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
