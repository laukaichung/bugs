import {isDev} from "./is-dev";

export function debugLogger(...data: any[]): void {
  if (isDev()) {
    console.log(data);
  }
}
