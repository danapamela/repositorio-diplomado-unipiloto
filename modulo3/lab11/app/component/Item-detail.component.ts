import {Component, OnInit} from '@angular/core';
import { Item } from '../model/item';
import {ItemService} from "../service/item.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'item-detail-app',
    templateUrl: 'app/templates/item-detail.html',
    providers: [ItemService]
})

export class ItemDetailComponent implements OnInit {

    item: Item;
    constructor(
        private ItemService: ItemService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let linenumber =+params['linenumber'];
            this.ItemService.getItem(linenumber)
                .then(item => this.item = item);
        });
    }
}