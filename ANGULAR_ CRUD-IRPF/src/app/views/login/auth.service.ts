import { Injectable } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Users } from './users.model';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { IrpfService } from 'app/components/irpf/irpf.service';
import { CookieService } from 'ngx-cookie-service'
import { EventEmitter } from '@angular/core';
import { BASE_URL } from 'app/constant'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private API_USERS: string = `${BASE_URL}/users`;
  private user_list: Array<any> = []

  showMenuEmitter = new EventEmitter<boolean>()

  constructor(private router: Router, private http: HttpClient, private IrpfService: IrpfService, private cookieService: CookieService) { }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.API_USERS).map((data: Users[]) => data)
  }

  doLogin(user: User){
    this.getUsers().subscribe(e => {
      e.map(data => {
        this.user_list.push(data)
      })

      let userFound = false

      for(let data of this.user_list){
        if(data.username == user.username && data.password == user.password){
          userFound = true
          break
        }
      }
    
      if(userFound){
        this.cookieService.set("logged", "true")
        this.showMenuEmitter.emit(false)
        this.router.navigate(['dashboard'])
      } else {
        this.showMenuEmitter.emit(true)
        this.IrpfService.showMessage("Credenciais de login Incorretas", false)
      }
    })
  }

}
