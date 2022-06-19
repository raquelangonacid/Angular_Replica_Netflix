import { Component } from '@angular/core';
import { GroupsInterface } from './models/content.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
public comediaInfo: GroupsInterface = {

    title: "COMEDIA",
    images: [{
      src:"../../../../assets/images/Comedia/cazafantasmas.webp",
      alt:"Cazafantasmas"
    },{
      src:"../../../../assets/images/Comedia/regresofuturo.webp",
      alt:"Regreso al futuro"
    },{
      src:"../../../../assets/images/Comedia/casi300.webp",
      alt:"Casi 300"
    },{
      src:"../../../../assets/images/Comedia/laterminal.webp",
      alt:"La terminal"
    },{
      src:"../../../../assets/images/Comedia/ted2.webp",
      alt:"Ted 2"
    },{
      src:"../../../../assets/images/Comedia/juerga.webp",
      alt:"Juerga hasta el fin"
    },
  ]
  }

  public accionInfo: GroupsInterface = {

    title: "ACCIÓN",
    images: [{
      src:"../../../../assets/images/Accion/renacido.webp",
      alt:"El renacido"
    },{
      src:"../../../../assets/images/Accion/johnwick2.webp",
      alt:"John Wick 2"
    },{
      src:"../../../../assets/images/Accion/heat.webp",
      alt:"Heat"
    },{
      src:"../../../../assets/images/Accion/elprotector.webp",
      alt:"El protector"
    },{
      src:"../../../../assets/images/Accion/terminator2.webp",
      alt:"Terminator 2"
    },{
      src:"../../../../assets/images/Accion/jackreacher.webp",
      alt:"Jack Reacher"
    },
  ]
  }

  public dramaInfo: GroupsInterface = {

    title: "DRAMA",
    images: [{
      src:"../../../../assets/images/Drama/arrival.webp",
      alt:"La llegada"
    },{
      src:"../../../../assets/images/Drama/corazones.webp",
      alt:"Corazones de acero"
    },{
      src:"../../../../assets/images/Drama/millaverde.webp",
      alt:"La milla verde"
    },{
      src:"../../../../assets/images/Drama/naufrago.webp",
      alt:"Náufrago"
    },{
      src:"../../../../assets/images/Drama/schindler.webp",
      alt:"La lista de Schindler"
    },{
      src:"../../../../assets/images/Drama/scarface.webp",
      alt:"El precio del poder"
    },
  ]
  }

  public scifiInfo: GroupsInterface = {

    title: "SCI-FI",
    images: [{
      src:"../../../../assets/images/Sci-fi/startrek.webp",
      alt:"Star Trek"
    },{
      src:"../../../../assets/images/Sci-fi/passengers.webp",
      alt:"Passengers"
    },{
      src:"../../../../assets/images/Sci-fi/deepimpact.webp",
      alt:"Deep impact"
    },{
      src:"../../../../assets/images/Sci-fi/gits.webp",
      alt:"Ghost in the shell"
    },{
      src:"../../../../assets/images/Sci-fi/jumper.webp",
      alt:"Jumper"
    },{
      src:"../../../../assets/images/Sci-fi/12monos.webp",
      alt:"12 monos"
    },
  ]
  }
}
