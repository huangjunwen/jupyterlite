"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[590],{40590:(e,t,s)=>{s.r(t),s.d(t,{IDocumentProviderFactory:()=>h,ProviderMock:()=>c,WebSocketProviderWithLocks:()=>B,getAnonymousUserName:()=>o,getRandomColor:()=>a,moonsOfJupyter:()=>n,userColors:()=>i});const n=["Metis","Adrastea","Amalthea","Thebe","Io","Europa","Ganymede","Callisto","Themisto","Leda","Ersa","Pandia","Himalia","Lysithea","Elara","Dia","Carpo","Valetudo","Euporie","Eupheme","Helike","Euanthe","Hermippe","Praxidike","Thyone","Thelxinoe","Ananke","Mneme","Orthosie","Harpalyke","Iocaste","Erinome","Aitne","Herse","Taygete","Eukelade","Carme","Isonoe","Autonoe","Philophrosyne","Cyllene","Pasithee","Pasiphae","Sponde","Eurydome","Kalyke","Hegemone","Kale","Kallichore","Chaldene","Arche","Eirene","Kore","Megaclite","Aoede","Callirrhoe","Sinope"],o=()=>"Anonymous "+n[Math.floor(Math.random()*n.length)],i=["#12A0D3","#17AB30","#CC8500","#A79011","#ee6352","#609DA9","#4BA749","#00A1B3"],a=()=>i[Math.floor(Math.random()*i.length)];class c{requestInitialContent(){return Promise.resolve(!1)}putInitializedState(){}acquireLock(){return Promise.resolve(0)}releaseLock(e){}destroy(){}setPath(e){}}var r=s(74547);const h=new r.Token("@jupyterlab/docprovider:IDocumentProviderFactory");var l=s(66962),d=s(74833),u=s(33967),w=s(22592),_=s(47941),m=s(83149);const f=new Map,p="undefined"==typeof BroadcastChannel?class{constructor(e){this.room=e,this.onmessage=null,m.z((t=>t.key===e&&null!==this.onmessage&&this.onmessage({data:_.Gh(t.newValue||"")})))}postMessage(e){m.X.setItem(this.room,_.s3(_.eh(e)))}}:BroadcastChannel,y=e=>w.Yu(f,e,(()=>{const t=new Set,s=new p(e);return s.onmessage=e=>t.forEach((t=>t(e.data,"broadcastchannel"))),{bc:s,subs:t}})),b=(e,t,s=null)=>{const n=y(e);n.bc.postMessage(t),n.subs.forEach((e=>e(t,s)))};var g=s(2431);const v=(e,t)=>{d.uE(e,0);const s=u.encodeStateVector(t);d.mP(e,s)},C=(e,t,s)=>{d.uE(e,1),d.mP(e,u.encodeStateAsUpdate(t,s))},k=(e,t,s)=>{try{u.applyUpdate(t,l.HN(e),s)}catch(e){console.error("Caught error while handling a Yjs update",e)}},I=k;var E=s(90157),U=s(12330),M=s(11182),L=s(36498),P=s(27061);const R=[];R[0]=(e,t,s,n,o)=>{d.uE(e,0);const i=((e,t,s,n)=>{const o=l.yg(e);switch(o){case 0:((e,t,s)=>{C(t,s,l.HN(e))})(e,t,s);break;case 1:k(e,s,n);break;case 2:I(e,s,n);break;default:throw new Error("Unknown message type")}return o})(t,e,s.doc,s);n&&1===i&&!s.synced&&(s.synced=!0)},R[3]=(e,t,s,n,o)=>{d.uE(e,1),d.mP(e,E.xq(s.awareness,Array.from(s.awareness.getStates().keys())))},R[1]=(e,t,s,n,o)=>{E.oy(s.awareness,l.HN(t),s)},R[2]=(e,t,s,n,o)=>{((e,t,s)=>{0===l.yg(e)&&s(t,l.kf(e))})(t,s.doc,q)};const q=(e,t)=>console.warn(`Permission denied to access ${e.url}.\n${t}`),A=(e,t,s)=>{const n=l.l1(t),o=d.Mf(),i=l.yg(n),a=e.messageHandlers[i];return a?a(o,n,e,s,i):console.error("Unable to compute message"),o},S=e=>{if(e.shouldConnect&&null===e.ws){const t=new e._WS(e.url);t.binaryType="arraybuffer",e.ws=t,e.wsconnecting=!0,e.wsconnected=!1,e.synced=!1,t.onmessage=s=>{e.wsLastMessageReceived=g.ZG();const n=A(e,new Uint8Array(s.data),!0);d.kE(n)>1&&t.send(d._f(n))},t.onerror=t=>{e.emit("connection-error",[t,e])},t.onclose=t=>{e.emit("connection-close",[t,e]),e.ws=null,e.wsconnecting=!1,e.wsconnected?(e.wsconnected=!1,e.synced=!1,E.Ag(e.awareness,Array.from(e.awareness.getStates().keys()).filter((t=>t!==e.doc.clientID)),e),e.emit("status",[{status:"disconnected"}])):e.wsUnsuccessfulReconnects++,setTimeout(S,M.VV(100*M.sQ(2,e.wsUnsuccessfulReconnects),e.maxBackoffTime),e)},t.onopen=()=>{e.wsLastMessageReceived=g.ZG(),e.wsconnecting=!1,e.wsconnected=!0,e.wsUnsuccessfulReconnects=0,e.emit("status",[{status:"connected"}]);const s=d.Mf();if(d.uE(s,0),v(s,e.doc),t.send(d._f(s)),null!==e.awareness.getLocalState()){const s=d.Mf();d.uE(s,1),d.mP(s,E.xq(e.awareness,[e.doc.clientID])),t.send(d._f(s))}},e.emit("status",[{status:"connecting"}])}},H=(e,t)=>{e.wsconnected&&e.ws.send(t),e.bcconnected&&b(e.bcChannel,t,e)};class T extends U.y{constructor(e,t,s,{connect:n=!0,awareness:o=new E.GL(s),params:i={},WebSocketPolyfill:a=WebSocket,resyncInterval:c=-1,maxBackoffTime:r=2500,disableBc:h=!1}={}){for(super();"/"===e[e.length-1];)e=e.slice(0,e.length-1);const l=(e=>L.UI(e,((e,t)=>`${encodeURIComponent(t)}=${encodeURIComponent(e)}`)).join("&"))(i);this.maxBackoffTime=r,this.bcChannel=e+"/"+t,this.url=e+"/"+t+(0===l.length?"":"?"+l),this.roomname=t,this.doc=s,this._WS=a,this.awareness=o,this.wsconnected=!1,this.wsconnecting=!1,this.bcconnected=!1,this.disableBc=h,this.wsUnsuccessfulReconnects=0,this.messageHandlers=R.slice(),this._synced=!1,this.ws=null,this.wsLastMessageReceived=0,this.shouldConnect=n,this._resyncInterval=0,c>0&&(this._resyncInterval=setInterval((()=>{if(this.ws){const e=d.Mf();d.uE(e,0),v(e,s),this.ws.send(d._f(e))}}),c)),this._bcSubscriber=(e,t)=>{if(t!==this){const t=A(this,new Uint8Array(e),!1);d.kE(t)>1&&b(this.bcChannel,d._f(t),this)}},this._updateHandler=(e,t)=>{if(t!==this){const t=d.Mf();d.uE(t,0),((e,t)=>{d.uE(e,2),d.mP(e,t)})(t,e),H(this,d._f(t))}},this.doc.on("update",this._updateHandler),this._awarenessUpdateHandler=({added:e,updated:t,removed:s},n)=>{const i=e.concat(t).concat(s),a=d.Mf();d.uE(a,1),d.mP(a,E.xq(o,i)),H(this,d._f(a))},this._beforeUnloadHandler=()=>{E.Ag(this.awareness,[s.clientID],"window unload")},"undefined"!=typeof window?window.addEventListener("beforeunload",this._beforeUnloadHandler):P.on("exit",this._beforeUnloadHandler),o.on("update",this._awarenessUpdateHandler),this._checkInterval=setInterval((()=>{this.wsconnected&&3e4<g.ZG()-this.wsLastMessageReceived&&this.ws.close()}),3e3),n&&this.connect()}get synced(){return this._synced}set synced(e){this._synced!==e&&(this._synced=e,this.emit("synced",[e]),this.emit("sync",[e]))}destroy(){0!==this._resyncInterval&&clearInterval(this._resyncInterval),clearInterval(this._checkInterval),this.disconnect(),"undefined"!=typeof window?window.removeEventListener("beforeunload",this._beforeUnloadHandler):P.off("exit",this._beforeUnloadHandler),this.awareness.off("update",this._awarenessUpdateHandler),this.doc.off("update",this._updateHandler),super.destroy()}connectBc(){if(this.disableBc)return;var e,t;this.bcconnected||(e=this.bcChannel,t=this._bcSubscriber,y(e).subs.add(t),this.bcconnected=!0);const s=d.Mf();d.uE(s,0),v(s,this.doc),b(this.bcChannel,d._f(s),this);const n=d.Mf();d.uE(n,0),C(n,this.doc),b(this.bcChannel,d._f(n),this);const o=d.Mf();d.uE(o,3),b(this.bcChannel,d._f(o),this);const i=d.Mf();d.uE(i,1),d.mP(i,E.xq(this.awareness,[this.doc.clientID])),b(this.bcChannel,d._f(i),this)}disconnectBc(){const e=d.Mf();var t,s;d.uE(e,1),d.mP(e,E.xq(this.awareness,[this.doc.clientID],new Map)),H(this,d._f(e)),this.bcconnected&&(t=this.bcChannel,s=this._bcSubscriber,y(t).subs.delete(s),this.bcconnected=!1)}disconnect(){this.shouldConnect=!1,this.disconnectBc(),null!==this.ws&&this.ws.close()}connect(){this.shouldConnect=!0,this.wsconnected||null!==this.ws||(S(this),this.connectBc())}}class B extends T{constructor(e){var t,s,n;super(e.url,e.contentType+":"+e.path,e.ymodel.ydoc,{awareness:e.ymodel.awareness}),this._currentLockRequest=null,this._initialContentRequest=null,this._path=e.path,this._contentType=e.contentType,this._serverUrl=e.url;const i=new URL(e.url).searchParams,c=null!==(t="#"+i.get("usercolor"))&&void 0!==t?t:a().slice(1),r=null!==(s=i.get("username"))&&void 0!==s?s:o(),h=e.ymodel.awareness.getLocalState();h&&null==(null===(n=h.user)||void 0===n?void 0:n.name)&&e.ymodel.awareness.setLocalStateField("user",{name:r,color:c}),this.messageHandlers[127]=(e,t,s,n,o)=>{const i=l.Jl(t),a=this._currentLockRequest;this._currentLockRequest=null,a&&a.resolve(i)},this.messageHandlers[125]=(e,t,s,n,o)=>{const i=l.iU(t);i.byteLength>0&&u.applyUpdate(this.doc,i);const a=this._initialContentRequest;this._initialContentRequest=null,a&&a.resolve(i.byteLength>0)},this._isInitialized=!1,this._onConnectionStatus=this._onConnectionStatus.bind(this),this.on("status",this._onConnectionStatus)}setPath(e){if(e!==this._path){this._path=e;const t=d.Mf();d.cW(t,123);const s=unescape(encodeURIComponent(this._contentType+":"+e));for(let e=0;e<s.length;e++)d.cW(t,s.codePointAt(e));this._sendMessage(d._f(t)),this.disconnectBc(),this.bcChannel=this._serverUrl+"/"+this._contentType+":"+this._path,this.url=this.bcChannel,this.connectBc()}}requestInitialContent(){return this._initialContentRequest||(this._initialContentRequest=new r.PromiseDelegate,this._sendMessage(new Uint8Array([125])),setTimeout((()=>{var e;return null===(e=this._initialContentRequest)||void 0===e?void 0:e.resolve(!1)}),1e3)),this._initialContentRequest.promise}putInitializedState(){const e=d.Mf();d.uE(e,124),d.HK(e,u.encodeStateAsUpdate(this.doc)),this._sendMessage(d._f(e)),this._isInitialized=!0}acquireLock(){if(this._currentLockRequest)return this._currentLockRequest.promise;let e,t;this._sendMessage(new Uint8Array([127])),this._requestLockInterval&&clearInterval(this._requestLockInterval),this._requestLockInterval=setInterval((()=>{this.wsconnected&&this._sendMessage(new Uint8Array([127]))}),500);const s=new Promise(((s,n)=>{e=s,t=n}));return this._currentLockRequest={promise:s,resolve:e,reject:t},s}releaseLock(e){const t=d.Mf();d.uE(t,126),d.Ep(t,e),this._sendMessage(d._f(t)),this._requestLockInterval&&clearInterval(this._requestLockInterval)}_sendMessage(e){const t=()=>{setTimeout((()=>{this.wsconnected?this.ws.send(e):this.once("status",t)}),0)};t()}async _onConnectionStatus(e){if(this._isInitialized&&"connected"===e.status){const e=await this.acquireLock();await this.requestInitialContent()||this.putInitializedState(),this.releaseLock(e)}}}}}]);
//# sourceMappingURL=590.ef83c1a.js.map