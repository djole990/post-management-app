import { Deserializable } from "./deserializable";

export class Company implements Deserializable {
  name: string;
  catchPhrase: string;
  bs: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
