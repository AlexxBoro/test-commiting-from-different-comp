import { Component } from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})

export class ServerComponent {
 allowNewServer = false;
 serverCreation = 'no server was created';
 nazwa = 'jakas nazwa';
 serverName = '';
 username = '';
 clickableButtonEnabled = false;

 constructor() {
  setTimeout(() => {
    this.allowNewServer = true;
  }, 2000);
 }

 onCreateServer() {
    this.serverCreation = 'server WAS created and the name is:' + this.serverName;
 }

 onUpdateServerName(event: any) {
  this.serverName = (<HTMLInputElement>event.target).value;
}

}



