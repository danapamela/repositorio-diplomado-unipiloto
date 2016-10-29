import {Component, OnInit} from '@angular/core';
import {Sale} from '../model/sale';
import {SaleService} from "../service/sale.service";
import {Router} from "@angular/router";

@Component({
    selector: 'sale-list-app',
    templateUrl: 'app/templates/sale-list.html',
    providers: [SaleService]
})
export class SaleListComponent implements OnInit {
    title: string = "Sales Invoice";

    selected: Sale;

    sales: Sale[];

    constructor(private router: Router, private saleService: SaleService) {

    }

    getSales() {
        this.saleService.getSales().then(sales => this.sales = sales);
    }

    ngOnInit(): void {
        this.getSales();
    }

    onSelect(sale: Sale){
        this.selected = sale;
    }

    gotoDetail(): void {
        this.router.navigate(['sale/detail/', this.selected.id]);
    }
}
