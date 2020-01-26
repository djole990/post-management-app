import { Deserializable } from "./deserializable";

export class Geo implements Deserializable {
  lat: number;
  lng: number;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
