export const VERSION = [
  {
    header: 'Version',
    content: 'service version operation',
  },
  {
    header: 'Usage',
    content: '$ s version <sub-command>',
  },
  {
    header: 'SubCommand',
    content: [
      {
        desc: 'list',
        example: 'View the list of service versions, you can get help through [s version list -h]',
      },
      {
        desc: 'publish',
        example: 'Publish service version, you can get help through [s version publish -h]',
      },
      {
        desc: 'delete',
        example: 'Delete service version, you can get help through [s version delete -h]',
      },
    ],
  },
];

export const VERSION_LIST = [
  {
    header: 'version list',
    content: 'View the list of service versions',
  },
  {
    header: 'Usage',
    content: '$ s version list',
  },
  {
    header: 'Command List',
    optionList: [
      {
        name: 'region',
        description: 'Specify the region parameter',
        type: String,
      },
      {
        name: 'service-name',
        description: 'Specify the service name parameter',
        type: String,
      },
    ],
  },
  {
    header: 'Global Options',
    optionList: [
      {
        name: 'access',
        description: 'Specify key alias',
        alias: 'a',
        type: Boolean,
      },
      {
        name: 'help',
        description: 'Display help for command',
        alias: 'h',
        type: Boolean,
      },
      {
        name: 'table',
        description: 'Table format output',
        type: Boolean,
      },
    ],
  },
  {
    header: 'Examples with Yaml',
    content: [
      '$ s version list',
      '$ s exec -- version list',
    ],
  },
  {
    header: 'Examples with CLI',
    content: [
      '$ s cli fc-qualifier list --region cn-hangzhou --service-name name',
    ],
  },
];

export const VERSION_PUBLISH = [
  {
    header: 'version publish',
    content: 'Publish service version',
  },
  {
    header: 'Usage',
    content: '$ s version publish',
  },
  {
    header: 'Command List',
    optionList: [
      {
        name: 'region',
        description: 'Specify the region parameter',
        type: String,
      },
      {
        name: 'service-name',
        description: 'Specify the service name parameter',
        type: String,
      },
      {
        name: 'description',
        description: 'Specify the description parameter',
        type: String,
      },
    ],
  },
  {
    header: 'Global Options',
    optionList: [
      {
        name: 'access',
        description: 'Specify key alias',
        alias: 'a',
        type: Boolean,
      },
      {
        name: 'help',
        description: 'Display help for command',
        alias: 'h',
        type: Boolean,
      },
    ],
  },
  {
    header: 'Examples with Yaml',
    content: [
      '$ s version publish',
      '$ s exec -- version publish',
    ],
  },
  {
    header: 'Examples with CLI',
    content: [
      '$ s cli fc-qualifier publish --region cn-hangzhou --service-name name --description xxx',
    ],
  },
];

export const VERSION_DELETE = [
  {
    header: 'version delete',
    content: 'Delete service version',
  },
  {
    header: 'Usage',
    content: '$ s version delete',
  },
  {
    header: 'Command List',
    optionList: [
      {
        name: 'region',
        description: 'Specify the region parameter',
        type: String,
      },
      {
        name: 'service-name',
        description: 'Specify the service name parameter',
        type: String,
      },
      {
        name: 'version-id',
        description: 'Specify the version parameter',
        alias: '-id',
        type: String,
      },
    ],
  },
  {
    header: 'Global Options',
    optionList: [
      {
        name: 'access',
        description: 'Specify key alias',
        alias: 'a',
        type: Boolean,
      },
      {
        name: 'help',
        description: 'Display help for command',
        alias: 'h',
        type: Boolean,
      },
    ],
  },
  {
    header: 'Examples with Yaml',
    content: [
      '$ s version delete',
      '$ s exec -- version delete',
    ],
  },
  {
    header: 'Examples with CLI',
    content: [
      '$ s cli fc-qualifier delete --region cn-hangzhou --service-name name --version-id xxx',
    ],
  },
];

export const VERSION_DELETEALL = [
  {
    header: 'version deleteAll',
    content: 'Delete service all version',
  },
  {
    header: 'Usage',
    content: '$ s version deleteAll',
  },
  {
    header: 'Command List',
    optionList: [
      {
        name: 'region',
        description: 'Specify the region parameter',
        type: String,
      },
      {
        name: 'service-name',
        description: 'Specify the service name parameter',
        type: String,
      },
    ],
  },
  {
    header: 'Global Options',
    optionList: [
      {
        name: 'access',
        description: 'Specify key alias',
        alias: 'a',
        type: Boolean,
      },
      {
        name: 'help',
        description: 'Display help for command',
        alias: 'h',
        type: Boolean,
      },
    ],
  },
  {
    header: 'Examples with Yaml',
    content: [
      '$ s version deleteAll',
      '$ s exec -- version deleteAll',
    ],
  },
  {
    header: 'Examples with CLI',
    content: [
      '$ s cli fc-qualifier deleteAll --region cn-hangzhou --service-name name',
    ],
  },
];

export const ALIAS = [
  {
    header: 'Alias',
    content: 'service alias operation',
  },
  {
    header: 'Usage',
    content: '$ s alias <sub-command>',
  },
  {
    header: 'SubCommand',
    content: [
      {
        desc: 'get',
        example: 'Get alias details, you can get help through [s alias get -h]',
      },
      {
        desc: 'list',
        example: 'View the list of service alias, you can get help through [s alias list -h]',
      },
      {
        desc: 'publish',
        example: 'Publish service alias, you can get help through [s alias publish -h]',
      },
      {
        desc: 'delete',
        example: 'Delete service alias, you can get help through [s alias delete -h]',
      },
    ],
  },
];

export const ALIAS_GET = [
  {
    header: 'alias get',
    content: 'Get alias details',
  },
  {
    header: 'Usage',
    content: '$ s alias get',
  },
  {
    header: 'Command List',
    optionList: [
      {
        name: 'region',
        description: 'Specify the region parameter',
        type: String,
      },
      {
        name: 'service-name',
        description: 'Specify the service name parameter',
        type: String,
      },
      {
        name: 'alias-name',
        description: 'Specify the alias name parameter',
        type: String,
      },
    ],
  },
  {
    header: 'Global Options',
    optionList: [
      {
        name: 'access',
        description: 'Specify key alias',
        alias: 'a',
        type: Boolean,
      },
      {
        name: 'help',
        description: 'Display help for command',
        alias: 'h',
        type: Boolean,
      },
    ],
  },
  {
    header: 'Examples with Yaml',
    content: [
      '$ s alias get',
      '$ s exec -- alias get',
    ],
  },
  {
    header: 'Examples with CLI',
    content: [
      '$ s cli fc-qualifier alias get --region cn-hangzhou --service-name name --alias-name pre',
    ],
  },
];

export const ALIAS_LIST = [
  {
    header: 'alias list',
    content: 'View the list of service alias',
  },
  {
    header: 'Usage',
    content: '$ s alias list',
  },
  {
    header: 'Command List',
    optionList: [
      {
        name: 'region',
        description: 'Specify the region parameter',
        type: String,
      },
      {
        name: 'service-name',
        description: 'Specify the service name parameter',
        type: String,
      },
    ],
  },
  {
    header: 'Global Options',
    optionList: [
      {
        name: 'access',
        description: 'Specify key alias',
        alias: 'a',
        type: Boolean,
      },
      {
        name: 'help',
        description: 'Display help for command',
        alias: 'h',
        type: Boolean,
      },
      {
        name: 'table',
        description: 'Table format output',
        type: Boolean,
      },
    ],
  },
  {
    header: 'Examples with Yaml',
    content: [
      '$ s alias list',
      '$ s exec -- alias list',
    ],
  },
  {
    header: 'Examples with CLI',
    content: [
      '$ s cli fc-qualifier alias list --region cn-hangzhou --service-name name',
    ],
  },
];

export const ALIAS_PUBLISH = [
  {
    header: 'alias publish',
    content: 'Publish service alias',
  },
  {
    header: 'Usage',
    content: '$ s alias publish',
  },
  {
    header: 'Command List',
    optionList: [
      {
        name: 'region',
        description: 'Specify the region parameter',
        type: String,
      },
      {
        name: 'service-name',
        description: 'Specify the service name parameter',
        type: String,
      },
      {
        name: 'alias-name',
        description: 'Specify the alias name parameter',
        type: String,
      },
      {
        name: 'version-id',
        description: 'Specify the version id parameter',
        alias: '-id',
        type: String,
      },
      {
        name: 'description',
        description: 'Specify the description parameter',
        type: String,
      },
      {
        name: 'gversion',
        description: 'Specify the grayscale version id parameter',
        type: String,
      },
      {
        name: 'weight',
        description: 'Specify the weight parameter',
        type: String,
      },
    ],
  },
  {
    header: 'Global Options',
    optionList: [
      {
        name: 'access',
        description: 'Specify key alias',
        alias: 'a',
        type: Boolean,
      },
      {
        name: 'help',
        description: 'Display help for command',
        alias: 'h',
        type: Boolean,
      },
    ],
  },
  {
    header: 'Examples with Yaml',
    content: [
      '$ s alias publish',
      '$ s exec -- alias publish',
    ],
  },
  {
    header: 'Examples with CLI',
    content: [
      '$ s cli fc-qualifier alias publish --region cn-hangzhou --service-name name --description xxx --alias-name pre --version-id 2 --gversion 3 --weight 20',
    ],
  },
];

export const ALIAS_DELETE = [
  {
    header: 'alias delete',
    content: 'Delete service alias',
  },
  {
    header: 'Usage',
    content: '$ s alias delete',
  },
  {
    header: 'Command List',
    optionList: [
      {
        name: 'region',
        description: 'Specify the region parameter',
        type: String,
      },
      {
        name: 'service-name',
        description: 'Specify the service name parameter',
        type: String,
      },
      {
        name: 'alias-name',
        description: 'Specify the alias parameter',
        type: String,
      },
    ],
  },
  {
    header: 'Global Options',
    optionList: [
      {
        name: 'access',
        description: 'Specify key alias',
        alias: 'a',
        type: Boolean,
      },
      {
        name: 'help',
        description: 'Display help for command',
        alias: 'h',
        type: Boolean,
      },
    ],
  },
  {
    header: 'Examples with Yaml',
    content: [
      '$ s alias delete',
      '$ s exec -- alias delete',
    ],
  },
  {
    header: 'Examples with CLI',
    content: [
      '$ s cli fc-qualifier alias delete --region cn-hangzhou --service-name name --alias-name pre',
    ],
  },
];

export const ALIAS_DELETEALL = [
  {
    header: 'alias deleteAll',
    content: 'Delete service all alias',
  },
  {
    header: 'Usage',
    content: '$ s alias deleteAll',
  },
  {
    header: 'Command List',
    optionList: [
      {
        name: 'region',
        description: 'Specify the region parameter',
        type: String,
      },
      {
        name: 'service-name',
        description: 'Specify the service name parameter',
        type: String,
      },
    ],
  },
  {
    header: 'Global Options',
    optionList: [
      {
        name: 'access',
        description: 'Specify key alias',
        alias: 'a',
        type: Boolean,
      },
      {
        name: 'help',
        description: 'Display help for command',
        alias: 'h',
        type: Boolean,
      },
    ],
  },
  {
    header: 'Examples with Yaml',
    content: [
      '$ s alias deleteAll',
      '$ s exec -- alias deleteAll',
    ],
  },
  {
    header: 'Examples with CLI',
    content: [
      '$ s cli fc-qualifier alias deleteAll --region cn-hangzhou --service-name name',
    ],
  },
];
