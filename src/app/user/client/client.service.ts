import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  constructor(private httpClient:HttpClient) { }

  getClients() {
    return this.httpClient.get<Client[]>('http://localhost:8080/SpringWebService/clients/get/all');
  }
/*
  findClientById(id : number)
  {
    return this.httpClient.get<Client>('http://localhost:8080/SpringWebService/clients/client'+ "/"+id);
  }
  public deleteClient(client) {
    return this.httpClient.delete<Client>("http://localhost:8080/SpringWebService/clients/delete" + "/"+ client.id);
  }

  public createClient(client) {
    return this.httpClient.post<Client>("http://localhost:8080/SpringWebService/clients/create", client);
  }
  public updateClient(Client) {
    return this.httpClient.put<Client>("http://localhost:8080/SpringWebService/clients/update", client);
  }
  */

}


