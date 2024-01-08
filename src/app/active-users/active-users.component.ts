import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user_service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})

export class ActiveUsersComponent implements OnInit{
  users: string[];
  constructor(public userService : UserService){}
  ngOnInit() {
    this.users = this.userService.activeUsers;
  }
  onSetToInactive(user) {
    this.userService.setInActiveUser(user);
    // this.users = this.userService.getActiveUsers();
  }
}