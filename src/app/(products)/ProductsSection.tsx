import ProductCard from "@/components/ProductCard";
import ViewAllButton from "@/components/ViewAllButton";
import { ProductCardProps } from "@/types/product";
import React from "react";

type ProductsSectionProps = {
  title: string;
  viewAllButton?: {
    text: string;
    href: string;
  };
  products: ProductCardProps[];
};

const ProductsSection = ({
  title,
  viewAllButton,
  products,
}: ProductsSectionProps) => {
  return (
    <section>
      <div className="flex flex-col px-[max(12px,calc((100%-1208px)/2))]">
        <div className="mb-4 md:mb-8 xl:mb-10 flex flex-row justify-between">
          <h2 className="text-2xl xl:text-4xl text-left font-bold text-[#414141]">
            {title}
          </h2>
          {viewAllButton && (
            <ViewAllButton
              btnText={viewAllButton.text}
              href={viewAllButton.href}
            />
          )}
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-10 justify-items-center">
          {products.map((item, index) => (
            <li
              key={item._id}
              className={`                ${
                index >= 3 ? "md:hidden xl:block" : ""
              }               `}
            >
              <ProductCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductsSection;
