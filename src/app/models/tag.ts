import { Deserializable } from './deserializable';

export class Tag implements Deserializable{
    confidence: number;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
