/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { deleteProduct } from "@/lib/actions/products";
import {
  Search,
  Trash2,
  Package,
  DollarSign,
  Hash,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useTransition } from "react";
import Sidebar from "@/components/Sidebar";
import Pagination from "@/components/Pagination";

interface Product {
  id: string;
  name: string;
  sku: string | null;
  price: number;
  quantity: number;
  lowStockAt: number | null;
}

interface InventoryClientProps {
  items: Product[];
  totalPages: number;
  currentPage: number;
  query: string;
  pageSize: number;
}

export default function InventoryClient({
  items,
  totalPages,
  currentPage,
  query,
  pageSize,
}: InventoryClientProps) {
  const [isPending, startTransition] = useTransition();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (formData: FormData) => {
    const id = formData.get("id") as string;
    setDeletingId(id);
    startTransition(async () => {
      await deleteProduct(formData);
      setDeletingId(null);
    });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar currentPath="/inventory" />
      <main className="md:ml-64 md:p-8 p-3 mt-16 md:mt-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Inventory</h1>
          <p className="text-slate-600">
            Manage your products and track inventory levels.
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm"
          >
            <form className="flex gap-3" action="/inventory" method="GET">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  name="q"
                  defaultValue={query}
                  placeholder="Search products by name..."
                  className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-violet-600 text-white rounded-xl hover:bg-violet-700 font-medium shadow-sm hover:shadow-md transition-all"
              >
                Search
              </motion.button>
            </form>
          </motion.div>

          {/* Products Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden shadow-sm"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <Package className="w-4 h-4" />
                        Product Name
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <Hash className="w-4 h-4" />
                        SKU
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        Price
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Low Stock Alert
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>

                <motion.tbody
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="bg-white divide-y divide-slate-100"
                >
                  {items.map((product, key) => {
                    const isLowStock =
                      product.lowStockAt &&
                      product.quantity <= product.lowStockAt;
                    const isOutOfStock = product.quantity === 0;

                    return (
                      <motion.tr
                        key={key}
                        variants={item}
                        className="hover:bg-slate-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                              <Package className="w-5 h-5 text-violet-600" />
                            </div>
                            <span className="text-sm font-semibold text-slate-900">
                              {product.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-slate-600 font-mono">
                            {product.sku || (
                              <span className="text-slate-400">N/A</span>
                            )}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm font-bold text-slate-900">
                            ${Number(product.price).toFixed(2)}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                              isOutOfStock
                                ? "bg-rose-100 text-rose-700"
                                : isLowStock
                                ? "bg-amber-100 text-amber-700"
                                : "bg-emerald-100 text-emerald-700"
                            }`}
                          >
                            {product.quantity} units
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-slate-600">
                            {product.lowStockAt || (
                              <span className="text-slate-400">Not set</span>
                            )}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <form action={handleDelete}>
                            <input type="hidden" name="id" value={product.id} />
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              disabled={deletingId === product.id}
                              className="inline-flex items-center gap-2 px-4 py-2 text-rose-600 hover:text-white hover:bg-rose-600 rounded-xl font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-rose-200 hover:border-rose-600"
                            >
                              <Trash2 className="w-4 h-4" />
                              {deletingId === product.id
                                ? "Deleting..."
                                : "Delete"}
                            </motion.button>
                          </form>
                        </td>
                      </motion.tr>
                    );
                  })}
                </motion.tbody>
              </table>
            </div>

            {items.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <Package className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  No products found
                </h3>
                <p className="text-slate-600">
                  {query
                    ? "Try adjusting your search criteria"
                    : "Start by adding your first product"}
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm"
            >
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                baseUrl="/inventory"
                searchParams={{
                  q: query,
                  pageSize: String(pageSize),
                }}
              />
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
