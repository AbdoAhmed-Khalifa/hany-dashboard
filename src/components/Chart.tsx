import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
const chartData = [
  { day: "Mon", value: 3500 },
  { day: "Tue", value: 2800 },
  { day: "Wed", value: 2000 },
  { day: "Thu", value: 3800 },
  { day: "Fri", value: 3200 },
  { day: "Sat", value: 800 },
  { day: "Sun", value: 2500 },
];
const Chart = () => {
  const maxValue = Math.max(...chartData.map((d) => d.value));

  return (
    <Card className="py-6 gap-y-12">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Sold</CardTitle>
        <Button variant="ghost" size="sm" className="text-gray-500">
          Detail
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between h-48 gap-2">
          {chartData.map((item) => (
            <div
              key={item.day}
              className="flex flex-col items-center gap-2 flex-1"
            >
              <div className="w-full flex justify-center">
                <div
                  className="bg-orange-500 rounded-t-sm transition-all duration-300 hover:bg-orange-600"
                  style={{
                    height: `${(item.value / maxValue) * 160}px`,
                    width: "24px",
                  }}
                />
              </div>
              <span className="text-xs text-gray-500">{item.day}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Chart;
