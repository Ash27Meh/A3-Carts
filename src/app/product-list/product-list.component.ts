import { Component } from '@angular/core';
import { ProductService } from '../services/Product/product.service';
import { CartService, Product } from '../services/carts/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  shirts:Product[] = [];
  mobiles:Product[] = [];
  groceries:Product[] = [];
  vegetables:Product[] = [];
  gymequips:Product[] = [];
  constructor(private router: Router, private productservice : ProductService, private cartservice : CartService){
    this.productservice.getShirts().subscribe((shirts:Product[])=>{
      this.shirts = shirts;
    });
    this.productservice.getMobiles().subscribe((mobiles:Product[])=>{
      this.mobiles = mobiles;
    });
    this.productservice.getGroceries().subscribe((groceries:Product[])=> {
      this.groceries = groceries;
    });
    this.productservice.getVegetables().subscribe((vegetables:Product[])=> {
      this.vegetables = vegetables;
    });
    this.productservice.getGymequips().subscribe((gymequips:Product[])=> {
      this.gymequips = gymequips;
    });
  }
  addToCart(product: Product): void {
    if (localStorage.getItem('IsAuthorized')) {
      this.cartservice.addToCart(product);
      alert("Item added to Cart..")
    } else {
      alert("Login to continue ...");
      this.router.navigate(['/login']);
    }
  }
  // navigateToProductDetails(product: Product):void {
  //   this.productservice.productDetail(product);
  //   this.router.navigate(['/dashboard/details']);
  // }
}
