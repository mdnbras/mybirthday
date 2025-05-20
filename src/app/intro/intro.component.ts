import {Component, OnInit} from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-intro',
  standalone: false,
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent implements OnInit {


  ngOnInit() {

  }

  PlayMusic() {
    var play = document.getElementById("music") as HTMLAudioElement;
    play.play();
  }

  comecar() {
    this.PlayMusic();
  }
}
