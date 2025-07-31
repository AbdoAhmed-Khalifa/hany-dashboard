
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import Chart from "@/components/Chart";
import FeaturedProducts from "@/components/FeaturedProducts";
import BalanceCard from "@/components/BalanceCard";
import Cart from "@/components/Cart";

/**
 * create dashboard component
 *
 *  @author Ahmed
 */
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
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
              <div className="col-span-1 lg:col-span-7">
                {/* Hero Banner */}
                <HeroBanner />
              </div>
              {/* Right Sidebar */}
              <div className="col-span-1 lg:col-span-3  h-[400px]  ">
                {/* Balance Card */}
                <BalanceCard />
                {/* Cart */}
                <Cart />
              </div>
            </div>
            {/* Analytics Section */}
            <div className="flex items-center justify-between my-6">
              <h1 className="text-2xl font-semibold ">Products Analytics</h1>
              <span>details</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-2 gap-6">
              {/* Chart */}
              <div className="col-span-1 lg:col-span-1">
                <Chart />
              </div>
              {/* Featured Products */}
              <div className="col-span-1 lg:col-span-2">
                <FeaturedProducts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
