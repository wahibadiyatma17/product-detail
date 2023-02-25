export type ProductDetailDataType = {
  description: string;
  id: string;
  image: string;
  images: Array<string>;
  isFav: boolean;
  name: string;
  new: boolean;
  off: string;
  out_of_stock: boolean;
  price: string;
  rating: number;
  reviewCount: number;
  sizes: Array<number>;
};

export type ProductImageActiveType = {
  index: number;
  imageUrl?: string;
};
