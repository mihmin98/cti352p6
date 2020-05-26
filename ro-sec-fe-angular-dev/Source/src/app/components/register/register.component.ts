import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';  


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.css'
  ]
})
export class RegisterComponent implements OnInit {
  title = 'REGISTER';

  user = new User();
  errorMsg;
  userId;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {
   }

  registerUser(user: User){

    //user.password = passwordHash.generate(user.password);
    this.userService.registerUser(user)
                .subscribe(result => this.router.navigate(['login']),
                           error => this.errorMsg = error.message);

  }

  ngOnInit(): void {
  }

}
