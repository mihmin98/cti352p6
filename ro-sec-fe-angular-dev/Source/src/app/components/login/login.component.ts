import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ]
})
export class LoginComponent implements OnInit {
  title = 'USER LOGIN';

  user = new User();
  errorMsg;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {

   }

  loginUser(email: string, password: string){
    this.userService.loginUser(email, password)
                .subscribe(result => this.router.navigate(['transactions-list']),
                           error => this.errorMsg = error.message);

  }

  ngOnInit(): void {
  }

}
