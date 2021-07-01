import * as core from '@serverless-devs/core';
import BaseComponent from './common/base';
import logger from './common/logger';
import { InputProps, IProps } from './common/entity';
import * as help_constant from './lib/help';
import StdoutFormatter from './common/stdout-formatter';
import Version from './lib/version';
import Alias from './lib/alias';

const COMPONENT_NMAE = 'fc-qualifier';
const VERSION_COMMAND = ['list', 'publish', 'delete', 'deleteAll'];
const ALIAS_COMMAND = ['list', 'get', 'publish', 'delete', 'deleteAll'];

export default class ComponentDemo extends BaseComponent {
  constructor(props) {
    super(props)
  }

  public async version(inputs: InputProps) {
    const {
      credentials,
      help,
      props,
      subCommand,
      table,
    } = await this.handlerInputs(inputs, 'version');

    if (!VERSION_COMMAND.includes(subCommand)) {
      core.help(help_constant.VERSION);
      throw new Error(`Does not support ${subCommand} command`);
    }

    const versionSubCommand = `version_${subCommand}`;
    if (help) {
      core.help(help_constant[versionSubCommand.toLocaleUpperCase()]);
      return;
    }
    await StdoutFormatter.initStdout();

    const qualifier = new Version({ region: props.region, credentials });
    return await qualifier[subCommand](props, table);
  }

  public async alias(inputs: InputProps) {
    const {
      credentials,
      help,
      props,
      subCommand,
      table,
    } = await this.handlerInputs(inputs, 'alias');

    if (!ALIAS_COMMAND.includes(subCommand)) {
      core.help(help_constant.ALIAS);
      throw new Error(`Does not support ${subCommand} command`);
    }

    const aliasSubCommand = `alias_${subCommand}`;
    if (help) {
      core.help(help_constant[aliasSubCommand.toLocaleUpperCase()]);
      return;
    }

    await StdoutFormatter.initStdout();

    const qualifier = new Alias({ region: props.region, credentials });
    return await qualifier[subCommand](props, table);
  }

  private async handlerInputs(inputs: InputProps, command: string) {
    logger.setContent(COMPONENT_NMAE.toLocaleUpperCase());
    logger.debug(`inputs.props: ${JSON.stringify(inputs.props)}`);

    const parsedArgs: {[key: string]: any} = core.commandParse(inputs, {
      boolean: ['help', 'table'],
      string: ['region', 'service-name', 'description', 'alias-name','id', 'gversion'],
      number: ['weight'],
      alias: { help: 'h', 'version-id': 'id' }
    });
    console.dir(parsedArgs);

    const parsedData = parsedArgs?.data || {};
    const rawData = parsedData._ || [];
    if (!rawData.length) {
      core.help(help_constant[command.toLocaleUpperCase()]);
      process.exit();
    }

    const subCommand = rawData[0];
    logger.debug(`${command} subCommand: ${subCommand}`);
    if (parsedData.help) {
      core.reportComponent(COMPONENT_NMAE, {
        command: `${command} ${subCommand}`,
        uid: inputs.credentials?.AccountID || '',
      });
      return { help: true, subCommand };
    }

    const props = inputs.props || {};

    const endProps: IProps = {
      region: parsedData.region || props.region,
      serviceName: parsedData['service-name'] || props.serviceName,
      description: parsedData.description || props.description,
      versionId: parsedData.id || props.versionId,
      aliasName: parsedData['alias-name'] || props.aliasName,
      gversion: parsedData.gversion || props.gversion,
      weight: parsedData.weight || props.weight,
    }

    if (!endProps.region) {
      throw new Error(`Not fount region`);
    }
    if (!endProps.serviceName) {
      throw new Error(`Not fount serviceName`);
    }

    const credentials = inputs.credentials || await core.getCredential(inputs.project.access);
    core.reportComponent(COMPONENT_NMAE, { command: `${command} ${subCommand}`, uid: credentials.AccountID });

    logger.debug(`handler inputs props: ${JSON.stringify(endProps)}`);

    return {
      credentials,
      subCommand,
      props: endProps,
      table: parsedData.table,
    }
  }
}
