import { Firebase } from '@ionic-native/firebase';
import { Sim } from '@ionic-native/sim';
import { FireProvider } from './../providers/fire/fire';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { HeaderColor } from '@ionic-native/header-color';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ImageLoaderConfig } from '../../node_modules/ionic-image-loader';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  logado: boolean = false;
  user: any;
  rootPage: any = 'HomePage';

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen, 
    public headerColor: HeaderColor, 
    public screenOrientation: ScreenOrientation,
    public sim: Sim,
    public imageLoaderConfig: ImageLoaderConfig,
    public firebaseNativo: Firebase,
    public fire: FireProvider
  ) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Cardápio', component: 'HomePage' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      console.log(`É cordova? ${this.platform.is('cordova')}`);
      this.imageLoaderConfig.setImageReturnType('base64');
      this.imageLoaderConfig.enableDebugMode();
      this.imageLoaderConfig.setFallbackUrl('./assets/img/no-photo.jpg');
      if(this.platform.is('cordova')){
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);      
        this.headerColor.tint('#e65100');      
        this.statusBar.styleDefault();
        this.splashScreen.hide();
        this.firebaseNativo.subscribe('teste');
        this.fire.ouvirNotificacoes()
          .subscribe(notificacao => {
            console.log(notificacao);
            alert(`Atenção! ${notificacao.mensagem}`);
            this.nav.push('testecache')
          })
        this.sim.getSimInfo()
        .then(info => { 
          console.log(info);
        })
      }
      });
      
  }

  login(){
    this.fire.signInWithFacebook();
  }

  openLocalizacao(){
    this.nav.push('LocalizacaoPage');
  }

  openCarrinho(){
    this.nav.push('CarrinhoPage');
  }
  openFotos(){
    this.nav.push('testecache');
  }

  openInfo(){
    this.nav.push('InformacoesPage');
  }

  logout(){
    this.fire.signOut();
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
