import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WebSocketService } from './client/wbesocket-service';

@Component({
  selector: 'app',
  providers: [WebSocketService],
  template: `<h1>Angular subscriber of WebSocket service</h1>{{receivedMessage}}<br><button (click)="sendMessage()">Send Message</button>`
})
class AppComponent {
  receivedMessage: string;

  constructor(private webSocketService: WebSocketService) {
    this.webSocketService.createObservableSocket("ws://localhost:8085")
      .subscribe(
        data => { this.receivedMessage = data; },
        error => console.log(error),
        () => console.log('The observable stream is complete')
      );
  }
}