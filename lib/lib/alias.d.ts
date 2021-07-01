import { IProps } from '../common/entity';
export default class Layer {
    constructor({ region, credentials }: {
        region: any;
        credentials: any;
    });
    findAlias({ serviceName, aliasName }: {
        serviceName: any;
        aliasName: any;
    }): Promise<any>;
    publish({ serviceName, description, aliasName, versionId, gversion, weight }: IProps): Promise<void>;
    list({ serviceName }: {
        serviceName: any;
    }, table?: any): Promise<any>;
    get({ serviceName, aliasName }: {
        serviceName: any;
        aliasName: any;
    }): Promise<any>;
    delete({ serviceName, aliasName }: {
        serviceName: any;
        aliasName: any;
    }): Promise<any>;
    deleteAll({ serviceName }: {
        serviceName: any;
    }): Promise<void>;
    private updateAlias;
    private createAlias;
}
