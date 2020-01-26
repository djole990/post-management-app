import { Deserializable } from "./deserializable";

export class Post implements Deserializable {
  userId: number;
  id: number;
  title: string;
  body: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
