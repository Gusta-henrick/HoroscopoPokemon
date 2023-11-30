import { DescobrirSignoService } from './../services/descobrir-signo.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.scss']
})
export class TelaInicialComponent {

  constructor (public descobrirSignoService: DescobrirSignoService, public router: Router) {
    
  }
  pokemonForm = new FormGroup({
    name: new FormControl(''),
    date: new FormControl(''),
  });

  async descobrir() {

    let date = await this.pokemonForm.value.date;
    const name =  String(await this.pokemonForm.value.name);
    let dateSplit = await date?.split('-');
    if(dateSplit != undefined){
      const day = parseInt(dateSplit[2]);
      const month = parseInt(dateSplit[1]);
      const signo = this.descobrirSignoService.getSigno(day, month);
      sessionStorage.setItem('signo', signo);
      sessionStorage.setItem('name', name);
      this.router.navigate(['/resultado']);
    }
  }
}
