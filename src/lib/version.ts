import Client from './client';
import { IProps } from '../common/entity';
import StdoutFormatter from '../common/stdout-formatter';
import logger from '../common/logger';
import tableShow from './show-table';

export default class Layer {
  constructor({ region, credentials }) {
    Client.setFcClient(region, credentials);
  }

  async list({ serviceName }, table?) {
    logger.info(StdoutFormatter.stdoutFormatter.get('listVersions', serviceName));
    const data = await Client.fcClient.version_list(serviceName);
    if (table) {
      tableShow(data, ['versionId', 'description', 'createdTime', 'lastModifiedTime'])
    } else {
      return data;
    }
  }

  async publish({ serviceName, description }) {
    logger.info(StdoutFormatter.stdoutFormatter.create('service version', serviceName));
    const { data } = await Client.fcClient.publishVersion(serviceName, description);
    logger.debug(`publish version: ${JSON.stringify(data)}`);
    return data;
  }

  async delete({ serviceName, versionId }) {
    if (!versionId) {
      throw new Error('Not fount versionId');
    }
    logger.info(StdoutFormatter.stdoutFormatter.remove('service version', `${serviceName}.${versionId}`));
    const res = await Client.fcClient.deleteVersion(serviceName, versionId);
    logger.debug(`delete version: ${JSON.stringify(res)}`);
  }

  async deleteAll(props: IProps) {
    const listData = await this.list(props);
    const { serviceName } = props;
    for (const { versionId } of listData) {
      await this.delete({ serviceName, versionId });
    }
  }
}