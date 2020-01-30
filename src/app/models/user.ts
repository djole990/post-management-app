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
  imageUrl: string = "https://static01.nyt.com/images/2020/01/30/sports/30ausopen-men1-sub/merlin_168088479_a991ea34-f865-4909-b818-0205fb69e7c4-superJumbo.jpg?quality=90&auto=webp"

  deserialize(input: any): this {
    Object.assign(this, input);
    this.address = new Address().deserialize(input.address);
    return this;
  }
}
