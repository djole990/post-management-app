import { Tag } from './tag';
import { Deserializable } from './deserializable';

export class Result implements Deserializable{
    
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
      }
}
