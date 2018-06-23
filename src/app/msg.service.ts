import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsgService {
  private list: string[] = [];

  constructor() {}

  add(msg: string): void {
    this.list.push(msg);
    setTimeout(_ => this.list.pop(), 2500);
  }

  clear(): void {
    this.list = [];
  }

  size(): number {
    return this.list.length;
  }

  [Symbol.iterator]() {
    let i = -1;

    return {
      next: () => ({
        value: this.list[++i],
        done: i == this.size()
      })
    };
  }
}
