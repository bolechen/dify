const translation = {
  title: '工具',
  createCustomTool: '建立自定義工具',
  type: {
    all: '全部',
    builtIn: '內建',
    custom: '自定義',
    workflow: '工作流',
  },
  contribute: {
    line1: '我有興趣為 ',
    line2: 'Dify 貢獻工具。',
    viewGuide: '檢視指南',
  },
  author: '作者',
  auth: {
    unauthorized: '去授權',
    authorized: '已授權',
    setup: '要使用請先授權',
    setupModalTitle: '設定授權',
    setupModalTitleDescription: '配置憑據後，工作區中的所有成員都可以在編排應用程式時使用此工具。',
  },
  includeToolNum: '包含 {{num}} 個工具',
  addTool: '新增工具',
  createTool: {
    title: '建立自定義工具',
    editAction: '編輯',
    editTitle: '編輯自定義工具',
    name: '名稱',
    toolNamePlaceHolder: '輸入工具名稱',
    schema: 'Schema',
    schemaPlaceHolder: '在此處輸入您的 OpenAPI schema',
    viewSchemaSpec: '檢視 OpenAPI-Swagger 規範',
    importFromUrl: '從 URL 中匯入',
    importFromUrlPlaceHolder: 'https://...',
    urlError: '請輸入有效的 URL',
    examples: '例子',
    exampleOptions: {
      json: '天氣(JSON)',
      yaml: '寵物商店(YAML)',
      blankTemplate: '空白模版',
    },
    availableTools: {
      title: '可用工具',
      name: '名稱',
      description: '描述',
      method: '方法',
      path: '路徑',
      action: '操作',
      test: '測試',
    },
    authMethod: {
      title: '鑑權方法',
      type: '鑑權型別',
      keyTooltip: 'HTTP 頭部名稱，如果你不知道是什麼，可以將其保留為 Authorization 或設定為自定義值',
      types: {
        none: '無',
        api_key: 'API Key',
        apiKeyPlaceholder: 'HTTP 頭部名稱，用於傳遞 API Key',
        apiValuePlaceholder: '輸入 API Key',
      },
      key: '鍵',
      value: '值',
    },
    authHeaderPrefix: {
      title: '鑑權頭部字首',
      types: {
        basic: 'Basic',
        bearer: 'Bearer',
        custom: 'Custom',
      },
    },
    privacyPolicy: '隱私協議',
    privacyPolicyPlaceholder: '請輸入隱私協議',
    customDisclaimer: '自定義免責聲明',
    customDisclaimerPlaceholder: '請輸入自定義免責聲明',
    deleteToolConfirmTitle: '刪除這個工具？',
    deleteToolConfirmContent: '刪除工具是不可逆的。用戶將無法再訪問您的工具。',
    toolInput: {
      labelPlaceholder: '選擇標籤（選擇標籤）',
      label: '標籤',
      required: '必填',
      methodSettingTip: '用戶填寫工具配置',
      name: '名字',
      description: '描述',
      methodParameterTip: '推理期間 LLM 填充',
      method: '方法',
      title: '工具輸入',
      methodSetting: '設置',
      methodParameter: '參數',
      descriptionPlaceholder: '參數含義的描述',
    },
    description: '描述',
    nameForToolCall: '工具調用名稱',
    confirmTitle: '確認儲存 ？',
    descriptionPlaceholder: '工具用途的簡要描述，例如，獲取特定位置的溫度。',
    nameForToolCallTip: '僅支援數位、字母和下劃線。',
    confirmTip: '使用此工具的應用程式將受到影響',
    nameForToolCallPlaceHolder: '用於機器識別，例如 getCurrentWeather、list_pets',
  },
  test: {
    title: '測試',
    parametersValue: '引數和值',
    parameters: '引數',
    value: '值',
    testResult: '測試結果',
    testResultPlaceholder: '測試結果將顯示在這裡',
  },
  thought: {
    using: '正在使用',
    used: '已使用',
    requestTitle: '請求來自',
    responseTitle: '響應來自',
  },
  setBuiltInTools: {
    info: '資訊',
    setting: '設定',
    toolDescription: '工具描述',
    parameters: '引數',
    string: '字串',
    number: '數字',
    required: '必填',
    infoAndSetting: '資訊和設定',
  },
  noCustomTool: {
    title: '沒有自定義工具!',
    content: '在此統一新增和管理你的自定義工具，方便構建應用時使用。',
    createTool: '建立工具',
  },
  noSearchRes: {
    title: '抱歉，沒有結果！',
    content: '我們找不到任何與您的搜尋相匹配的工具。',
    reset: '重置搜尋',
  },
  builtInPromptTitle: '提示詞',
  toolRemoved: '工具已被移除',
  notAuthorized: '工具未授權',
  howToGet: '如何獲取',
  addToolModal: {
    add: '加',
    type: '類型',
    added: '添加',
    manageInTools: '在工具中管理',
    category: '類別',
    emptyTitle: '沒有可用的工作流程工具',
    emptyTip: '轉到“工作流 - >發佈為工具”',
    emptyTipCustom: '創建自訂工具',
    emptyTitleCustom: '沒有可用的自訂工具',
  },
  customToolTip: '瞭解有關 Dify 自訂工具的更多資訊',
  toolNameUsageTip: '用於代理推理和提示的工具調用名稱',
  openInStudio: '在 Studio 中打開',
}

export default translation
