import { createProduct } from "@/lib/actions/products";
import Link from "next/link";
import { Save, X, Package } from "lucide-react";
import Sidebar from "@/components/Side-bar";

export default async function AddProductPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar currentPath="/add-product" />
      <main className="md:ml-64 md:p-8 p-3 mt-16 md:mt-0">
        {/* Form Container */}
        <div className="max-w-3xl">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            {/* Form Header */}
            <div className="bg-slate-50 border-b border-slate-200 px-6 sm:px-8 py-5">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Product Information
                  </h2>
                  <p className="text-xs text-slate-600">
                    Enter the product details
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="p-6 sm:p-8 space-y-6" action={createProduct}>
              {/* Product Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-slate-900 mb-2"
                >
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all bg-white text-slate-900 placeholder-slate-400"
                  placeholder="Enter product name"
                />
                <p className="mt-1.5 text-xs text-slate-500">
                  A unique name to identify this product
                </p>
              </div>

              {/* Quantity and Price Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-semibold text-slate-900 mb-2"
                  >
                    Quantity <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="0"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all bg-white text-slate-900 placeholder-slate-400"
                      placeholder="0"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-500">
                      units
                    </div>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-500">
                    Current stock quantity
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-semibold text-slate-900 mb-2"
                  >
                    Price <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-500">
                      $
                    </div>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      step="0.01"
                      min="0"
                      required
                      className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all bg-white text-slate-900 placeholder-slate-400"
                      placeholder="0.00"
                    />
                  </div>
                  <p className="mt-1.5 text-xs text-slate-500">
                    Price per unit
                  </p>
                </div>
              </div>

              {/* SKU */}
              <div>
                <label
                  htmlFor="sku"
                  className="block text-sm font-semibold text-slate-900 mb-2"
                >
                  SKU{" "}
                  <span className="text-slate-400 font-normal text-xs">
                    (optional)
                  </span>
                </label>
                <input
                  type="text"
                  id="sku"
                  name="sku"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all bg-white text-slate-900 placeholder-slate-400"
                  placeholder="e.g., PROD-001"
                />
                <p className="mt-1.5 text-xs text-slate-500">
                  Stock Keeping Unit for inventory tracking
                </p>
              </div>

              {/* Low Stock Alert */}
              <div>
                <label
                  htmlFor="lowStockAt"
                  className="block text-sm font-semibold text-slate-900 mb-2"
                >
                  Low Stock Alert Threshold{" "}
                  <span className="text-slate-400 font-normal text-xs">
                    (optional)
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="lowStockAt"
                    name="lowStockAt"
                    min="0"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all bg-white text-slate-900 placeholder-slate-400"
                    placeholder="e.g., 10"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-500">
                    units
                  </div>
                </div>
                <p className="mt-1.5 text-xs text-slate-500">
                  Get notified when stock falls below this quantity
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200">
                <button
                  type="submit"
                  className="flex-1 sm:flex-initial px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 font-semibold transition-all shadow-sm hover:shadow-md flex items-center justify-center space-x-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Add Product</span>
                </button>
                <Link
                  href="/inventory"
                  className="flex-1 sm:flex-initial px-6 py-3 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 font-semibold transition-all flex items-center justify-center space-x-2"
                >
                  <X className="w-4 h-4" />
                  <span>Cancel</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
