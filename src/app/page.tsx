import Actions from "@/app/(products)/Actions";
import Articles from "@/app/(articles)/Articles";
import Maps from "@/components/Maps";
import Slider from "@/components/Slider/Slider";
import SpecialOffers from "@/components/SpecialOffers";
import NewProducts from "./(products)/NewProducts";
import Purchases from "./(user)/Purchases";
import { type ReactNode, Suspense } from "react";
import { Loader } from "@/components/Loader";

const sections: { component: ReactNode; text: string }[] = [
  { component: <Actions />, text: "Actions" },
  { component: <NewProducts />, text: "New" },
  { component: <Purchases />, text: "Purchases" },
  { component: <SpecialOffers />, text: "Special offers" },
  { component: <Maps />, text: "Maps" },
  { component: <Articles />, text: "Articles" },
];

export default function Home() {
  return (
    <main className="w-full mx-auto mb-20">
      <Suspense fallback={<Loader text="Slider" />}>
        <Slider />
      </Suspense>
      <div className="px-[max(12px,calc((100%-1208px)/2))] flex flex-col gap-y-20 md:mb-25 xl:mb-30">
        {sections.map(({ component, text }) => (
          <Suspense key={text} fallback={<Loader text={text} />}>
            {component}
          </Suspense>
        ))}
      </div>
    </main>
  );
}
