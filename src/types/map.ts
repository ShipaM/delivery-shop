type Coordinates = [number, number];

type Shop = {
  id: number;
  name: string;
  coordinates: Coordinates;
};

export type Location = {
  name: string;
  center: Coordinates;
  shops: Shop[];
};

export type LocationKey = "Kiev" | "Odessa" | "Lviv" | "Kharkiv";
