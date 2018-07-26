import { CacheImgModule } from './../../global/img-cache/img-cache.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestecachePage } from './testecache';

@NgModule({
  declarations: [
    TestecachePage,
  ],
  imports: [
    IonicPageModule.forChild(TestecachePage),
    CacheImgModule
  ],
})
export class TestecachePageModule {}
