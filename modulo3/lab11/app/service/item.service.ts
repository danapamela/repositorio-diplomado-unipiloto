import {Injectable} from "@angular/core";
import {ITEMS} from "../mock/item-mock";
import {Item} from "../model/item";

@Injectable()
export class ItemService{
    getItems(): Promise<Item[]>{
        return Promise.resolve(ITEMS);
    }

    getItem(id: number): Promise<Item> {
        return this.getItems()
            .then(items => items.find(item => item.id === id));
    }
}