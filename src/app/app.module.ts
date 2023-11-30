import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './shared/cabecalho/cabecalho.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RodapeComponent } from './shared/rodape/rodape.component';
import { ParticulasComponent } from './shared/particulas/particulas.component';
import { ButtonSoundComponent } from './shared/button-sound/button-sound.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ResultadoComponent } from './resultado/resultado.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    TelaInicialComponent,
    RodapeComponent,
    ParticulasComponent,
    ButtonSoundComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
