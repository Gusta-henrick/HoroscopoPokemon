import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DescobrirSignoService {

  constructor() { }

  public getSigno(day:number, month:number) {
    let signo = '';
    
    switch (month) {
        case 1: // Janeiro
            signo = day <= 20 ? 'NOCTOWL' : 'LAPRAS';
            break;
        case 2: // Fevereiro
            signo = day <= 19 ? 'LAPRAS' : 'GYARADOS';
            break;
        case 3: // Março
            signo = day <= 20 ? 'GYARADOS' : 'CHARIZARD';
            break;
        case 4: // Abril
            signo = day <= 20 ? 'CHARIZARD' : 'MILTANK';
            break;
        case 5: // Maio
            signo = day <= 20 ? 'MILTANK' : 'DODUO';
            break;
        case 6: // Junho
            signo = day <= 20 ? 'DODUO' : 'JIGGLYPUFF';
            break;
        case 7: // Julho
            signo = day <= 21 ? 'JIGGLYPUFF' : 'ENTEI';
            break;
        case 8: // Agosto
            signo = day <= 22 ? 'ENTEI' : 'GARDEVOIR';
            break;
        case 9: // Setembro
            signo = day <= 22 ? 'GARDEVOIR' : 'CHANSEY';
            break;
        case 10: // Outubro
            signo = day <= 22 ? 'CHANSEY' : 'DRAPION';
            break;
        case 11: // Novembro
            signo = day <= 21 ? 'DRAPION' : 'HOOH';
            break;
        case 12: // Dezembro
            signo = day <= 21 ? 'HOOH' : 'NOCTOWL';
            break;
        default:
            signo = 'Mês inválido';
            break;
    }
    
    return signo;
  }
}

