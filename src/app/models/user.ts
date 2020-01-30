import { Address } from "./address";
import { Company } from "./company";
import { Deserializable } from "./deserializable";

export class User implements Deserializable {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
  imageUrl: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    this.address = new Address().deserialize(input.address);
    return this;
  }
}
