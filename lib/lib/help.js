"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALIAS_DELETEALL = exports.ALIAS_DELETE = exports.ALIAS_PUBLISH = exports.ALIAS_LIST = exports.ALIAS_GET = exports.ALIAS = exports.VERSION_DELETEALL = exports.VERSION_DELETE = exports.VERSION_PUBLISH = exports.VERSION_LIST = exports.VERSION = void 0;
exports.VERSION = [
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
exports.VERSION_LIST = [
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
exports.VERSION_PUBLISH = [
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
exports.VERSION_DELETE = [
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
exports.VERSION_DELETEALL = [
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
exports.ALIAS = [
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
exports.ALIAS_GET = [
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
exports.ALIAS_LIST = [
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
exports.ALIAS_PUBLISH = [
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
exports.ALIAS_DELETE = [
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
exports.ALIAS_DELETEALL = [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvaGVscC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLE9BQU8sR0FBRztJQUNyQjtRQUNFLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLE9BQU8sRUFBRSwyQkFBMkI7S0FDckM7SUFDRDtRQUNFLE1BQU0sRUFBRSxPQUFPO1FBQ2YsT0FBTyxFQUFFLDJCQUEyQjtLQUNyQztJQUNEO1FBQ0UsTUFBTSxFQUFFLFlBQVk7UUFDcEIsT0FBTyxFQUFFO1lBQ1A7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osT0FBTyxFQUFFLGlGQUFpRjthQUMzRjtZQUNEO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLE9BQU8sRUFBRSwwRUFBMEU7YUFDcEY7WUFDRDtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxPQUFPLEVBQUUsd0VBQXdFO2FBQ2xGO1NBQ0Y7S0FDRjtDQUNGLENBQUM7QUFFVyxRQUFBLFlBQVksR0FBRztJQUMxQjtRQUNFLE1BQU0sRUFBRSxjQUFjO1FBQ3RCLE9BQU8sRUFBRSxtQ0FBbUM7S0FDN0M7SUFDRDtRQUNFLE1BQU0sRUFBRSxPQUFPO1FBQ2YsT0FBTyxFQUFFLGtCQUFrQjtLQUM1QjtJQUNEO1FBQ0UsTUFBTSxFQUFFLGNBQWM7UUFDdEIsVUFBVSxFQUFFO1lBQ1Y7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsSUFBSSxFQUFFLE1BQU07YUFDYjtZQUNEO2dCQUNFLElBQUksRUFBRSxjQUFjO2dCQUNwQixXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxJQUFJLEVBQUUsTUFBTTthQUNiO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLGdCQUFnQjtRQUN4QixVQUFVLEVBQUU7WUFDVjtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxXQUFXLEVBQUUsbUJBQW1CO2dCQUNoQyxLQUFLLEVBQUUsR0FBRztnQkFDVixJQUFJLEVBQUUsT0FBTzthQUNkO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osV0FBVyxFQUFFLDBCQUEwQjtnQkFDdkMsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsSUFBSSxFQUFFLE9BQU87YUFDZDtZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLFdBQVcsRUFBRSxxQkFBcUI7Z0JBQ2xDLElBQUksRUFBRSxPQUFPO2FBQ2Q7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsb0JBQW9CO1FBQzVCLE9BQU8sRUFBRTtZQUNQLGtCQUFrQjtZQUNsQiwwQkFBMEI7U0FDM0I7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLG1CQUFtQjtRQUMzQixPQUFPLEVBQUU7WUFDUCxvRUFBb0U7U0FDckU7S0FDRjtDQUNGLENBQUM7QUFFVyxRQUFBLGVBQWUsR0FBRztJQUM3QjtRQUNFLE1BQU0sRUFBRSxpQkFBaUI7UUFDekIsT0FBTyxFQUFFLHlCQUF5QjtLQUNuQztJQUNEO1FBQ0UsTUFBTSxFQUFFLE9BQU87UUFDZixPQUFPLEVBQUUscUJBQXFCO0tBQy9CO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsY0FBYztRQUN0QixVQUFVLEVBQUU7WUFDVjtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxJQUFJLEVBQUUsTUFBTTthQUNiO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELElBQUksRUFBRSxNQUFNO2FBQ2I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsSUFBSSxFQUFFLE1BQU07YUFDYjtTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxnQkFBZ0I7UUFDeEIsVUFBVSxFQUFFO1lBQ1Y7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsV0FBVyxFQUFFLG1CQUFtQjtnQkFDaEMsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsSUFBSSxFQUFFLE9BQU87YUFDZDtZQUNEO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLEtBQUssRUFBRSxHQUFHO2dCQUNWLElBQUksRUFBRSxPQUFPO2FBQ2Q7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsb0JBQW9CO1FBQzVCLE9BQU8sRUFBRTtZQUNQLHFCQUFxQjtZQUNyQiw2QkFBNkI7U0FDOUI7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLG1CQUFtQjtRQUMzQixPQUFPLEVBQUU7WUFDUCx5RkFBeUY7U0FDMUY7S0FDRjtDQUNGLENBQUM7QUFFVyxRQUFBLGNBQWMsR0FBRztJQUM1QjtRQUNFLE1BQU0sRUFBRSxnQkFBZ0I7UUFDeEIsT0FBTyxFQUFFLHdCQUF3QjtLQUNsQztJQUNEO1FBQ0UsTUFBTSxFQUFFLE9BQU87UUFDZixPQUFPLEVBQUUsb0JBQW9CO0tBQzlCO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsY0FBYztRQUN0QixVQUFVLEVBQUU7WUFDVjtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxJQUFJLEVBQUUsTUFBTTthQUNiO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELElBQUksRUFBRSxNQUFNO2FBQ2I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osSUFBSSxFQUFFLE1BQU07YUFDYjtTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxnQkFBZ0I7UUFDeEIsVUFBVSxFQUFFO1lBQ1Y7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsV0FBVyxFQUFFLG1CQUFtQjtnQkFDaEMsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsSUFBSSxFQUFFLE9BQU87YUFDZDtZQUNEO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLEtBQUssRUFBRSxHQUFHO2dCQUNWLElBQUksRUFBRSxPQUFPO2FBQ2Q7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsb0JBQW9CO1FBQzVCLE9BQU8sRUFBRTtZQUNQLG9CQUFvQjtZQUNwQiw0QkFBNEI7U0FDN0I7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLG1CQUFtQjtRQUMzQixPQUFPLEVBQUU7WUFDUCx1RkFBdUY7U0FDeEY7S0FDRjtDQUNGLENBQUM7QUFFVyxRQUFBLGlCQUFpQixHQUFHO0lBQy9CO1FBQ0UsTUFBTSxFQUFFLG1CQUFtQjtRQUMzQixPQUFPLEVBQUUsNEJBQTRCO0tBQ3RDO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsT0FBTztRQUNmLE9BQU8sRUFBRSx1QkFBdUI7S0FDakM7SUFDRDtRQUNFLE1BQU0sRUFBRSxjQUFjO1FBQ3RCLFVBQVUsRUFBRTtZQUNWO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLElBQUksRUFBRSxNQUFNO2FBQ2I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsY0FBYztnQkFDcEIsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsSUFBSSxFQUFFLE1BQU07YUFDYjtTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxnQkFBZ0I7UUFDeEIsVUFBVSxFQUFFO1lBQ1Y7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsV0FBVyxFQUFFLG1CQUFtQjtnQkFDaEMsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsSUFBSSxFQUFFLE9BQU87YUFDZDtZQUNEO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLEtBQUssRUFBRSxHQUFHO2dCQUNWLElBQUksRUFBRSxPQUFPO2FBQ2Q7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsb0JBQW9CO1FBQzVCLE9BQU8sRUFBRTtZQUNQLHVCQUF1QjtZQUN2QiwrQkFBK0I7U0FDaEM7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLG1CQUFtQjtRQUMzQixPQUFPLEVBQUU7WUFDUCx5RUFBeUU7U0FDMUU7S0FDRjtDQUNGLENBQUM7QUFFVyxRQUFBLEtBQUssR0FBRztJQUNuQjtRQUNFLE1BQU0sRUFBRSxPQUFPO1FBQ2YsT0FBTyxFQUFFLHlCQUF5QjtLQUNuQztJQUNEO1FBQ0UsTUFBTSxFQUFFLE9BQU87UUFDZixPQUFPLEVBQUUseUJBQXlCO0tBQ25DO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsWUFBWTtRQUNwQixPQUFPLEVBQUU7WUFDUDtnQkFDRSxJQUFJLEVBQUUsS0FBSztnQkFDWCxPQUFPLEVBQUUsOERBQThEO2FBQ3hFO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osT0FBTyxFQUFFLDRFQUE0RTthQUN0RjtZQUNEO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLE9BQU8sRUFBRSxzRUFBc0U7YUFDaEY7WUFDRDtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxPQUFPLEVBQUUsb0VBQW9FO2FBQzlFO1NBQ0Y7S0FDRjtDQUNGLENBQUM7QUFFVyxRQUFBLFNBQVMsR0FBRztJQUN2QjtRQUNFLE1BQU0sRUFBRSxXQUFXO1FBQ25CLE9BQU8sRUFBRSxtQkFBbUI7S0FDN0I7SUFDRDtRQUNFLE1BQU0sRUFBRSxPQUFPO1FBQ2YsT0FBTyxFQUFFLGVBQWU7S0FDekI7SUFDRDtRQUNFLE1BQU0sRUFBRSxjQUFjO1FBQ3RCLFVBQVUsRUFBRTtZQUNWO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLElBQUksRUFBRSxNQUFNO2FBQ2I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsY0FBYztnQkFDcEIsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsSUFBSSxFQUFFLE1BQU07YUFDYjtZQUNEO2dCQUNFLElBQUksRUFBRSxZQUFZO2dCQUNsQixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxJQUFJLEVBQUUsTUFBTTthQUNiO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLGdCQUFnQjtRQUN4QixVQUFVLEVBQUU7WUFDVjtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxXQUFXLEVBQUUsbUJBQW1CO2dCQUNoQyxLQUFLLEVBQUUsR0FBRztnQkFDVixJQUFJLEVBQUUsT0FBTzthQUNkO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osV0FBVyxFQUFFLDBCQUEwQjtnQkFDdkMsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsSUFBSSxFQUFFLE9BQU87YUFDZDtTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxvQkFBb0I7UUFDNUIsT0FBTyxFQUFFO1lBQ1AsZUFBZTtZQUNmLHVCQUF1QjtTQUN4QjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsbUJBQW1CO1FBQzNCLE9BQU8sRUFBRTtZQUNQLDBGQUEwRjtTQUMzRjtLQUNGO0NBQ0YsQ0FBQztBQUVXLFFBQUEsVUFBVSxHQUFHO0lBQ3hCO1FBQ0UsTUFBTSxFQUFFLFlBQVk7UUFDcEIsT0FBTyxFQUFFLGdDQUFnQztLQUMxQztJQUNEO1FBQ0UsTUFBTSxFQUFFLE9BQU87UUFDZixPQUFPLEVBQUUsZ0JBQWdCO0tBQzFCO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsY0FBYztRQUN0QixVQUFVLEVBQUU7WUFDVjtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxJQUFJLEVBQUUsTUFBTTthQUNiO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELElBQUksRUFBRSxNQUFNO2FBQ2I7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsZ0JBQWdCO1FBQ3hCLFVBQVUsRUFBRTtZQUNWO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLFdBQVcsRUFBRSxtQkFBbUI7Z0JBQ2hDLEtBQUssRUFBRSxHQUFHO2dCQUNWLElBQUksRUFBRSxPQUFPO2FBQ2Q7WUFDRDtnQkFDRSxJQUFJLEVBQUUsTUFBTTtnQkFDWixXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxLQUFLLEVBQUUsR0FBRztnQkFDVixJQUFJLEVBQUUsT0FBTzthQUNkO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsV0FBVyxFQUFFLHFCQUFxQjtnQkFDbEMsSUFBSSxFQUFFLE9BQU87YUFDZDtTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxvQkFBb0I7UUFDNUIsT0FBTyxFQUFFO1lBQ1AsZ0JBQWdCO1lBQ2hCLHdCQUF3QjtTQUN6QjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsbUJBQW1CO1FBQzNCLE9BQU8sRUFBRTtZQUNQLDBFQUEwRTtTQUMzRTtLQUNGO0NBQ0YsQ0FBQztBQUVXLFFBQUEsYUFBYSxHQUFHO0lBQzNCO1FBQ0UsTUFBTSxFQUFFLGVBQWU7UUFDdkIsT0FBTyxFQUFFLHVCQUF1QjtLQUNqQztJQUNEO1FBQ0UsTUFBTSxFQUFFLE9BQU87UUFDZixPQUFPLEVBQUUsbUJBQW1CO0tBQzdCO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsY0FBYztRQUN0QixVQUFVLEVBQUU7WUFDVjtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxJQUFJLEVBQUUsTUFBTTthQUNiO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELElBQUksRUFBRSxNQUFNO2FBQ2I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsSUFBSSxFQUFFLE1BQU07YUFDYjtZQUNEO2dCQUNFLElBQUksRUFBRSxZQUFZO2dCQUNsQixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxLQUFLLEVBQUUsS0FBSztnQkFDWixJQUFJLEVBQUUsTUFBTTthQUNiO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELElBQUksRUFBRSxNQUFNO2FBQ2I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsV0FBVyxFQUFFLDRDQUE0QztnQkFDekQsSUFBSSxFQUFFLE1BQU07YUFDYjtZQUNEO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLElBQUksRUFBRSxNQUFNO2FBQ2I7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsZ0JBQWdCO1FBQ3hCLFVBQVUsRUFBRTtZQUNWO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLFdBQVcsRUFBRSxtQkFBbUI7Z0JBQ2hDLEtBQUssRUFBRSxHQUFHO2dCQUNWLElBQUksRUFBRSxPQUFPO2FBQ2Q7WUFDRDtnQkFDRSxJQUFJLEVBQUUsTUFBTTtnQkFDWixXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxLQUFLLEVBQUUsR0FBRztnQkFDVixJQUFJLEVBQUUsT0FBTzthQUNkO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLG9CQUFvQjtRQUM1QixPQUFPLEVBQUU7WUFDUCxtQkFBbUI7WUFDbkIsMkJBQTJCO1NBQzVCO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxtQkFBbUI7UUFDM0IsT0FBTyxFQUFFO1lBQ1Asd0pBQXdKO1NBQ3pKO0tBQ0Y7Q0FDRixDQUFDO0FBRVcsUUFBQSxZQUFZLEdBQUc7SUFDMUI7UUFDRSxNQUFNLEVBQUUsY0FBYztRQUN0QixPQUFPLEVBQUUsc0JBQXNCO0tBQ2hDO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsT0FBTztRQUNmLE9BQU8sRUFBRSxrQkFBa0I7S0FDNUI7SUFDRDtRQUNFLE1BQU0sRUFBRSxjQUFjO1FBQ3RCLFVBQVUsRUFBRTtZQUNWO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLElBQUksRUFBRSxNQUFNO2FBQ2I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsY0FBYztnQkFDcEIsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsSUFBSSxFQUFFLE1BQU07YUFDYjtZQUNEO2dCQUNFLElBQUksRUFBRSxZQUFZO2dCQUNsQixXQUFXLEVBQUUsNkJBQTZCO2dCQUMxQyxJQUFJLEVBQUUsTUFBTTthQUNiO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLGdCQUFnQjtRQUN4QixVQUFVLEVBQUU7WUFDVjtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxXQUFXLEVBQUUsbUJBQW1CO2dCQUNoQyxLQUFLLEVBQUUsR0FBRztnQkFDVixJQUFJLEVBQUUsT0FBTzthQUNkO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osV0FBVyxFQUFFLDBCQUEwQjtnQkFDdkMsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsSUFBSSxFQUFFLE9BQU87YUFDZDtTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxvQkFBb0I7UUFDNUIsT0FBTyxFQUFFO1lBQ1Asa0JBQWtCO1lBQ2xCLDBCQUEwQjtTQUMzQjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsbUJBQW1CO1FBQzNCLE9BQU8sRUFBRTtZQUNQLDZGQUE2RjtTQUM5RjtLQUNGO0NBQ0YsQ0FBQztBQUVXLFFBQUEsZUFBZSxHQUFHO0lBQzdCO1FBQ0UsTUFBTSxFQUFFLGlCQUFpQjtRQUN6QixPQUFPLEVBQUUsMEJBQTBCO0tBQ3BDO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsT0FBTztRQUNmLE9BQU8sRUFBRSxxQkFBcUI7S0FDL0I7SUFDRDtRQUNFLE1BQU0sRUFBRSxjQUFjO1FBQ3RCLFVBQVUsRUFBRTtZQUNWO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLElBQUksRUFBRSxNQUFNO2FBQ2I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsY0FBYztnQkFDcEIsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsSUFBSSxFQUFFLE1BQU07YUFDYjtTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxnQkFBZ0I7UUFDeEIsVUFBVSxFQUFFO1lBQ1Y7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsV0FBVyxFQUFFLG1CQUFtQjtnQkFDaEMsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsSUFBSSxFQUFFLE9BQU87YUFDZDtZQUNEO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLEtBQUssRUFBRSxHQUFHO2dCQUNWLElBQUksRUFBRSxPQUFPO2FBQ2Q7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsb0JBQW9CO1FBQzVCLE9BQU8sRUFBRTtZQUNQLHFCQUFxQjtZQUNyQiw2QkFBNkI7U0FDOUI7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLG1CQUFtQjtRQUMzQixPQUFPLEVBQUU7WUFDUCwrRUFBK0U7U0FDaEY7S0FDRjtDQUNGLENBQUMifQ==