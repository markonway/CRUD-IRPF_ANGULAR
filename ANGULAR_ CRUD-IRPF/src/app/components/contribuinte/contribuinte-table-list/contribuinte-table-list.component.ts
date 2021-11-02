import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ContribuinteService } from '../contribuinte.service';
import { Contribuinte } from '../contribuinte'

@Component({
  selector: 'app-contribuinte-table-list',
  templateUrl: './contribuinte-table-list.component.html',
  styleUrls: ['./contribuinte-table-list.component.css']
})

export class ContribuinteTableListComponent implements OnInit {

  private list: Contribuinte[] = []

  showContribuinteAdd: boolean = false
  showContribuinteEdit: boolean = false

  constructor(private contribuinteService: ContribuinteService) { }

  dataSource = new MatTableDataSource(this.list);

  ngOnInit(): void {
    this.contribuinteService.readContribuintesList()

    this.contribuinteService.showContribuinteAdd.subscribe(
      (data) => {
        this.showContribuinteAdd = data
      }
    )

    this.contribuinteService.showContribuinteEdit.subscribe(
      (data) => {
        this.showContribuinteEdit = data
      }
    )

    this.contribuinteService.updateListEmitter.subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);
      }
    )
  }

  activeForm(value: boolean, type: string, id: number): void {
    if(type == "add"){
      this.showContribuinteAdd = value
    } else if(type == "edit"){
      this.showContribuinteEdit = value
      this.contribuinteService.getContribuinte(id)
    }
  }

  remove(id: number): void {
    this.contribuinteService.remove(id)
  }

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'codigoAcesso', 'senha', 'edit', 'remove', 'button'];
}
