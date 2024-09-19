import { Component } from '@angular/core';
import {User} from "../Shared/Modules/user";

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  title= 'User Generation';

  user1 : User = {id: 1, firstName: "Matt", lastName: "Haug", department: "Programming", isAdmin: false};
  user2 : User = {id: 2, firstName: "Darren", lastName: "Takakki", department: "Web Dev", isAdmin: true};
  //Can declare values either way
  userList: User[] = //any[] would have worked as well
    [this.user1,this.user2,
      {id: 3, firstName: "John", lastName: "Doe", department: "Programming", isAdmin: false},
      {id: 4, firstName: "Jane", lastName: "Doe", department: "Programming", isAdmin:true}
    ]
//Function that gets called from our onclick. Takes in an
  //arguement ofa variable called user, which is type User and returns void
  toggleAdminStatus(user: User): void {
    user.isAdmin = !user.isAdmin;
  }



}
