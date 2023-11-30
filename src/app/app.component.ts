import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PokeHoroscopo';
  constructor(public translate: TranslateService) {
    translate.addLangs(['pt']);
    translate.setDefaultLang('pt');
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
