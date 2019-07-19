import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';
import { Router } from '@angular/router';
import { Client } from './client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent implements OnInit {

  clients:Client[];

  constructor(private clientService:ClientService, private router:Router) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.clients=response;
  }
  /*
  deleteClient(client: Client): void {
    this.clientService.deleteClient(client)
      .subscribe( data => {
        this.clients = this.clients.filter(u => u !== client);
      })
  };
  updateClient(client: Client): void {
    this.router.navigate(["/updateclient",client.id]);
  };
  */
}
