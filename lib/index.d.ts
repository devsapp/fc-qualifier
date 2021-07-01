import BaseComponent from './common/base';
import { InputProps } from './common/entity';
export default class ComponentDemo extends BaseComponent {
    constructor(props: any);
    version(inputs: InputProps): Promise<any>;
    alias(inputs: InputProps): Promise<any>;
    private handlerInputs;
}
