import { IProps } from '../common/entity';
export default class Layer {
    constructor({ region, credentials }: {
        region: any;
        credentials: any;
    });
    list({ serviceName }: {
        serviceName: any;
    }, table?: any): Promise<any>;
    publish({ serviceName, description }: {
        serviceName: any;
        description: any;
    }): Promise<any>;
    delete({ serviceName, versionId }: {
        serviceName: any;
        versionId: any;
    }): Promise<void>;
    deleteAll(props: IProps): Promise<void>;
}
