import {Component, OnInit} from '@angular/core';
import { Sale } from '../model/sale';
import {SaleService} from "../service/sale.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'sale-detail-app',
    templateUrl: 'app/templates/sale-detail.html',
    providers: [SaleService]
})

export class SaleDetailComponent implements OnInit {

    sale: Sale;
    constructor(
        private saleService: SaleService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id =+params['id'];
            this.saleService.getSale(id)
                .then(sale => this.sale = sale);
        });
    }
}