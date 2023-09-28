import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  photoCover:string= ""
  contentTitle:string= ""
  contentDescription:string= ""
  private id: string | null= "0"

  constructor (
    private raute: ActivatedRoute
  ) {}

  ngOnInit(): void{
    this.raute.paramMap.subscribe( value=>
     this.id = value.get("id"))

     this.setValuesToComponent(this.id)
  }

  setValuesToComponent(Id:string |null){
   const result = dataFake.filter(article => article.id == Id)[0]

   this.contentTitle = result.titel
   this.contentDescription = result.description
   this.photoCover = result.photoCover
  }

}
