import FC from '@alicloud/fc2';

FC.prototype.version_list = async function(serviceName, headers?) {
  let data = [];
  const query: any = {};

  do {
    const res = await Client.fcClient.get(`/services/${serviceName}/versions`, query, headers);
    
    const { versions = [], nextToken } = res.data || {};
    query.nextToken = nextToken;
    data = data.concat(versions);
  } while(query.nextToken);

  return data;
}
FC.prototype.alias_list = async function(serviceName, headers?) {
  let data = [];
  const query: any = {};

  do {
    const res = await Client.fcClient.get(`/services/${serviceName}/aliases`, query, headers);
    const { aliases = [], nextToken } = res.data || {};
    query.nextToken = nextToken;
    data = data.concat(aliases);
  } while(query.nextToken);

  return data;
}

export default class Client {
  static fcClient: any;

  static setFcClient(region: string, credentials) {
    const {
      AccountID,
      AccessKeyID,
      AccessKeySecret,
      SecurityToken,
    } = credentials;

    const fcClient = new FC(AccountID, {
      accessKeyID: AccessKeyID,
      accessKeySecret: AccessKeySecret,
      securityToken: SecurityToken,
      region,
      timeout: 6000000,
    });

    this.fcClient = fcClient;

    return fcClient;
  }
}
