export interface Product {
  id: number;
  name: string;
  brand: string;
  image: string;
  detailImage?: string;
  category: string;
  description: string;
  rating?: number;
  specifications?: string[];
}
