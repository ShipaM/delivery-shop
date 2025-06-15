import { LocationKey, Location } from "@/types/map";

export const locations: Record<LocationKey, Location> = {
  Kiev: {
    name: "Kiev",
    center: [50.4333, 30.5167],
    shops: [{ id: 1, coordinates: [50.4501, 30.5234], name: "shop1" }],
  },
  Odessa: {
    name: "Odessa",
    center: [46.4639, 30.7386],
    shops: [{ id: 2, coordinates: [46.4825, 30.7233], name: "shop2" }],
  },
  Lviv: {
    name: "Lviv",
    center: [49.8407, 24.0305],
    shops: [{ id: 3, coordinates: [49.8397, 24.0297], name: "shop3" }],
  },
  Kharkiv: {
    name: "Kharkiv",
    center: [49.980898, 36.252755],
    shops: [{ id: 4, coordinates: [49.980898, 36.252755], name: "shop4" }],
  },
};
