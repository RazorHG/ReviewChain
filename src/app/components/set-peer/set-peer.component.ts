import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service';
import { Peer2PeerService } from '../../providers/peer2peer.service';

@Component({
  selector: 'app-set-peer',
  templateUrl: './set-peer.component.html',
  styleUrls: ['./set-peer.component.scss']
})
export class SetPeerComponent implements OnInit {
  userName: string;
  peer: string;
  port: number;
  constructor(private userService: UserService, private peer2peerService: Peer2PeerService) { }

  ngOnInit() {
    this.userName = this.userService.userName;
  }
  setUserName() {
    this.userService.userName = this.userName;
  }
  discoverPeer() {
    this.peer2peerService.connectToPeer(this.peer, this.port).subscribe(() => {

    });
  }
}
