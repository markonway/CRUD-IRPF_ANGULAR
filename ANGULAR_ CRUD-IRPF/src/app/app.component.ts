import { Component} from '@angular/core';
import { AuthService } from './views/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  showMenu: boolean = false

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.authService.showMenuEmitter.subscribe(
      show => this.showMenu = show
    )
  }
}
