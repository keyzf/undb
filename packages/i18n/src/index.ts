import type { InitOptions } from 'i18next'
import zodEn from 'zod-i18n-map/locales/en/zod.json' assert { type: 'json' }
import zodZh from 'zod-i18n-map/locales/zh-CN/zod.json' assert { type: 'json' }

export const config: InitOptions = {
  resources: {
    en: {
      error: {
        'AUTH.USER_NOT_FOUND': 'user not found',
        'AUTH.INVALID_PASSWORD': 'invalid password',
      },
      auth: {
        login: 'Login',
        logout: 'Logout',
        'Dark Mode': 'Dark Mode',
        'Light Mode': 'Light Mode',
        'login to undb': 'Login to undb',
        'register to undb': 'register to undb',
        register: 'Register',
        email: 'Email',
        'email placeholder': 'Your email address',
        password: 'Password',
        'password placeholder': 'Password',
        'has no account': "Don't have an account yet?",
        'has account': 'Already have an account?',
        Settings: 'Settings',
        Profile: 'Profile',
        username: 'Username',
        avatar: 'Avatar',
        'Profile Helper': 'Edit your personal profile.',
        'Copy Auth Token': 'Copy Auth Token',
      },
      errors: {
        'TABLE.NOT_FOUND': 'Table not found',
      },
      common: {
        'return to home': 'Return to Home',
        'click to upload or dnd': '<strong>Click to upload</strong> or drag and drop',
        demo: 'this is a demo site for undb, you can use email: <strong>{{email}}</strong> and password: <strong>{{password}}</strong> to login',
        unamed: 'unamed',
        error: 'some error happened',
        Apply: 'Apply',
        Cancel: 'Cancel',
        Confirm: 'Confirm',
        Delete: 'Delete',
        Create: 'Create',
        Done: 'Done',
        Update: 'Update',
        Name: 'Name',
        Label: 'Label',
        Description: 'Description',
        Type: 'Type',
        asc: 'A → Z',
        desc: 'Z → A',
        Max: 'max',
        or: 'or',
        is: 'is...',
        NO_DATE: 'no date',
        BEFORE_YESTERDAY: 'before yesterday',
        YESTERDAY: 'yesterday',
        TODAY: 'today',
        TOMORROW: 'tomorrow',
        AFTER_TOMORROW: 'after tomorrow',
        $eq: 'equal',
        $neq: 'not equal',
        $contains: 'contains',
        $starts_with: 'starts with',
        $ends_with: 'ends with',
        $regex: 'regex',
        $gt: 'greater than',
        $gte: 'greater than or equal',
        $lt: 'less than',
        $lte: 'less than equal',
        $is_today: 'is today',
        $is_true: 'is true',
        $is_false: 'is false',
        $is_empty: 'is empty',
        $is_not_empty: 'is not empty',
        $has_file_type: 'has file type',
        $has_file_extension: 'has file extension',
        $in: 'in',
        $nin: 'not in',
        $is_root: 'is root',
        Reset: 'Reset',
        'Sort By Ascending': 'Sort By Ascending',
        'Sort By Descending': 'Sort By Descending',
        Required: 'Required',
        System: 'System',
        Base: 'Base',
        Lookup: 'Lookup',
        Reference: 'Reference',
        Display: 'Display Field',
        'Drag Or Click': 'Drag images here or click to select files',
        Image: 'Image',
        Video: 'Video',
        PDF: 'PDF',
        Document: 'Document',
        Excel: 'Excel',
        PPT: 'PPT',
        Text: 'Text',
        Home: 'Home',
        Tables: 'Tables',
        Members: 'Members',
        You: 'You',
        'and n more': 'and {{n}} more',
        'Confirm Yes': "Yes, I'm sure",
        'Confirm No': 'No, cancel',
        language: 'Language',
        sum: 'sum',
        average: 'avg',
        min: 'min',
        max: 'max',
        count: 'count',
        'update success': 'Updated successfully',
        Numbers: 'Numbers',
        Chart: 'Chart',
        null: 'null',
        'full screen': 'Full screen',
        Copied: 'Copied',
        anonymous: 'anonymous',
      },
      table: {
        'import data content': 'Import data (csv / excel / json)',
        'flatten import data': 'Flatten import data',
        'first row as header': 'Use First Row as Headers',
        'import data': 'Import Data',
        'Auto Display Field': 'using <strong>{{table}}</strong> display field',
        'shortcut T': 'Use shortcut {{ shortcut }} to create table from anywhere.',
        'shortcut R': 'Use shortcut {{ shortcut }} to create record in table.',
        'Create New Record': 'Create New Record',
        Views: 'Views',
        'view n': 'view {{n}}',
        Field: 'Field',
        Filter: 'Filter',
        'Field Name': 'Field Name',
        Sort: 'Sort',
        'Manage Fields': 'Manage Fields',
        'Select Display Type': 'Select Display Type',
        grid: 'Grid',
        kanban: 'Kanban',
        gantt: 'Gantt',
        dashboard: 'Dashboard',
        calendar: 'Calendar',
        treeView: 'Tree',
        'no display fields in': 'There is no display fields in table: {{table}}',
        'Display Fields': 'Display Fields',
        'Select View': 'Select View',
        'Update View Name': 'Update View Name',
        'Duplicate View': 'Duplicate View',
        Export: 'Export',
        'Export CSV': 'Export CSV',
        'Export Excel': 'Export Excel',
        'Export Json': 'Export Json',
        'Delete View': 'Delete View',
        'Delete Record': 'Delete Record',
        'Search Field': 'Search Field',
        'set filters in this view': 'Set filters in this view',
        'no filters applied': 'No filters applied',
        'set sorts in this view': 'Set sorts in this view',
        'no sorts applied': 'No sorts applied',
        'Select Field': 'Select Field',
        'Select Table': 'Select Table',
        'Create New Table': 'Create New Table',
        'Create New Field': 'Create New Field',
        'Create New Filter': 'Create New Filter',
        'Create New Sort': 'Create New Sort',
        'Update Field': 'Update Field',
        'Insert Field Left': 'Insert Left',
        'Insert Field Right': 'Insert Right',
        'Insert Field Before': 'Insert Before',
        'Insert Field After': 'Insert After',
        'Sort Ascending': 'Sort: Ascending',
        'Sort Descending': 'Sort: Descending',
        'Delete Sort Ascending': 'Delete Sort: Ascending',
        'Delete Sort Descending': 'Delete Sort: Descending',
        'Hide Field': 'Hide Field',
        'Delete Field': 'Delete Field',
        'Duplicate Field': 'Duplicate Field',
        'Set Rating Max': 'Set Rating Max',
        'Foreign Table': 'Foreign Table',
        'Select Foreign Table': 'Select Foreign Table',
        'Select Display Fields': 'Select Display Fields',
        'Date Format': 'Date Format',
        'Time Format': 'Time Format',
        'Select Date Format': 'Select Date Format',
        'Edit Table': 'Edit Table',
        string: 'String',
        email: 'Email',
        url: 'Url',
        json: 'Json',
        attachment: 'Attachment',
        color: 'Color',
        number: 'Number',
        rating: 'Rating',
        currency: 'Currency',
        date: 'Date',
        'date-range': 'Date Range',
        'auto-increment': 'Auto Increment',
        bool: 'Bool',
        select: 'Select',
        'multi-select': 'Multi Select',
        reference: 'Reference',
        collaborator: 'Collaborator',
        count: 'Count',
        sum: 'Sum',
        average: 'Average',
        min: 'Min',
        max: 'Max',
        tree: 'Tree',
        lookup: 'Lookup',
        'created-at': 'createdAt',
        'created-by': 'createdBy',
        'updated-at': 'updatedAt',
        'updated-by': 'updatedBy',
        'Duplicate Record': 'Duplicate Record',
        'Duplicate Selected Record': 'Duplicate Selected',
        'Copy Record Id': 'Copy Record Id',
        'Update Record': 'Update Record',
        'Delete Selected Record': 'Delete Selected',
        'System fields': 'System fields',
        'Show System Fields': 'Show System Fields',
        'Update Table': 'Update Table',
        'Update Table Name': 'Update Table Name',
        'Delete Table': 'Delete Table',
        'Confirm Delete Table': 'Are you sure to delete table?',
        'Confirm Delete Record': 'Are you sure to delete record?',
        'Confirm Delete Field': 'Are you sure to delete field?',
        'Total Records': 'loaded {{total}} records',
        'Create New Option': 'Create New Option',
        Options: 'Options',
        'Option Name': 'Option Name',
        'Parent Field Name': 'Parent Field Name',
        'Set Parent Field Name': 'Set Parent Field Name',
        'Please confirm your action': 'Please confirm your action',
        'Confirm action content': 'You have unsaved changes. Do you really want to close the panel?',
        'Select Existing Field': 'Select Existing Field',
        'Select Kanban Field': 'Select Kanban Field',
        'Create New Date Field': 'Create New Date Field',
        'Create New Date Range Field': 'Create New Date Range Field',
        'Create New Select Field': 'Create New Select Field',
        UNCATEGORIZED: 'Uncategorized',
        'Update Option': 'Update Option',
        'Delete Option': 'Delete Option',
        'Confirm Delete Option': 'Are you sure to delete option？',
        'Select Calendar Field': 'Select Calendar Field',
        'Create New View': 'Create New View',
        'Select Tree Field': 'Select Tree Field',
        'Create New Tree Field': 'Create New Tree Field',
        'Unscheduled Records': 'Unscheduled Records',
        'No More Unscheduled Records': 'There are no more unscheduled records.',
        'Using Field': 'using "{{name}}" field',
        'Pin Field': 'Pin',
        'Unset Pin Field': 'Unset Pin',
        'Selected N Records': 'Selected <strong>{{n}}</strong> Record(s)',
        'N Views': '{{n}} view(s)',
        'Add Description': 'Add Description',
        'Reference Field': 'Reference Field',
        'Select Reference Field': 'Select Reference Field',
        'Aggregate Field': 'Aggregate Field',
        'Select Aggregate Field': 'Select Aggregate Field',
        Bidirectional: 'Bidirectional',
        'Missing Foreign Table': 'Missing Foreign Table',
        'Insert Lookup Fields': 'Insert Lookup Fields',
        'Insert Lookup Field': 'Insert Lookup Field',
        'Insert Count Field': 'Insert Count Field',
        'Insert Sum Field': 'Insert Sum Field',
        'Insert Average Field': 'Insert Average Field',
        'Custom Display Fields': 'Custom Display Field',
        'N Fields Hidden': '{{n}} fields hidden',
        'Force Refresh': 'Force Refresh',
        'Select Record': 'Select Record',
        'Select Option': 'Select Option',
        'no record available': 'There is no record available to select',
        'Select Collaborator': 'Select Collaborator',
        short: 'short',
        medium: 'medium',
        tall: 'tall',
        'new field': 'new',
        'visualization count': 'count',
        'visualization bar': 'bar',
        'add widget': 'Add Widget',
        'aggregate mode table': 'count',
        'aggregate mode field': 'fields',
        'delete widget': 'Delete Widget',
        'jump to table': 'jump to {{name}}',
        'display time': 'display time',
        '12 hour': '12 hour',
        '24 hour': '24 hour',
        'duplicate field include values': 'include values',
        updatingTypeTip: 'Updating from {{type}} to {{newType}}',
        updatingType: {
          select: 'New options will be generated according to existing values',
        },
        'download openapi': 'Download Open API',
        'openapi spec': 'Open API Spec',
        'postman collections': 'Postman Collections',
        Search: 'Search String Fields',
        'API Preview': 'API Preview',
        share: 'Share',
        'enable share': 'Enable share',
        'disable share': 'Disable share',
        'form submitted': 'Successfully submitted form data',
        'hide form all': 'hide all fields',
        'show form all': 'show all fields',
      },
      webhook: {
        Webhook: 'Webhook',
        'Create New Webhook': 'Create New Webhook',
        Enabled: 'Enabled',
        Disabled: 'Disabled',
        Name: 'Name',
        URL: 'URL',
        Method: 'Method',
        Event: 'Event',
        Headers: 'Headers',
        'Add Header': 'Add Header',
      },
      event: {
        'record.*': 'All Record Events',
        'record.created': 'Record Created',
        'record.updated': 'Record Updated',
        'record.deleted': 'Record Deleted',
        'record.bulk_created': 'Record Bulk Created',
        'record.bulk_updated': 'Record Bulk Updated',
        'record.bulk_deleted': 'Record Bulk Deleted',
      },
      zod: zodEn,
    },
    'zh-CN': {
      error: {
        'AUTH.USER_NOT_FOUND': '没有找到用户',
        'AUTH.INVALID_PASSWORD': '密码不正确',
      },
      auth: {
        login: '登录',
        logout: '退出登录',
        'Dark Mode': '黑暗模式',
        'Light Mode': '白昼模式',
        register: '注册',
        email: '邮箱',
        'email placeholder': '邮箱地址',
        password: '密码',
        'password placeholder': '密码',
        'has no account': '还没有账号？',
        'has account': '已有账号？',
        'login to undb': '登录到 undb',
        'register to undb': '注册 undb 账号',
        Settings: '设置账号',
        Profile: '简介',
        username: '用户名',
        avatar: '头像',
        'Profile Helper': '编辑你的个人简介',
        'Copy Auth Token': '复制 Auth 令牌',
      },
      errors: {
        'TABLE.NOT_FOUND': '没有找到表格',
      },
      common: {
        'return to home': '返回首页',
        'click to upload or dnd': '<strong>点击上传</strong>或拖拽文件',
        demo: '这是 undb 的 demo 网站，你可以使用邮箱: <strong>{{email}}</strong> 和密码：<strong>{{password}}</strong> 登录',
        unamed: '未命名记录',
        error: '发生错误',
        Apply: '应用',
        Cancel: '取消',
        Confirm: '确认',
        Delete: '删除',
        Create: '创建',
        Done: '完成',
        Update: '更新',
        Name: '名称',
        Label: '标签',
        Description: '描述',
        Type: '类型',
        asc: '正序',
        desc: '倒序',
        Max: '最大值',
        is: '是',
        or: '或',
        NO_DATE: '无日期',
        BEFORE_YESTERDAY: '昨天之前',
        YESTERDAY: '昨天',
        TODAY: '今天',
        TOMORROW: '明天',
        AFTER_TOMORROW: '明天之后',
        $eq: '等于',
        $neq: '不等于',
        $contains: '包含',
        $starts_with: '开头是',
        $ends_with: '结尾是',
        $regex: '正则匹配',
        $gt: '大于',
        $gte: '大于等于',
        $lt: '小于',
        $lte: '小于等于',
        $is_today: '是今天',
        $is_true: '为真',
        $is_false: '为假',
        $is_empty: '为空',
        $is_not_empty: '不为空',
        $has_file_type: '包含文件类型',
        $has_file_extension: '包含文件后缀',
        $in: '包含在',
        $nin: '不包含在',
        $is_root: '是根',
        Reset: '重置',
        'Sort By Ascending': '正序排序',
        'Sort By Descending': '倒序排序',
        Required: '必填',
        System: '系统',
        Base: '基础',
        Lookup: '查看',
        Reference: '关联',
        Display: '显示列',
        'Drag Or Click': '拖拽或点击此处上传文件',
        Image: '图像',
        Video: '视频',
        PDF: 'PDF',
        Document: '文档',
        Excel: '电子表格',
        PPT: 'PPT',
        Text: '文本',
        Home: '首页',
        Tables: '表格',
        Members: '成员管理',
        You: '本人',
        'and n more': '等 {{n}} 个',
        'Confirm Yes': '确认删除',
        'Confirm No': '取消操作',
        language: '多语言',
        sum: '和',
        average: '平均值',
        min: '最小值',
        max: '最大值',
        count: '计数',
        'update success': '更新成功',
        Numbers: '计数',
        Chart: '图表',
        null: '空',
        'full screen': '全屏',
        Copied: '已复制',
        anonymous: '匿名用户',
      },
      table: {
        'import data content': '导入数据 (csv / excel /json)',
        'flatten import data': '扁平化字段',
        'first row as header': '使用第一行作为列标题',
        'import data': '导入行数据',
        'Auto Display Field': '使用 <strong>{{table}}</strong> 表中设置的显示列',
        'shortcut T':
          '使用快捷键 <span class="bg-gray-100 text-gray-800 text-xs font-medium mx-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{{shortcut}}</span> 在任何页面创建表。',
        'shortcut R':
          '使用快捷键 <span class="bg-gray-100 text-gray-800 text-xs font-medium mx-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{{shortcut}}</span> 在表格内创建记录。',
        'Create New Record': '创建新记录',
        Views: '视图',
        'view n': '视图 {{n}}',
        Field: '列',
        Filter: '筛选',
        Sort: '排序',
        'Field Name': '列名',
        'Manage Fields': '配置列',
        'Select Display Type': '切换视图类型',
        grid: '表格',
        kanban: '看板',
        gantt: '甘特图',
        dashboard: '仪表盘',
        calendar: '日历',
        treeView: '树形',
        'no display fields in': '{{table}} 中没有设置显示列',
        'Display Fields': '显示列',
        'Select View': '选择视图',
        'Update View Name': '更新视图名称',
        'Duplicate View': '复制视图',
        Export: '导出',
        'Export CSV': '导出 CSV',
        'Export Excel': '导出 Excel',
        'Export Json': '导出 Json',
        'Delete View': '删除视图',
        'Delete Record': '删除记录',
        'Search Field': '搜索列',
        'set filters in this view': '在当前视图设置筛选',
        'no filters applied': '当前视图没有应用筛选',
        'set sorts in this view': '在当前视图设置筛选',
        'no sorts applied': '当前视图没有应用排序',
        'Select Field': '选择列',
        'Select Table': '选择表',
        'Create New Table': '创建新表',
        'Create New Field': '创建列',
        'Create New Filter': '添加筛选',
        'Create New Sort': '添加排序',
        'Update Field': '更新列',
        'Insert Field Left': '向左插入列',
        'Insert Field Right': '向右插入列',
        'Insert Field Before': '向上插入列',
        'Insert Field After': '向下插入列',
        'Sort Ascending': '排序：正序',
        'Sort Descending': '排序：倒序',
        'Delete Sort Ascending': '删除排序：正序',
        'Delete Sort Descending': '删除排序：倒序',
        'Hide Field': '隐藏列',
        'Delete Field': '删除列',
        'Duplicate Field': '复制列',
        'Set Rating Max': '设置评分最大值',
        'Foreign Table': '关联表',
        'Select Foreign Table': '选择关联表',
        'Select Display Fields': '选择显示列',
        'Date Format': '日期格式',
        'Time Format': '时间格式',
        'Select Date Format': '选择日期格式',
        'Edit Table': '配置表',
        string: '文本',
        email: '邮件',
        url: '链接',
        json: 'Json',
        attachment: '附件',
        color: '颜色',
        number: '数字',
        rating: '评分',
        currency: '货币',
        date: '日期',
        'date-range': '日期区间',
        'auto-increment': '自增',
        bool: '布尔',
        select: '单选',
        'multi-select': '多选',
        reference: '关联',
        collaborator: '成员',
        count: '计数',
        sum: '求和',
        average: '平均值',
        min: '最小值',
        max: '最大值',
        tree: '树形',
        lookup: '查看',
        'created-at': '创建时间',
        'created-by': '创建者',
        'updated-at': '更新时间',
        'updated-by': '更新者',
        'Duplicate Record': '复制记录',
        'Duplicate Selected Record': '复制选中的记录',
        'Copy Record Id': '拷贝行 Id',
        'Update Record': '更新记录',
        'Delete Selected Record': '删除选中记录',
        'System fields': '系统列',
        'Show System Fields': '显示系统列',
        'Update Table': '更新表',
        'Update Table Name': '更新表名',
        'Delete Table': '删除表',
        'Confirm Delete Table': '确认删除表吗？',
        'Confirm Delete Record': '确认删除记录吗？',
        'Confirm Delete Field': '确认删除列吗？',
        'Total Records': '载入 {{total}} 行记录',
        Options: '选项',
        'Create New Option': '创建新选项',
        'Option Name': '选项名',
        'Parent Field Name': '父列名称',
        'Set Parent Field Name': '设置父列名称',
        'Please confirm your action': '确认操作',
        'Confirm action content': '你有未保存的操作，确认关闭弹窗吗？',
        'Select Existing Field': '选择已有列',
        'Select Kanban Field': '选择看板列',
        'Create New Date Field': '创建新日期列',
        'Create New Date Range Field': '创建新日期区间列',
        'Create New Select Field': '创建新选项列',
        UNCATEGORIZED: '无选项',
        'Update Option': '更新选项',
        'Delete Option': '删除选项',
        'Confirm Delete Option': '确认删除选项吗？',
        'Select Calendar Field': '选择日历列',
        'Create New View': '创建新视图',
        'Select Tree Field': '选择树形列',
        'Create New Tree Field': '创建新树形列',
        'Unscheduled Records': '未计划记录',
        'No More Unscheduled Records': '没有更多未计划的记录。',
        'Using Field': '使用 "{{name}}" 列',
        'Pin Field': '固定列',
        'Unset Pin Field': '取消固定列',
        'Selected N Records': '选择了 <strong>{{n}}</strong> 条记录',
        'N Views': '{{n}} 个视图',
        'Add Description': '添加列描述',
        'Reference Field': '关联列',
        'Select Reference Field': '选择关联列',
        'Aggregate Field': '聚合列',
        'Select Aggregate Field': '选择聚合列',
        Bidirectional: '双向关联',
        'Missing Foreign Table': '没有关联表，可能被删除',
        'Insert Lookup Fields': '插入关联查看列',
        'Insert Lookup Field': '插入查看列',
        'Insert Count Field': '插入计数列',
        'Insert Sum Field': '插入求和列',
        'Insert Average Field': '插入平均值列',
        'Custom Display Fields': '自定义显示列',
        'N Fields Hidden': '{{n}} 列隐藏',
        'Force Refresh': '强制刷新',
        'Select Record': '选择记录',
        'Select Option': '选择选项',
        'no record available': '没有可选择的记录',
        'Select Collaborator': '选择成员',
        short: '矮',
        medium: '中',
        tall: '高',
        'new field': '新列',
        'visualization count': '计数',
        'visualization bar': '柱状图',
        'add widget': '添加控件',
        'aggregate mode table': '行计数',
        'aggregate mode field': '按列统计',
        'delete widget': '删除控件',
        'no numberic fields': '没有数字列',
        'jump to table': '跳转到 {{name}}',
        'display time': '显示时间',
        '12 hour': '12 小时制',
        '24 hour': '24 小时制',
        'duplicate field include values': '复制包含值',
        updatingTypeTip: '从 {{type}} 更新类型到 {{newType}}',
        updatingType: {
          select: '根据已有列的值创建新的选项值',
        },
        'download openapi': '下载 Open API',
        'openapi spec': 'Open API 规范',
        'postman collections': 'Postman 集合',
        Search: '搜索文本类型字段',
        'API Preview': 'API 预览',
        share: '分享',
        'enable share': '开启分享',
        'disable share': '关闭分享',
        'form submitted': '成功提交表单',
        'hide form all': '隐藏所有字段',
        'show form all': '显示所有字段',
      },
      webhook: {
        Webhook: 'Webhook',
        'Create New Webhook': '创建 Webhook',
        Enabled: '启用',
        Disabled: '禁用',
        Name: '名称',
        URL: 'URL',
        Method: '请求方法',
        Event: '事件',
        Headers: '自定义请求头',
        'Add Header': '添加自定义请求头',
      },
      event: {
        'record.*': '所有行事件',
        'record.created': '行创建',
        'record.updated': '行更新',
        'record.deleted': '行删除',
        'record.bulk_created': '批量行创建',
        'record.bulk_updated': '批量行更新',
        'record.bulk_deleted': '批量行删除',
      },
      zod: zodZh,
    },
  },
  ns: ['common', 'table', 'zod'],
  defaultNS: 'table',
  lng: undefined, // if you're using a language detector, do not define the lng option
  fallbackLng: 'en',

  detection: {
    order: ['querystring', 'cookie', 'localStorage', 'navigator'],
    caches: ['cookie', 'localStorage'],
    lookupQuerystring: 'lng',
    lookupCookie: 'lng',
    lookupLocalStorage: 'lng',
  },

  interpolation: {
    escapeValue: false,
  },
}
