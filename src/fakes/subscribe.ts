import { On } from "./on";

export class Subscribe extends On {
  registerGlobalFake(): void {
    (<any>global).subscribe = (<any>global).on;
  }
}