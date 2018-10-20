const P2p = require("./lib/P2p.js");
const Blockchain = require("./lib/Blockchain.js");
const blockchain = new Blockchain();
const p2p = new P2p(blockchain);
p2p.startServer(3001);
const router = require('express').Router();

router.get('/', (req, res)=>{
  res.json(blockchain);
})

router.post('/mine', (req, res)=>{
  blockchain.mine(req.body);
    p2p.broadcastLatest(); 
  res.json(blockchain);
})



router.post('/nodes/connect', (req, res)=>{
  let {host, port} = req.body;
  if(!host || !port) return res.sendStatus(500);
 try {
    p2p.connectToPeer(args.host, args.port);
    p2p.discoverPeers();
    res.json(nodes);
 } catch(err){
     res.json(err)
 }
 res.json(p2p.peers)
})

router.get('/nodes', (req, res)=>{
  res.json(p2p.peers);
})

module.exports = router;