import { IonicImageLoader } from 'ionic-image-loader';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestecachePage } from './testecache';

@NgModule({
  declarations: [
    TestecachePage,
  ],
  imports: [
    IonicPageModule.forChild(TestecachePage),
    IonicImageLoader.forRoot()
  ],
})
export class TestecachePageModule {}
