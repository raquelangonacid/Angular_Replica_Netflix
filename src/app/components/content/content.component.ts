import { Component, Input, OnInit } from '@angular/core';
import { GroupsInterface } from 'src/app/models/content.model';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
@Input() public groupsInfo!: GroupsInterface;

  constructor() {
   
  
   }

  ngOnInit(): void {
  }

}
