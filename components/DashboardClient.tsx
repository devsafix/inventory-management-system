"use client";

import ProductsChart from "@/components/ProductsChart";
import Sidebar from "@/components/Sidebar";
import { TrendingUp, Package, DollarSign, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

interface Product {
  name: string;
  quantity: number;
  lowStockAt: number | null;
}

interface ChartData {
  week: string;
  products: number;
}

interface DashboardClientProps {
  totalProducts: number;
  lowStocks: number;
  totalValue: number;
  weeklyProductsData: ChartData[];
  recent: Product[];
  inStockPercentage: number;
  lowStockPercentage: number;
  outOfStockPercentage: number;
}

export default function DashboardClient({
  totalProducts,
  lowStocks,
  totalValue,
  weeklyProductsData,
  recent,
  inStockPercentage,
  lowStockPercentage,
  outOfStockPercentage,
}: DashboardClientProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <Sidebar currentPath="/dashboard" />
      <main className="md:ml-64 md:p-8 p-3 mt-16 md:mt-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Dashboard</h1>
          <p className="text-slate-600">
            Welcome back! Here&apos;s an overview of your inventory.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"
        >
          {/* Key Metrics */}
          <motion.div
            variants={item}
            className="bg-white rounded-2xl border border-slate-200/60 p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-lg font-semibold text-slate-900 mb-8">
              Key Metrics
            </h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-violet-50 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-violet-100 transition-colors"
                >
                  <Package className="w-7 h-7 text-violet-600" />
                </motion.div>
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  {totalProducts}
                </div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
                  Total Products
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    +{totalProducts}
                  </span>
                  <TrendingUp className="w-3 h-3 text-emerald-600 ml-1" />
                </div>
              </div>

              <div className="text-center group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-emerald-50 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-100 transition-colors"
                >
                  <DollarSign className="w-7 h-7 text-emerald-600" />
                </motion.div>
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  ${Number(totalValue).toFixed(0)}
                </div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
                  Total Value
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    +${Number(totalValue).toFixed(0)}
                  </span>
                  <TrendingUp className="w-3 h-3 text-emerald-600 ml-1" />
                </div>
              </div>

              <div className="text-center group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-amber-50 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-100 transition-colors"
                >
                  <AlertTriangle className="w-7 h-7 text-amber-600" />
                </motion.div>
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  {lowStocks}
                </div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
                  Low Stocks
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    +{lowStocks}
                  </span>
                  <TrendingUp className="w-3 h-3 text-emerald-600 ml-1" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Inventory over time */}
          <motion.div
            variants={item}
            className="bg-white rounded-2xl border border-slate-200/60 p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-slate-900">
                New Products Per Week
              </h2>
            </div>
            <div className="h-48">
              <ProductsChart data={weeklyProductsData} />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Stock Levels */}
          <motion.div
            variants={item}
            className="bg-white rounded-2xl border border-slate-200/60 p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-slate-900">
                Recent Products
              </h2>
              <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
                Top 6
              </span>
            </div>
            <div className="space-y-3">
              {recent.map((product, key) => {
                const stockLevel =
                  product.quantity === 0
                    ? 0
                    : product.quantity <= (product.lowStockAt || 5)
                    ? 1
                    : 2;

                const bgColors = [
                  "bg-rose-500",
                  "bg-amber-500",
                  "bg-emerald-500",
                ];
                const textColors = [
                  "text-rose-600",
                  "text-amber-600",
                  "text-emerald-600",
                ];
                const bgLight = ["bg-rose-50", "bg-amber-50", "bg-emerald-50"];

                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: key * 0.1 }}
                    whileHover={{ x: 4 }}
                    className={`flex items-center justify-between p-4 rounded-xl ${bgLight[stockLevel]} border border-transparent hover:border-slate-200 transition-all cursor-pointer`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${bgColors[stockLevel]} shadow-sm`}
                      />
                      <span className="text-sm font-semibold text-slate-900">
                        {product.name}
                      </span>
                    </div>
                    <div
                      className={`text-sm font-bold ${textColors[stockLevel]}`}
                    >
                      {product.quantity} units
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Efficiency */}
          <motion.div
            variants={item}
            className="bg-white rounded-2xl border border-slate-200/60 p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-slate-900">
                Stock Distribution
              </h2>
            </div>
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-48 h-48">
                {/* Background circle */}
                <div className="absolute inset-0 rounded-full border-12 border-slate-100"></div>
                {/* Progress circle */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="84"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="12"
                    strokeDasharray={`${
                      (inStockPercentage / 100) * 527.79
                    } 527.79`}
                    className="transition-all duration-1000 ease-out"
                    strokeLinecap="round"
                  />
                </svg>
                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="text-4xl font-bold text-slate-900 mb-1"
                    >
                      {inStockPercentage}%
                    </motion.div>
                    <div className="text-sm font-medium text-slate-500">
                      In Stock
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-violet-50">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-violet-600 shadow-sm" />
                  <span className="text-sm font-semibold text-slate-700">
                    In Stock
                  </span>
                </div>
                <span className="text-sm font-bold text-violet-600">
                  {inStockPercentage}%
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-amber-50">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-amber-500 shadow-sm" />
                  <span className="text-sm font-semibold text-slate-700">
                    Low Stock
                  </span>
                </div>
                <span className="text-sm font-bold text-amber-600">
                  {lowStockPercentage}%
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-slate-400 shadow-sm" />
                  <span className="text-sm font-semibold text-slate-700">
                    Out of Stock
                  </span>
                </div>
                <span className="text-sm font-bold text-slate-600">
                  {outOfStockPercentage}%
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
