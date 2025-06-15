"use client";
import React, { useState } from "react";
import { YMaps, Map, Placemark } from "@iminside/react-yandex-maps";
import { LocationKey } from "@/types/map";
import { locations } from "@/constants/maplocations";

const Maps: React.FC = () => {
  const [currentLocation, setCurrentLocation] =
    useState<LocationKey>("Kharkiv");

  const currentLocationData = locations[currentLocation];

  const defaultState = {
    center: currentLocationData.center,
    zoom: 12,
  };

  return (
    <YMaps>
      <section>
        <div className="flex justify-center flex-col xl:max-w-[1280px]">
          <h2 className="text-2xl xl:text-4xl mb-4 md:mb-8 xl:mb-10 text-left font-bold text-[#414141]">
            Наши магазины
          </h2>
          <div className="flex flex-wrap gap-x-2 gap-y-3 mb-5">
            {Object.keys(locations).map((location) => {
              const isActive = currentLocation === location;
              return (
                <button
                  key={location}
                  onClick={() => setCurrentLocation(location as LocationKey)}
                  className={`p-2 text-xs justify-center items-center active:shadow-(--shadow-button-active) border-none rounded cursor pointer transition-colors duration-300 ${
                    isActive
                      ? "bg-(--color-primary) text-white hover: shadow-(--shadow-button-default)"
                      : "bg-[#f3f2f1] hover:shadow-(--shadow-button-secondary)"
                  }`}
                >
                  {locations[location as LocationKey].name}
                </button>
              );
            })}
          </div>
          <Map
            options={{
              suppressMapOpenBlock: true,
            }}
            defaultState={defaultState}
            width="100%"
            height="354px"
            state={defaultState}
          >
            {locations[currentLocation].shops.map((shop) => (
              <Placemark
                key={shop.id}
                geometry={shop.coordinates}
                options={{
                  iconLayout: "default#image",
                  iconImageHref: "/icons-map/icon-location.svg",
                  iconImageSize: [32, 32],
                  iconImageOffset: [-16, -16],
                }}
              />
            ))}
          </Map>
        </div>
      </section>
    </YMaps>
  );
};

export default Maps;
