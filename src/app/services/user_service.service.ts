// import { Injectable, Inject } from "@angular/core";

// @Injectable({
//     "providedIn" : 'root'
// })
export class UserService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];
    setActiveUsers(user){
        console.log(user)
        this.activeUsers.push(this.inactiveUsers[user]);
        this.inactiveUsers.splice(user, 1);
    }

    setInActiveUser(user){
        this.inactiveUsers.push(this.activeUsers[user]);
        this.activeUsers.splice(user, 1);
    }
    // getActiveUsers(){
    //    return this.activeUsers;
    // }
    // getInActiveUser(){
    //   return  this.inactiveUsers;
    // }
}