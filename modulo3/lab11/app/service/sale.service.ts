import {Injectable} from "@angular/core";
import {SALES} from "../mock/sale-mock";
import {Sale} from "../model/sale";

@Injectable()
export class SaleService{
    getSales(): Promise<Sale[]>{
        return Promise.resolve(SALES);
    }


    getSaleCustomerDetail(id: number): Promise<Sale[]>{
        return this.getSales()
            .then(sales => {
                return sales.filter(obj => {
                    if (obj.customer.id === id) {
                        return true;
                    }
                });
            });
    }
}