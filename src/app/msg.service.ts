import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsgService {
  private list: string[] = [];

  constructor() {}

  get size(): number {
    return this.list.length;
  }

  add(msg: string): void {
    this.list.push(msg);
    setTimeout(_ => this.list.pop(), 2500);
  }

  clear(): void {
    this.list = [];
  }

  *[Symbol.iterator]() {
    for (const msg of this.list) {
      yield msg;
    }
  }

  /*
  [Symbol.iterator]() {
    let i = -1;

    return {
      next: () => ({
        value: this.list[++i],
        done: i == this.size()
      })
    };
  }
  */
}
