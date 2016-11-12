import {InMemoryDbService} from "angular2-in-memory-web-api";

export class InMemoryClientService implements InMemoryDbService {
    createDb() {
        let clients = [
            {
                id: 1,
                firstname: "Jeffrey Rolando Gomez Pulido",
                age: 36     
            },
            {
                id: 2,
                firstname: "Gina Paola Duarte Samaca",
                age: 20
            },
            {
                id: 3,   
                firstname: "Nicolas Valencia Asttudillo",
                age: 27
            }
        ];

        return {clients};
    }

}