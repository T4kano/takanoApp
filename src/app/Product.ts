export interface Product {
  id?: string;
  name: string;
  unit: string;
  quantity: number;
  price: number;
  expiration_date?: Date;
  manufacturing_date: Date;
  perishable: boolean;
}
