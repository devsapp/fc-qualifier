import Client from './client';
import { IProps } from '../common/entity';
import StdoutFormatter from '../common/stdout-formatter';
import logger from '../common/logger';
import tableShow from './show-table';

export default class Layer {
  constructor({ region, credentials }) {
    Client.setFcClient(region, credentials);
  }

  async findAlias({ serviceName, aliasName }) {
    const aliasList = await this.list({ serviceName });
    for (const aliasItem of aliasList) {
      if (aliasItem.aliasName === aliasName) {
        return aliasItem;
      }
    }
    return false;
  }

  async publish({ serviceName, description, aliasName, versionId, gversion, weight }: IProps) {
    if (!versionId) {
      throw new Error('Not fount versionId');
    }
    const hasWeight = typeof weight === 'number';
    if (hasWeight && !gversion) {
      throw new Error('weight exists, gversion is required');
    }
    if (gversion && !hasWeight) {
      throw new Error('gversion exists,weight is required');
    }
    const parames = {
      description,
      additionalVersionWeight: {}
    }
    if (hasWeight) {
      parames.additionalVersionWeight = { [gversion]: weight / 100 };
    }

    const aliasConfig = await this.findAlias({ serviceName, aliasName });
    if (aliasConfig) {
      return await this.updateAlias({ aliasName, serviceName, versionId, parames });
    } else {
      return await this.createAlias({ aliasName, serviceName, versionId, parames });
    }
  }

  async list({ serviceName }, table?) {
    logger.info(StdoutFormatter.stdoutFormatter.get('listAliases', serviceName));
    const data = await Client.fcClient.alias_list(serviceName);
    if (table) {
      const showWeight = {
        value: 'additionalVersionWeight',
        formatter: (value) => {
          const gversion = Object.keys(value)[0];
          if (gversion) {
            return `additionalVersion: ${gversion}\nWeight: ${value[gversion] * 100}%`;
          }
          return '';
        },
      };
      tableShow(data, ['aliasName', 'versionId', 'description', 'createdTime', 'lastModifiedTime', showWeight])
    } else {
      return data;
    }
  }

  async get({ serviceName, aliasName }) {
    logger.info(StdoutFormatter.stdoutFormatter.get('alias', aliasName));
    return (await Client.fcClient.getAlias(serviceName, aliasName)).data;
  }

  async delete({ serviceName, aliasName }) {
    logger.info(StdoutFormatter.stdoutFormatter.remove('alias', aliasName));
    return (await Client.fcClient.deleteAlias(serviceName, aliasName)).data;
  }

  async deleteAll({ serviceName }) {
    const aliasList = await this.list({ serviceName });
    for (const { aliasName } of aliasList) {
      await this.delete({ serviceName, aliasName });
    }
  }

  private async updateAlias({ aliasName, serviceName, versionId, parames }) {
    logger.info(StdoutFormatter.stdoutFormatter.update('alias', aliasName));
    await Client.fcClient.updateAlias(serviceName, aliasName, versionId, parames);
  }

  private async createAlias({ aliasName, serviceName, versionId, parames }) {
    logger.info(StdoutFormatter.stdoutFormatter.create('alias', aliasName));
    await Client.fcClient.createAlias(serviceName, aliasName, versionId, parames);
  }
}