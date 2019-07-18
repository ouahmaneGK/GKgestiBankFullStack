import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';
import { User } from '../../../user';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-user-by-id',
  templateUrl: './user-by-id.component.html',
  styleUrls: ['./user-by-id.component.css']
})

export class UserByIdComponent implements OnInit {

  
  currentUser:  User ;

  constructor( private route: ActivatedRoute, private  userservice: UserService) {
    this.currentUser= new User(0,'','','','');
   }

  ngOnInit(): void {
    
    console.log(this.route.snapshot.params.id);
    console.log(this.currentUser);
    this.route.queryParams.subscribe(queryParams =>{
      console.log(queryParams);
    });

    this.route.params.subscribe(routeParams => {
      console.log(routeParams.id);

      this.currentUser = this.userservice.getUsersById(routeParams.id);
    })

  }

  
}
