import {Component, OnInit} from '@angular/core';
import { Customer } from '../model/customer';
import {CustomerService} from "../service/customer.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'customer-detail-app',
    templateUrl: 'app/templates/customer-detail.html',
    providers: [CustomerService]
})

export class CustomerDetailComponent implements OnInit {

    customer: Customer;
    constructor(
        private CustomerService: CustomerService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id =+params['id'];
            this.CustomerService.getCustomer(id)
                .then(customer => this.customer = customer);
        });
    }
}