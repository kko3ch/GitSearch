import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../services/user-service.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  repos: Repository[];
  date = new Date();

  constructor(private userService: UserServiceService) {
    }

  ngOnInit(){
    this.userService.getUser()
    this.user = this.userService.user
    this.userService.getUserRepos()
    this.repos = this.userService.repos
    console.log(this.repos)
    console.log(this.user)
  }  

}
