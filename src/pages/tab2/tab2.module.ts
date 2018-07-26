import { IonicImageLoader } from 'ionic-image-loader';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tab2Page } from './tab2';

@NgModule({
  declarations: [
    Tab2Page,
  ],
  imports: [
    IonicPageModule.forChild(Tab2Page),
    IonicImageLoader.forRoot()

  ],
})
export class Tab2PageModule {}
