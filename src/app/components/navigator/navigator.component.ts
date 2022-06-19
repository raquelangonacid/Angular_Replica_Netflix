import { Component, OnInit } from '@angular/core';
import { NavigatorInterface } from 'src/app/models/content.model';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
public navigatorInfo: NavigatorInterface;
  constructor() { 
    this.navigatorInfo = {
      logo: {
        src: "../../../../assets/images/LOGO/N.png",
        alt: "Netflix Logo"
      },
      links: [{
        text: "INICIO",
        link: "#inicio"
      },
      {
        text: "BUSCAR",
        link: "#buscar"
      }]
    }
  }
  

  ngOnInit(): void {
  }

}
