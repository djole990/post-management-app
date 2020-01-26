import { Deserializable } from "./deserializable";

export class Comment implements Deserializable {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
