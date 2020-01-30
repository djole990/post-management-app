import { Deserializable } from './deserializable';

export class Tag implements Deserializable {

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
