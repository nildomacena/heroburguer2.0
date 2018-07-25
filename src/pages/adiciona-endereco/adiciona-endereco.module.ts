import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionaEnderecoPage } from './adiciona-endereco';

@NgModule({
  declarations: [
    AdicionaEnderecoPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionaEnderecoPage),
  ],
})
export class AdicionaEnderecoPageModule {}
