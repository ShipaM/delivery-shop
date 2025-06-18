import ProductCard from "./ProductCard";
import { ProductCardProps } from "@/types/product";
import { getPurchases } from "@/app/api/users/purchases/route";
import ViewAllButton from "./ViewAllButton";

const Purchases = async () => {
  let purchases: ProductCardProps[] = [];
  let error = null;

  try {
    purchases = (await getPurchases()) as unknown as ProductCardProps[];
  } catch (err) {
    error = err instanceof Error ? err.message : "Неизвестная ошибка";
    console.error("Ошибка в компоненте Actions:", err);
  }

  if (error) {
    return <div className="text-red-500 py-8">Ошибка: {error}</div>;
  }

  return (
    <section>
      <div className="flex flex-col ">
        <div className="mb-4 md:mb-8 xl:mb-10 flex flex-row justify-between">
          <h2 className="text-2xl xl:text-4xl text-left font-bold text-[#414141]">
            Покупали раньше
          </h2>
          {purchases.length > 0 && <ViewAllButton btnText="Все покупки" />}
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-10 justify-items-center">
          {purchases.slice(0, 4).map((item, index) => (
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
};

export default Purchases;
