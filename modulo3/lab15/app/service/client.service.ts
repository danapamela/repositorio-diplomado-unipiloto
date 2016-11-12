import {Injectable} from "@angular/core";
import {Client} from "../model/client";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ClientService {

    private clientsURI = 'http://138.68.0.83:7070';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getClients(): Observable<Client[]> {
        return this.http.get(`${this.clientsURI}/api/v1/user/list`)
            .map(response => response.json() as Client[])
            .catch(this.handleError);
    }

    update(client: Client): Observable<Client> {
        const url = `${this.clientsURI}/api/v1/user/update/${client.id}`;
        return this.http
            .put(url, JSON.stringify(client), {headers: this.headers})
            .map(() => client)
            .catch(this.handleError);
    }

    create(firstname: string): Observable<Client> {

        return this.http
            .post(`${this.clientsURI}/api/v1/user/sign-up`, JSON.stringify({firstname: firstname}), {headers: this.headers})
            .map(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.throw(error.message || error);
    }
}