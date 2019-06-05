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

 constructor() {
  setTimeout(() => {
    this.allowNewServer = true;
  }, 2000);
 }

 onCreateServer() {
    this.serverCreation = 'server WAS created';
 }

 onUpdateServerName(event: any) {
  this.serverName = (<HTMLInputElement>event.target).value;
}

}



