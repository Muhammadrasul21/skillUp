import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ArrowUpRight } from "lucide-react";
import { users } from "@/static";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#0090FF",
  },
  mobile: {
    label: "Mobile",
    color: "#0090FF",
  },
};

export function Chart() {
  return (
    <div className="container flex gap-4">
      <Card className="border-[#E2E8F0] !p-5">
        <CardHeader className="flex items-center">
          <p>Umumiy ishlangan pul -</p>
          <p className="text-[#0090FF] font-semibold flex-1/2">
            12 000 400 so’m
          </p>
          <Button
            className={"border border-[#E2E8F0] !py-5 !px-4 cursor-pointer"}
          >
            Batafsil
            <ArrowUpRight />
          </Button>
        </CardHeader>

        <CardContent className="h-[300px] min-w-[731px]">
          <ChartContainer config={chartConfig}>
            <AreaChart data={chartData} margin={{ left: 12, right: 12 }}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                height={100}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Area
                dataKey="mobile"
                type="natural"
                fill={chartConfig.mobile.color}
                fillOpacity={0.4}
                stroke={chartConfig.mobile.color}
                stackId="a"
              />
              <Area
                dataKey="desktop"
                type="natural"
                fill={chartConfig.desktop.color}
                fillOpacity={0.4}
                stroke={chartConfig.desktop.color}
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="!p-5 border-[#E2E8F0]">
        <div className="flex items-center justify-between">
          <p className="font-medium text-[18px]">Yangi obunachilar</p>
          <Button
            className={"border border-[#E2E8F0] !py-5 !px-4 cursor-pointer"}
          >
            Batafsil
            <ArrowUpRight />
          </Button>
        </div>
        <div>
          {users?.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between !py-4 border-b border-b-[#EAECF0]"
            >
              <div className="flex items-center gap-3">
                <img src={item.img} alt="" />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-[14px] text-[#8F8F8F]">{item.date}</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-[#30A46C] font-medium">{item.cash}</p>
                <p className="#8F8F8F text-[14px]">{item.payment}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
