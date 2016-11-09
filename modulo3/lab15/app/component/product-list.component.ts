import { Component, Input } from '@angular/core';
import { Product } from '../model/product';
import {ProductService} from "../service/product.service";
import {Router} from "@angular/router";

@Component({
    selector: 'product-list-app',
    templateUrl: 'app/templates/product-list.html',
    providers: [ProductService]
})
export class ProductListComponent {
    @input()

	title: string = "Productos";

    selected: Product;

    products: Product[];

    constructor(private router: Router, private productService: ProductService) {

    }

    getProducts() {
        this.productService.getProducts()
            .subscribe(
            products => {
                this.products = products;
            },

            error => {
                console.log(error);
            }
        );
    }

    ngOnInit(): void {
        this.getProducts();
    }

    onSelect(product: Product){
        this.selected = product;
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.productService.create(name)
            .subscribe(product => {
                this.products.push(product);
                this.selected = null;
            });
    }
}