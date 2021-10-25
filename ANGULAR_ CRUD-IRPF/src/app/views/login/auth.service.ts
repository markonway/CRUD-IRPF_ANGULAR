import { Injectable } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users.model';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { IrpfService } from 'app/components/irpf/irpf.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private userAuthenticated: boolean = false
  showMenuEmitter = new EventEmitter<boolean>()

  private API_USERS: string = 'http://localhost:3001/users';
  private user_list: Array<any> = []

  constructor(private router: Router, private http: HttpClient, private IrpfService: IrpfService) { }

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
        this.userAuthenticated = true
        this.showMenuEmitter.emit(true)
        this.router.navigate(['dashboard'])
      } else {
        this.IrpfService.showMessage("Credenciais de login Incorretas", false)
        this.showMenuEmitter.emit(false)
        this.userAuthenticated = false
      }
    })
  }

  userIsAuthenticated(){
    return this.userAuthenticated
  }

}
