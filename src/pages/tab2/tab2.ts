import { UtilProvider } from './../../providers/util/util';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform, App } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {

  sanduiches: any[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController, 
    public platfom: Platform,
    public util: UtilProvider,
    public app: App
  ) {
    console.log(this.platfom.is('cordova'));
    this.sanduiches = [
      {titulo: "Flash", preco: 9, descricao: "Hambúrguer, queijo, presunto, ovo e alface", imagem: "https://firebasestorage.googleapis.com/v0/b/hero-burguer.appspot.com/o/imgs%2Fsanduiches%2Fflash.jpg?alt=media&token=6dcb2896-9e72-4073-8ac4-11f07832a933", thumbnail: 'https://firebasestorage.googleapis.com/v0/b/hero-burguer.appspot.com/o/imgs%2Fsanduiches%2Fflash-thumbnail.jpg?alt=media&token=b3a51536-14f8-4f88-8cbe-6a0f7fc26a6b'},
      {titulo: "Deadpool", preco: 9.5, descricao: "Hambúrguer, bacon, queijo, presunto e salada", imagem: "assets/img/sanduiches/deadpool.jpg", thumbnail: 'assets/img/sanduiches/deadpool-thumbnail.jpg'},
      {titulo: "Supegirl", preco: 9.5, descricao: "Cheddar, frango, queijo, presunto, bacon e salada", imagem: "assets/img/sanduiches/supergirl.jpg", thumbnail: 'assets/img/sanduiches/supergirl-thumbnail.jpg'},
      {titulo: "Capitão América", preco: 8, descricao: "Queijo, presunto, ovo e salada", imagem: "assets/img/sanduiches/capitao-america.jpg", thumbnail: 'assets/img/sanduiches/capitao-americva-thumbnail.jpg'},
      {titulo: "Viúva Negra", preco: 12.5, descricao: "Filé de frango, Presunto, queijo, bacon, ovo e salada", imagem: "assets/img/sanduiches/viuva-negra.jpg", thumbnail: 'assets/img/sanduiches/viuva-negra-thumbnail.jpg'},
      {titulo: "Mulher Maravilha", preco: 12.5, descricao: "Filé de alcatra, Presunto, queijo, bacon, ovo e salada", imagem: "assets/img/sanduiches/mulher-maravilha.jpg", thumbnail: 'assets/img/sanduiches/mulher-maravilha-thumbnail.jpg'},
      {titulo: "Super Homem", preco: 12.5, descricao: "Filé de alcatra, filé de frango, Presunto, queijo, bacon, ovo e salada", imagem: "assets/img/sanduiches/superman.jpg", thumbnail: 'assets/img/sanduiches/superman-thumbnail.jpg'},
      {titulo: "Hulk", preco: 15, descricao: "Filé de frango, Presunto, queijo, bacon, ovo e salada", imagem: "assets/img/sanduiches/hulk.jpg", thumbnail: 'assets/img/sanduiches/hulk-thumbnail.jpg'},
      {titulo: "Homem Formiga", preco: 8.5, descricao: "Hambúrguer, queijo e salada", imagem: "assets/img/sanduiches/homem-formiga.jpg", thumbnail: 'assets/img/sanduiches/homem-formiga-thumbnail.jpg'},
      {titulo: "Lanterna Verde", preco: 10, descricao: "Frango desfiado, queijo coalho, milho verde, cenoura e presunto", imagem: "assets/img/sanduiches/lanterna-verde.jpg", thumbnail: 'assets/img/sanduiches/lanterna-verde-thumbnail.jpg'},
      {titulo: "Homem Aranha", preco: 10, descricao: "Calabresa, queijo, presunto, ovo e salada", imagem: "assets/img/sanduiches/spiderman.jpg", thumbnail: 'assets/img/sanduiches/spiderman-thumbnail.jpg'}
    ]

    //this.sanduiches[0].imagem = window.Ionic.normalize
    /*this.sanduiches.map(sanduiche => {
      if(this.platfom.is('cordova'))
        sanduiche['linkImagem'] = 'assets/img/sanduiches/'+sanduiche.imagem;
      else
        sanduiche['linkImagem'] = 'assets/img/sanduiches/'+sanduiche.imagem;
    })*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
  }

  goToSanduiche(sanduiche){
    console.log(sanduiche)
    this.app.getRootNav().push('ModalItemDetailPage', {item: sanduiche, modal: false})
    /* let modal = this.modalCtrl.create('ModalItemDetailPage',{sanduiche: sanduiche});
    modal.present(); */
  }

  onImageLoad(event) {
    console.log('image ready: ', event);
  }
    
}
