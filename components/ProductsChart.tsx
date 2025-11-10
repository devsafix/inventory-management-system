"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface ChartData {
  week: string;
  products: number;
}

export default function ProductsChart({ data }: { data: ChartData[] }) {
  console.log(data);
  return (
    <div className="h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <defs>
            <filter id="shadow" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="0" dy="2" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.2" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e2e8f0"
            vertical={false}
          />

          <XAxis
            dataKey="week"
            stroke="#94a3b8"
            fontSize={11}
            tickLine={false}
            axisLine={false}
            dy={10}
            fontWeight={500}
          />

          <YAxis
            stroke="#94a3b8"
            fontSize={11}
            tickLine={false}
            axisLine={false}
            dx={-10}
            allowDecimals={false}
            fontWeight={500}
          />

          <Area
            type="monotone"
            dataKey="products"
            stroke="#8b5cf6"
            fill="url(#colorProducts)"
            fillOpacity={1}
            strokeWidth={3}
            dot={{
              fill: "#8b5cf6",
              r: 4,
              strokeWidth: 2,
              stroke: "#fff",
            }}
            activeDot={{
              fill: "#8b5cf6",
              r: 6,
              strokeWidth: 3,
              stroke: "#fff",
              filter: "url(#shadow)",
            }}
          />

          <defs>
            <linearGradient id="colorProducts" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.02} />
            </linearGradient>
          </defs>

          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.98)",
              border: "1px solid #e2e8f0",
              borderRadius: "12px",
              boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.15)",
              padding: "8px 12px",
            }}
            labelStyle={{
              color: "#1e293b",
              fontWeight: "600",
              fontSize: "12px",
              marginBottom: "4px",
            }}
            itemStyle={{
              color: "#8b5cf6",
              fontSize: "13px",
              fontWeight: "600",
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
