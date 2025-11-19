"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Store,
  Package,
  ShoppingCart,
  Image,
  Tag,
  LayoutDashboard,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Store Settings",
    href: "/admin/store",
    icon: Store,
  },
  {
    title: "Products",
    href: "/admin/products",
    icon: Package,
  },
  {
    title: "Orders",
    href: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    title: "Banners",
    href: "/admin/banners",
    icon: Image,
  },
  {
    title: "Promos",
    href: "/admin/promos",
    icon: Tag,
  },
  {
    title: "Flash Sales",
    href: "/admin/flash-sales",
    icon: Zap,
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex md:w-64 md:flex-col fixed inset-y-0 z-50 bg-white border-r">
          <div className="flex flex-col flex-grow pt-5 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <Link
                href="/admin/dashboard"
                className="text-xl font-bold text-primary"
              >
                Admin Dashboard
              </Link>
            </div>
            <div className="mt-8 flex-grow flex flex-col">
              <nav className="flex-1 px-2 pb-4 space-y-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-gray-700 hover:bg-gray-100"
                      )}
                    >
                      <item.icon
                        className={cn(
                          "mr-3 flex-shrink-0 h-5 w-5",
                          isActive
                            ? "text-primary-foreground"
                            : "text-gray-500 group-hover:text-gray-700"
                        )}
                      />
                      {item.title}
                    </Link>
                  );
                })}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t p-4">
              <Link
                href="/"
                className="flex-shrink-0 w-full group block text-sm text-gray-700 hover:text-primary"
              >
                View Store →
              </Link>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="md:pl-64 flex flex-col flex-1">
          <main className="flex-1">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
