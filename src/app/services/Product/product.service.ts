import { Injectable } from '@angular/core';
import { Product} from './product';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {}
  getShirts(): Observable<Product[]> {
    return of(this.shirts);
  }
  getMobiles(): Observable<Product[]> {
    return of(this.mobiles);
  }
  getGroceries(): Observable<Product[]> {
    return of(this.groceries);
  }
  getVegetables(): Observable<Product[]> {
    return of(this.vegetables);
  }
  getGymequips(): Observable<Product[]> {
    return of(this.gymequips);
  }
  private shirts: Product[] = [
    {id: 's1', name: 'Shirt 1', price: 500, image: '../../assets/Shirts/Shirt 1.jpeg', quantity: 1, totalPrice: 0},
    {id: 's2', name: 'Shirt 2', price: 750, image: '../../assets/Shirts/Shirt 2.jpeg', quantity: 1, totalPrice: 0},
    {id: 's3', name: 'Shirt 3', price: 600, image: '../../assets/Shirts/Shirt 3.jpeg', quantity: 1, totalPrice: 0},
    {id: 's4', name: 'Shirt 4', price: 450, image: '../../assets/Shirts/Shirt 4.jpeg', quantity: 1, totalPrice: 0},
    {id: 's5', name: 'Shirt 5', price: 1000, image: '../../assets/Shirts/Shirt 5.jpeg', quantity: 1, totalPrice: 0}
  ];
  private mobiles: Product[] = [
    {id: 'm1', name: 'Samsung S24 Ultra', price: 130000, image: '../../assets/Mobiles/Mobile 1.jpg', quantity: 1, totalPrice: 0},
    {id: 'm2', name: 'One Plus 12R', price: 80000, image: '../../assets/Mobiles/Mobile 2.jpg', quantity: 1, totalPrice: 0},
    {id: 'm3', name: 'iPhone 15 Pro Max', price: 154000, image: '../../assets/Mobiles/Mobile 3.jpeg', quantity: 1, totalPrice: 0},
    {id: 'm4', name: 'Vivo V25', price: 60000, image: '../../assets/Mobiles/Mobile 4.jpeg', quantity: 1, totalPrice: 0}
  ];
  private groceries: Product[] = [
    {id: 'm1', name: 'Rice', price: 300, image: '../../assets/Groceries/Rice.jpeg', quantity: 1, totalPrice: 0},
    {id: 'm2', name: 'Wheat', price: 180, image: '../../assets/Groceries/Wheat.jpeg', quantity: 1, totalPrice: 0},
    {id: 'm3', name: 'Dals', price: 200, image: '../../assets/Groceries/Dal.jpeg', quantity: 1, totalPrice: 0},
    {id: 'm4', name: 'Maida', price: 100, image: '../../assets/Groceries/Maida.jpeg', quantity: 1, totalPrice: 0}
  ];
  private vegetables: Product[] = [
    {id: 'm1', name: 'Tomato', price: 50, image: '../../assets/Vegetables/Tomato.jpeg', quantity: 1, totalPrice: 0},
    {id: 'm2', name: 'Onion', price: 30, image: '../../assets/Vegetables/Onion.jpeg', quantity: 1, totalPrice: 0},
    {id: 'm3', name: 'Potato', price: 40, image: '../../assets/Vegetables/Potato.jpeg', quantity: 1, totalPrice: 0},
    {id: 'm4', name: 'Spinach', price: 20, image: '../../assets/Vegetables/Spinach.jpeg', quantity: 1, totalPrice: 0}
  ];
  private gymequips: Product[] = [
    {id: 'm1', name: 'Dumbell', price: 1500, image: '../../assets/GymEquips/Dumbell.jpeg', quantity: 1, totalPrice: 0},
    {id: 'm2', name: 'Bench', price: 1000, image: '../../assets/GymEquips/Bench.jpeg', quantity: 1, totalPrice: 0},
    {id: 'm3', name: 'Treadmill', price: 10000, image: '../../assets/GymEquips/Treadmill.jpeg', quantity: 1, totalPrice: 0},
    {id: 'm4', name: 'Gymnastic Ball', price: 900, image: '../../assets/GymEquips/Gymnastic Ball.jpeg', quantity: 1, totalPrice: 0}
  ];
  searchProduct(val: string): Observable<Product[]> {
    const allProducts: Product[] = [...this.shirts, ...this.mobiles, ...this.groceries, ...this.vegetables, ...this.gymequips];
    const filteredProducts: Product[] = allProducts.filter((product: Product) =>
      product.name.toLowerCase().includes(val.toLowerCase())
    );
    return of(filteredProducts);
  }
}
