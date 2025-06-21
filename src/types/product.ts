export type ProductCardProps = {
  _id: string;
  id: number;
  img: string;
  title: string;
  description: string;
  basePrice: number;
  discountPercent?: number;
  rating: Rating;
  categories: string[];
  weight: string;
};

export type Rating = {
  rate: number;
  count: number;
};
