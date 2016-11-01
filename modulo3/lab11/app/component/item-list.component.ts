import {Component, OnInit} from '@angular/core';
import { Item } from '../model/item';
import {ItemService} from "../service/item.service";
import {Router} from "@angular/router";

@Component({
    selector: 'item-list-app',
    templateUrl: 'app/templates/item-list.html',
    providers: [ItemService]
})
export class ItemListComponent implements OnInit {
    title: string = "Line Item";

    selected: Item;

    items: Item[];

    constructor(private router: Router, private ItemService: ItemService) {

    }

    getItems() {
        this.ItemService.getItems().then(items => this.items = items);
    }

    ngOnInit(): void {
        this.getItems();
    }

    onSelect(item: Item){
        this.selected = item;
    }

    gotoDetail(): void {
        this.router.navigate(['item/detail/', this.selected.linenumber]);
    }
}