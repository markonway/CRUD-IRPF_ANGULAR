import { Component, OnInit } from '@angular/core';
import { ContribuinteService } from '../contribuinte.service';
import { Contribuinte } from '../contribuinte'

@Component({
  selector: 'app-contribuinte-add',
  templateUrl: './contribuinte-add.component.html',
  styleUrls: ['./contribuinte-add.component.css']
})
export class ContribuinteAddComponent implements OnInit {

  constructor(private contribuinteService: ContribuinteService) { }

  private contribuinte: Contribuinte = new Contribuinte()

  ngOnInit(): void {
    
  }

  cancel(): void {
    this.contribuinteService.showContribuinteAdd.emit(false)
  }

  save(): void {
    this.contribuinteService.save(this.contribuinte)
  }

}
