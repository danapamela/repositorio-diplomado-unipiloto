import { Component, Input } from '@angular/core';
import { Client } from '../model/client';
import {ClientService} from "../service/client.service";

@Component({
    selector: 'client-detail',
    templateUrl: 'app/templates/client-detail.html'
})

export class ClientDetailComponent {
    @Input()
    client: Client;

    constructor(private clientService:ClientService){

    }

    save(): void {
        this.clientService.update(this.client)
            .subscribe(
                response => {console.log(response)},
                err => { console.log(err)});
    }
}

