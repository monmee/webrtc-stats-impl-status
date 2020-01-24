export async function fetchTurnServers(Peer) {
  const peer = new Peer({
    key: "03ff6219-b58f-4310-9484-e9108e859cdd"
  });
  const credentials = await new Promise(r => {
    // not public but
    peer.socket.once("OPEN", msg => r(msg.turnCredential));
  });
  peer.destroy();

  return [
    // "stun:stun.webrtc.ecl.ntt.com:3478",
    "turn:turn.webrtc.ecl.ntt.com:443?transport=tcp",
    "turn:turn.webrtc.ecl.ntt.com:443?transport=udp",
    "turns:turn.webrtc.ecl.ntt.com:443?transport=tcp"
  ].map(urls => ({ urls, ...credentials }));
}