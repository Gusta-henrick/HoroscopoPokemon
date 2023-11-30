import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-button-sound',
  templateUrl: './button-sound.component.html',
  styleUrls: ['./button-sound.component.scss']
})
export class ButtonSoundComponent implements OnInit {
  public checked?: boolean;
  public audio = new Audio("../assets/soundtrack.mp3");

  ngOnInit(): void {
    this.checked = false;
  }


  public alternarSom() {
    this.checked = !this.checked;

    if(this.checked){
      this.audio.play();
    }
    else {
      this.audio.pause();
    }
    console.log(this.checked)
  }

}
