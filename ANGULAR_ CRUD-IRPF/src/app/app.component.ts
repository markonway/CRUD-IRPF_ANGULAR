import { Component} from '@angular/core';
import { CookieService } from 'ngx-cookie-service'
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from './views/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  showMenu: boolean

  constructor(private router: Router, private cookieService: CookieService, private location: Location, private authService: AuthService){}

  ngOnInit(): void {

    this.authService.showMenuEmitter.subscribe(
      show => this.showMenu = show
    )

    if(this.cookieService.get("logged") == "true"){
      if(this.location.path() === "/login"){
        this.router.navigate(['dashboard'])
      }
      this.showMenu = false
    } else {
      this.showMenu = true
    }
  }
}
