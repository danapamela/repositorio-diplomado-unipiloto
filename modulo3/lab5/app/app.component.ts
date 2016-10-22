import { Component } from '@angular/core';

 export class ride {
    airport: string;
    app: string;
    units: number ;
    features: string;
    default: string;
    
 }

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/ride.html'
})
export class AppComponent {

    title: string = "carrera";
    selected: ride;
    products: ride[] = ;

    onSelect(product: Product) {
        this.selected = product;
    }
}

