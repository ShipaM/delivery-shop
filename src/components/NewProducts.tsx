import Image from "next/image";
import iconRight from "/public/icons-products/icon-arrow-right.svg";
import ProductCard from "./ProductCard";
import { ProductCardProps } from "@/types/product";
import { getProductsByCategory } from "@/app/api/products/route";

export default async function NewProducts() {
  let products: ProductCardProps[] = [];
  let error = null;

  try {
    products = (await getProductsByCategory(
      "new"
    )) as unknown as ProductCardProps[];
  } catch (err) {
    error = err instanceof Error ? err.message : "Неизвестная ошибка";
    console.error("Ошибка в компоненте NewProducts:", err);
  }

  if (error) {
    return <div className="text-red-500 py-8">Ошибка: {error}</div>;
  }

  return (
    <section>
      <div className="flex flex-col ">
        <div className="mb-4 md:mb-8 xl:mb-10 flex flex-row justify-between">
          <h2 className="text-2xl xl:text-4xl text-left font-bold text-[#414141]">
            Новинки
          </h2>
          <button className="flex flex-row items-center gap-x-2 cursor-pointer">
            <p className="text-base text-center text-[#606060] hover:text-[#bfbfbf] duration-300">
              Все новинки
            </p>
            <Image
              src={iconRight}
              alt="К новинкам"
              width={24}
              height={24}
              sizes="24px"
            />
          </button>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-10 justify-items-center">
          {products.slice(0, 4).map((item, index) => (
            <li
              key={item.id}
              className={`${index >= 4 ? "hidden" : ""}
            ${index >= 3 ? "md:hidden xl:block" : ""}
            ${index >= 4 ? "xl:hidden" : ""}
            `}
            >
              <ProductCard {...(item as ProductCardProps)} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
