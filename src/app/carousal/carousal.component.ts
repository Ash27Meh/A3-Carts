import { Component } from '@angular/core';
import {Subscription, interval} from 'rxjs';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class CarousalComponent {
  currentImageIndex : number = 0;
  totalImages:number = 4;
  imageChangeSubscription : Subscription = new Subscription();
  ngOnInit(){
    this.imageChangeSubscription = interval(5000).subscribe(() => {
      this.nextImage();
    })
  }
  nextImage(){
    this.currentImageIndex = (this.currentImageIndex + 1) % this.totalImages;
  }
  prevImage(){
    this.currentImageIndex = (this.currentImageIndex - 1 + this.totalImages) % this.totalImages;
  }
  ngOnDestroy(){
    this.imageChangeSubscription.unsubscribe();   
  }
}

