import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { map, catchError } from "rxjs/operators";
import { IrpfService } from '../irpf/irpf.service'
import { BASE_URL } from 'app/constant'
import { Contribuinte } from '../contribuinte/contribuinte'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContribuinteService {

  constructor(private http: HttpClient, private IrpfService: IrpfService) { }

  private URL_CONTRIBUINTES = `${BASE_URL}/contribuintes`
  showContribuinteAdd = new EventEmitter<boolean>()
  showContribuinteEdit = new EventEmitter<boolean>()
  writeDataEmitter = new EventEmitter<any>()
  updateListEmitter = new EventEmitter<any>()

  save(data: Contribuinte):Promise<Contribuinte> {
    return this.http.post<Contribuinte>(this.URL_CONTRIBUINTES, data).pipe(
      map(() => {
        this.IrpfService.showMessage("Contribuinte adicionado!")
        this.showContribuinteAdd.emit(false)
        this.readContribuintesList()
      }),
      catchError((e) => this.IrpfService.errorHandler(e))
    ).toPromise();
  }

  remove(id: Number): Promise<any> {
    return this.http.delete<any>(`${this.URL_CONTRIBUINTES}/${id}`).pipe(
      map(() => {
        this.IrpfService.showMessage("Contribuinte removido!")
        this.readContribuintesList()
      }),
      catchError((e) => this.IrpfService.errorHandler(e))
    ).toPromise();
  }

  getContribuinte(id: Number): Promise<Contribuinte[]> {
    return this.http.get<Contribuinte[]>(`${this.URL_CONTRIBUINTES}/${id}`).pipe(
      map((obj) => this.writeDataEmitter.emit({dados: obj, id: id})),
      catchError((e) => this.IrpfService.errorHandler(e))
    ).toPromise();
  }

  readContribuintesList(): Promise<Contribuinte[]> {
    return this.http.get<Contribuinte[]>(`${this.URL_CONTRIBUINTES}`).pipe(
      map((obj) => this.updateListEmitter.emit(obj)),
      catchError((e) => this.IrpfService.errorHandler(e))
    ).toPromise();
  }

  SaveEdit(data: Contribuinte, id: number): Promise<Contribuinte> {
    return this.http.put<Contribuinte>(`${this.URL_CONTRIBUINTES}/${id}`, data).pipe(
      map(() => {
        this.IrpfService.showMessage("Contribuinte editado com Sucesso!")
        this.showContribuinteEdit.emit(false)
        this.readContribuintesList()
      }),
      catchError((e) => this.IrpfService.errorHandler(e))
    ).toPromise();
  }

}
