import { Component, OnInit} from '@angular/core';
import { UserService } from '../services/user_service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})

export class InactiveUsersComponent implements OnInit{
  users: string[];
  constructor(public userService : UserService){}
  ngOnInit() {
    this.users = this.userService.inactiveUsers ;
  }
  onSetToActive(user) {
    this.userService.setActiveUsers(user);
    // this.users = this.userService.getInActiveUser();
  }
}