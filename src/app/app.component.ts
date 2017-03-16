import { Component } from '@angular/core';
import { initializeApp, database} from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

constructor(){
	var config = {
    apiKey: "AIzaSyBg3vlt5sE8azeQfBbSTMOse9si0w3XxPQ",
    authDomain: "exemen-f6f11.firebaseapp.com",
    databaseURL: "https://exemen-f6f11.firebaseio.com",
    storageBucket: "exemen-f6f11.appspot.com",
    messagingSenderId: "93858786029"
  };
  initializeApp(config);

  var root = database().ref();
  root.on('value', function (snap) {
    console.log(snap.val());
  })
}


}
