import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CrudPage} from "../crud/crud";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  searchQuery: string = '';
  items: string[];
  
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  openSobre(){
    this.navCtrl.push(CrudPage, {}, {animate: true} );    
  }

  initializeItems() {
    this.items = [
      'exemplo', 
      'exemplo', 
      'exemplo', 
      'exemplo', 
      'exemplo', 
      'exemplo', 
      'exemplo', 
      'exemplo', 
      'exemplo', 
      'exemplo', 
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}