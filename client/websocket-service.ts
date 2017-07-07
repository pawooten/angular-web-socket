import {Observable} from 'rxjs/Rx';

export class WebSocketService {
  webSocket: WebSocket;

  createObservableSocket(url:string):Observable{
    this.webSocket = new WebSocket(url);
    return new Observable( observer => {
      this.webSocket.onmessage = (event) => observer.next(event.data);
      this.webSocket.onerror = (event) => observer.error(event);
      this.webSocket.onclose = (event) => observer.complete();
    });
  }
}