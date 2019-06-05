import { Component } from "@angular/core";

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
  serverCreated = false;
  serverStatus = 'offline';
  serverId = 10;
  servers = ['testserver', 'testserver2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  onCreateServer() {
    this.serverCreation =
      'server WAS created and the name is:' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'yellow' : 'darksalmon';
  }
}
