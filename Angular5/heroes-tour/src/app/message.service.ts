import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages: Array<string> = [];

  constructor() { }

  add(message) {
    this.messages.push(message);
  }
  clear() {
    this.messages = [];
  }
}
