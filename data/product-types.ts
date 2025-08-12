export interface Product {
  id: number;
  name: string;
  brand: string;
  image: string;
  category: string;
  isNew: boolean;
  description: string;
  rating?: number;
}
