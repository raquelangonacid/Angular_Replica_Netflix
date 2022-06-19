import { Component, OnInit } from '@angular/core';
import { HeroInterface } from 'src/app/models/content.model';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
public heroInfo: HeroInterface;
  constructor() {
    this.heroInfo={
      title: "LOS 5 MÁS POPULARES",
      contents: [{
        number: "1",
        item:{
          src: "../../../../assets/images/Top10/4-lostinspace.webp",
          alt: "Lost in space"
        }
        },{
          number: "2",
          item:{
            src: "../../../../assets/images/Top10/3-titanes.webp",
            alt: "Titanes"
        }
        },{
          number: "3",
          item:{
            src: "../../../../assets/images/Top10/9-poder.webp",
            alt: "El poder del perro"
        }
        },{
          number: "4",
          item:{
            src: "../../../../assets/images/Top10/10-gooddoctor.webp",
            alt: "The good doctor"
        }
        },{
          number: "5",
          item:{
            src: "../../../../assets/images/Top10/7-blacklist.webp",
            alt: "Blacklist"
        }
        },
      
    ]   
    }

  }

  ngOnInit(): void {
  }

}
