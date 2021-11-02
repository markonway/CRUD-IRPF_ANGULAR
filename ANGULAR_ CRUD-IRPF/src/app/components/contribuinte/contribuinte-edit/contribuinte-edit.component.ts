import { Component, OnInit } from '@angular/core';
import { Contribuinte } from '../contribuinte'
import { ContribuinteService } from '../contribuinte.service';

@Component({
  selector: 'app-contribuinte-edit',
  templateUrl: './contribuinte-edit.component.html',
  styleUrls: ['./contribuinte-edit.component.css']
})
export class ContribuinteEditComponent implements OnInit {

  constructor(private contribuinteService: ContribuinteService) { }

  private data: any = {}
  private id: number
  private contribuinte: Contribuinte = new Contribuinte()

  ngOnInit(): void {
    this.contribuinteService.writeDataEmitter.subscribe(
      (data) => {
        this.data = data.dados
        this.id = data.id
      }
    )
  }

  cancel(): void {
    this.contribuinteService.showContribuinteEdit.emit(false)
  }

  save(): void {

    checkValues(this.contribuinte, this.data)
    this.contribuinteService.SaveEdit(this.contribuinte, this.id)

    function checkValues(contribuinte, data){
      let nome = contribuinte.nome === undefined ? data.nome : contribuinte.nome
      let cpf = contribuinte.cpf === undefined ? data.cpf : contribuinte.cpf
      let codigoAcesso = contribuinte.codigoAcesso === undefined ? data.codigoAcesso : contribuinte.codigoAcesso
      let senha = contribuinte.senha === undefined ? data.senha : contribuinte.senha

      contribuinte.nome = nome
      contribuinte.cpf = cpf
      contribuinte.codigoAcesso = codigoAcesso
      contribuinte.senha = senha
    }
  }

}
