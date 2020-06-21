import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../user';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  user: User
  username: string
  constructor(private userService: UserServiceService) {
   }

   findUser(){
     this.userService.upDateProfile(this.username)
     this.userService.getUser()
     this.user = this.userService.user
   }

  ngOnInit(): void {
  }

}
