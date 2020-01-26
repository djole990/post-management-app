import { Geo } from "./geo";
import { Deserializable } from "./deserializable";

export class Address implements Deserializable {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;

  deserialize(input: any): this {
    Object.assign(this, input);
    this.geo = new Geo().deserialize(input.geo);
    return this;
  }
}
