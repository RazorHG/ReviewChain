import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class Peer2PeerService {
   baseUrl =  'http://localhost:3000/blockchain/';

  constructor(private http: HttpClient) {
  }

  connectToPeer(host: string, port: number) {
    return this.http.post(`${this.baseUrl}nodes/connect`, {host: host, port: port});
  }
  addReview(review) {
    return this.http.post(`${this.baseUrl}mine`, review);
  }
  getBlockChain() {
    return this.http.get(`${this.baseUrl}`);
  }

  getPeers() {
    return this.http.get(`${this.baseUrl}nodes`);
  }

}
