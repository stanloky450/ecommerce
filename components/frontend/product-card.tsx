"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: {
    _id: string;
    name: string;
    slug: string;
    price: number;
    compareAtPrice?: number;
    images: string[];
    category: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const discount = product.compareAtPrice
    ? Math.round(
        ((product.compareAtPrice - product.price) / product.compareAtPrice) *
          100
      )
    : 0;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden group">
        <Link href={`/products/${product.slug}`} className="relative">
          <div className="aspect-square overflow-hidden bg-gray-100">
            {product.images?.[0] ? (
              <img
                src={product.images[0]}
                alt={product.name}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                No Image
              </div>
            )}
          </div>
          {discount > 0 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
              -{discount}%
            </div>
          )}
        </Link>

        <CardContent className="flex-1 p-4">
          <p className="text-xs text-muted-foreground mb-1">
            {product.category}
          </p>
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-semibold line-clamp-2 hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
            {product.compareAtPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.compareAtPrice.toFixed(2)}
              </span>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <Button className="w-full group">
            <ShoppingCart className="mr-2 h-4 w-4 group-hover:animate-bounce" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
