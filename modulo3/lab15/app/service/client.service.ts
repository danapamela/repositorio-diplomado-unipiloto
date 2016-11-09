import {Injectable} from "@angular/core";
import {Client} from "../model/client";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ClientService {

    private clientsURI = 'http://localhost:3000/api/clients';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getClients(): Observable<Client[]> {
        return this.http.get(this.clientsURI)
            .map(response => response.json().data as Client[])
            .catch(this.handleError);
    }

    update(client: Client): Observable<Client> {
        const url = `${this.clientsURI}/${client.id}`;
        return this.http
            .put(url, JSON.stringify(client), {headers: this.headers})
            .map(() => client)
            .catch(this.handleError);
    }

    create(name: string): Observable<Client> {

        return this.http
            .post(this.clientsURI, JSON.stringify({name: name}), {headers: this.headers})
            .map(res => res.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.throw(error.message || error);
    }
}