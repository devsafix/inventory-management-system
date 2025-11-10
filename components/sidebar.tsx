"use client";

import { UserButton } from "@stackframe/stack";
import { BarChart3, Package, Plus, Settings, Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Sidebar({
  currentPath = "/dashboard",
}: {
  currentPath: string;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
    { name: "Inventory", href: "/inventory", icon: Package },
    { name: "Add Product", href: "/add-product", icon: Plus },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-slate-950 border-b border-slate-800/50 z-50">
        <div className="flex items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-violet-600 p-2 rounded-lg shadow-lg shadow-violet-600/20">
              <BarChart3 className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              Inventory<span className="text-violet-500">Hub</span>
            </span>
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={closeMobileMenu}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="lg:hidden fixed left-0 top-0 bottom-0 w-72 bg-slate-950 border-r border-slate-800/50 z-50 flex flex-col"
            >
              {/* Mobile Menu Header */}
              <div className="p-6 border-b border-slate-800/50">
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className="flex items-center gap-3"
                >
                  <div className="bg-violet-600 p-2 rounded-xl shadow-lg shadow-violet-600/20">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold tracking-tight text-white">
                    Inventory<span className="text-violet-500">Hub</span>
                  </span>
                </Link>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-3">
                  Menu
                </div>
                {navigation.map((item, key) => {
                  const IconComponent = item.icon;
                  const isActive = currentPath === item.href;
                  return (
                    <Link href={item.href} key={key} onClick={closeMobileMenu}>
                      <motion.div
                        whileTap={{ scale: 0.98 }}
                        className={`flex items-center gap-3 py-3 px-3 rounded-xl transition-all duration-200 ${
                          isActive
                            ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30"
                            : "text-slate-400 hover:bg-slate-900 hover:text-white"
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span className="text-sm font-medium">{item.name}</span>
                      </motion.div>
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile User Section */}
              <div className="p-4 border-t border-slate-800/50">
                <div className="flex items-center justify-between bg-slate-900/50 rounded-xl p-3 backdrop-blur-sm">
                  <UserButton showUserInfo />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex fixed left-0 top-0 bg-slate-950 text-white w-64 min-h-screen p-6 z-10 border-r border-slate-800/50 flex-col">
        {/* Logo Section */}
        <div className="mb-10">
          <Link href={"/"} className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="bg-violet-600 p-2 rounded-xl shadow-lg shadow-violet-600/20"
            >
              <BarChart3 className="w-5 h-5" />
            </motion.div>
            <span className="text-xl font-bold tracking-tight">
              Inventory<span className="text-violet-500">Hub</span>
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1.5">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-3">
            Menu
          </div>
          {navigation.map((item, key) => {
            const IconComponent = item.icon;
            const isActive = currentPath === item.href;
            return (
              <Link href={item.href} key={key}>
                <motion.div
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-3 py-3 px-3 rounded-xl transition-all duration-200 relative overflow-hidden ${
                    isActive
                      ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30"
                      : "text-slate-400 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  <IconComponent className="w-5 h-5 relative z-10" />
                  <span className="text-sm font-medium relative z-10">
                    {item.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-violet-600"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="pt-6 border-t border-slate-800/50">
          <div className="flex items-center justify-between bg-slate-900/50 rounded-xl p-3 backdrop-blur-sm">
            <UserButton showUserInfo />
          </div>
        </div>
      </div>
    </>
  );
}
