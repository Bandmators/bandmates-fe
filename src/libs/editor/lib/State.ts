/* eslint-disable @typescript-eslint/no-explicit-any */
export class Statable {
  events: Map<string, any> = new Map();

  on(str: string, callback: any) {
    this.events.set(str, callback);
  }
  off(str: string) {
    this.events.delete(str);
  }
  call(str: string, ...args: any[]) {
    this.events.get(str)(...args);
  }
}
