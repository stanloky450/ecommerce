"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { useEffect, useState } from "react";

export function Footer() {
  const [store, setStore] = useState<any>(null);

  useEffect(() => {
    fetchStoreData();
  }, []);

  const fetchStoreData = async () => {
    try {
      const res = await fetch("/api/store");
      const { store } = await res.json();
      setStore(store);
    } catch (error) {
      console.error("Error fetching store:", error);
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              {store?.storeName || "E-Commerce"}
            </h3>
            <p className="text-sm opacity-90">
              {store?.tagline || "Your one-stop shop for everything"}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/admin/dashboard" className="hover:underline">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: {store?.businessEmail || "info@store.com"}</li>
              {store?.customerCarePhone && (
                <li>Phone: {store.customerCarePhone}</li>
              )}
              {store?.storeAddress && <li>Address: {store.storeAddress}</li>}
            </ul>
          </div>

          {/* Social Media */}
          {store?.showSocialIcons && (
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {store?.socialMedia?.facebook && (
                  <a
                    href={store.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                )}
                {store?.socialMedia?.instagram && (
                  <a
                    href={store.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                )}
                {store?.socialMedia?.twitter && (
                  <a
                    href={store.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
                {store?.socialMedia?.youtube && (
                  <a
                    href={store.socialMedia.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>
            © {new Date().getFullYear()}{" "}
            {store?.storeName || "E-Commerce Store"}.{" "}
            {store?.footerText || "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
