import { FireProvider } from './../../providers/fire/fire';
import { UtilProvider } from './../../providers/util/util';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform, App, Loading, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {

  sanduiches: any[] = [];
  loading: Loading
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController, 
    public platfom: Platform,
    public util: UtilProvider,
    public app: App,
    public fire: FireProvider,
    public loadingCtrl: LoadingController
  ) {

    this.fire.getSanduiches()
      .subscribe(sanduiches => {
        console.log(this.fire.snapshotParaValue(sanduiches));
        this.sanduiches = this.fire.snapshotParaValue(sanduiches);
        if(this.sanduiches.length > 0)
          this.loading.dismiss();
      })

    /*this.sanduiches = [
      {titulo: "Flash", preco: 9, descricao: "Hambúrguer, queijo, presunto, ovo e alface", imagem: "https://firebasestorage.googleapis.com/v0/b/hero-burguer.appspot.com/o/imgs%2Fsanduiches%2Fflash.jpg?alt=media&token=6dcb2896-9e72-4073-8ac4-11f07832a933", thumbnail: 'http://www.deviante.com.br/wp-content/uploads/2016/02/deadpool-001.jpg'},
      {titulo: "Deadpool", preco: 9.5, descricao: "Hambúrguer, bacon, queijo, presunto e salada", imagem: "assets/img/sanduiches/deadpool.jpg", thumbnail: 'assets/img/sanduiches/deadpool-thumbnail.jpg'},
      {titulo: "Supegirl", preco: 9.5, descricao: "Cheddar, frango, queijo, presunto, bacon e salada", imagem: "http://cdn.warnerestrenos.com/res/series/supergirl2017/header/header_minisite_big.jpg", thumbnail: 'http://cdn.warnerestrenos.com/res/series/supergirl2017/header/header_minisite_big.jpg'},
      {titulo: "Capitão América", preco: 8, descricao: "Queijo, presunto, ovo e salada", imagem: "https://firebasestorage.googleapis.com/v0/b/hero-burguer.appspot.com/o/imgs%2Fsanduiches%2Fcapitao-america.jpg?alt=media&token=9b9f55ac-e502-4ae6-abdf-6d3deca50b15", thumbnail: 'https://firebasestorage.googleapis.com/v0/b/hero-burguer.appspot.com/o/imgs%2Fsanduiches%2Fcapitao-america-thumbnail.jpg?alt=media&token=6ba07bdc-d1b8-420f-89e9-d2e104b73bdb'},
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
    this.loading = this.loadingCtrl.create({
      content: 'Carregando...'
    })
    this.loading.present();
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
