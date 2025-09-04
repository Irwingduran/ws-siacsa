export interface Product {
  id: number;
  name: string;
  brand: string;
  image: string;
  detailImage?: string;
  category: string;
  isNew: boolean;
  description: string;
  rating?: number;
  specifications?: string[];
}
