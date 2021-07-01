import { IProps } from '../common/entity';
export default class Layer {
    constructor({ region, credentials }: {
        region: any;
        credentials: any;
    });
    version_list({ serviceName }: {
        serviceName: any;
    }, table?: any): Promise<any>;
    version_publish({ serviceName, description }: {
        serviceName: any;
        description: any;
    }): Promise<any>;
    version_delete({ serviceName, versionId }: {
        serviceName: any;
        versionId: any;
    }): Promise<void>;
    version_deleteAll(props: IProps): Promise<void>;
    findAlias({ serviceName, aliasName }: {
        serviceName: any;
        aliasName: any;
    }): Promise<any>;
    alias_publish({ serviceName, description, aliasName, versionId, gversion, weight }: IProps): Promise<void>;
    alias_list({ serviceName }: {
        serviceName: any;
    }, table?: any): Promise<any>;
    alias_get({ serviceName, aliasName }: {
        serviceName: any;
        aliasName: any;
    }): Promise<any>;
    alias_delete({ serviceName, aliasName }: {
        serviceName: any;
        aliasName: any;
    }): Promise<any>;
    alias_deleteAll({ serviceName }: {
        serviceName: any;
    }): Promise<void>;
    private updateAlias;
    private createAlias;
}
