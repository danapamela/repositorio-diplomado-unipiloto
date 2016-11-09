import { Component, Input } from '@angular/core';
import { Client } from '../model/client';
import {ClientService} from "../service/client.service";
import {Router} from "@angular/router";

@Component({
    selector: 'client-list-app',
    templateUrl: 'app/templates/client-list.html',
    providers: [ClientService]
})
export class ClientListComponent {
    @Input()

	title: string = "clientes";

    selected: Client;

   clients: Client[];

    constructor(private router: Router, private clientService: ClientService) {

    }

    getClients() {
        this.clientService.getClients()
            .subscribe(
            clients => {
                this.clients = clients;
            },

            error => {
                console.log(error);
            }
        );
    }

    ngOnInit(): void {
        this.getClients();
    }

    onSelect(client: Client){
        this.selected = client;
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.clientService.create(name)
            .subscribe(client => {
                this.clients.push(client);
                this.selected = null;
            });
    }
}