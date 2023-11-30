import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {
    public signo = sessionStorage.getItem('signo');
    public name = sessionStorage.getItem('name');
    constructor(public router: Router){}

    ngOnInit(): void {
    }

    voltar() {
        this.router.navigate(['']);
    }
}
