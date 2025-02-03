const translation = {
  api: {
    success: 'Éxito',
    actionSuccess: 'Acción exitosa',
    saved: 'Guardado',
    create: 'Creado',
    remove: 'Eliminado',
  },
  operation: {
    create: 'Crear',
    confirm: 'Confirmar',
    cancel: 'Cancelar',
    clear: 'Limpiar',
    save: 'Guardar',
    saveAndEnable: 'Guardar y habilitar',
    edit: 'Editar',
    add: 'Agregar',
    added: 'Agregado',
    refresh: 'Reiniciar',
    reset: 'Restablecer',
    search: 'Buscar',
    change: 'Cambiar',
    remove: 'Eliminar',
    send: 'Enviar',
    copy: 'Copiar',
    lineBreak: 'Salto de línea',
    sure: 'Estoy seguro',
    download: 'Descargar',
    delete: 'Eliminar',
    settings: 'Configuraciones',
    setup: 'Configurar',
    getForFree: 'Obtener gratis',
    reload: 'Recargar',
    ok: 'OK',
    log: 'Registro',
    learnMore: 'Aprender más',
    params: 'Parámetros',
    duplicate: 'Duplicar',
    rename: 'Renombrar',
    audioSourceUnavailable: 'AudioSource no está disponible',
    zoomOut: 'Alejar',
    zoomIn: 'Acercar',
    openInNewTab: 'Abrir en una nueva pestaña',
    copyImage: 'Copiar imagen',
    viewMore: 'VER MÁS',
    regenerate: 'Regenerar',
    close: 'Cerrar',
    saveAndRegenerate: 'Guardar y regenerar fragmentos secundarios',
    view: 'Vista',
    submit: 'Enviar',
    skip: 'Navío',
    imageCopied: 'Imagen copiada',
  },
  errorMsg: {
    fieldRequired: '{{field}} es requerido',
    urlError: 'la URL debe comenzar con http:// o https://',
  },
  placeholder: {
    input: 'Por favor ingresa',
    select: 'Por favor selecciona',
  },
  voice: {
    language: {
      zhHans: 'Chino',
      zhHant: 'Chino Tradicional',
      enUS: 'Inglés',
      deDE: 'Alemán',
      frFR: 'Francés',
      esES: 'Español',
      itIT: 'Italiano',
      thTH: 'Tailandés',
      idID: 'Indonesio',
      jaJP: 'Japonés',
      koKR: 'Coreano',
      ptBR: 'Portugués',
      ruRU: 'Ruso',
      ukUA: 'Ucraniano',
      viVN: 'Vietnamita',
      plPL: 'Polaco',
      roRO: 'Rumano',
      hiIN: 'Hindi',
      trTR: 'Turco',
      faIR: 'Persa',
    },
  },
  unit: {
    char: 'caracteres',
  },
  actionMsg: {
    noModification: 'No hay modificaciones en este momento.',
    modifiedSuccessfully: 'Modificado exitosamente',
    modifiedUnsuccessfully: 'Modificación no exitosa',
    copySuccessfully: 'Copiado exitosamente',
    paySucceeded: 'Pago exitoso',
    payCancelled: 'Pago cancelado',
    generatedSuccessfully: 'Generado exitosamente',
    generatedUnsuccessfully: 'Generación no exitosa',
  },
  model: {
    params: {
      temperature: 'Temperatura',
      temperatureTip:
        'Controla la aleatoriedad: Reducir resulta en completaciones menos aleatorias. A medida que la temperatura se acerca a cero, el modelo se vuelve determinista y repetitivo.',
      top_p: 'Top P',
      top_pTip:
        'Controla la diversidad mediante el muestreo de núcleo: 0.5 significa que se consideran la mitad de todas las opciones ponderadas por probabilidad.',
      presence_penalty: 'Penalización por presencia',
      presence_penaltyTip:
        'Cuánto penalizar los nuevos tokens según si aparecen en el texto hasta ahora.\nAumenta la probabilidad del modelo de hablar sobre nuevos temas.',
      frequency_penalty: 'Penalización por frecuencia',
      frequency_penaltyTip:
        'Cuánto penalizar los nuevos tokens según su frecuencia existente en el texto hasta ahora.\nDisminuye la probabilidad del modelo de repetir la misma línea literalmente.',
      max_tokens: 'Tokens máximos',
      max_tokensTip:
        'Se usa para limitar la longitud máxima de la respuesta, en tokens. \nValores más grandes pueden limitar el espacio disponible para palabras de indicación, registros de chat y Conocimiento. \nSe recomienda configurarlo por debajo de dos tercios\ngpt-4-1106-preview, gpt-4-vision-preview tokens máximos (entrada 128k salida 4k)',
      maxTokenSettingTip: 'Tu configuración de tokens máximos es alta, lo que puede limitar el espacio para indicaciones, consultas y datos. Considera configurarlo por debajo de 2/3.',
      setToCurrentModelMaxTokenTip: 'Tokens máximos actualizados al 80% del máximo de tokens del modelo actual {{maxToken}}.',
      stop_sequences: 'Secuencias de parada',
      stop_sequencesTip: 'Hasta cuatro secuencias donde la API dejará de generar más tokens. El texto devuelto no contendrá la secuencia de parada.',
      stop_sequencesPlaceholder: 'Ingresa la secuencia y presiona Tab',
    },
    tone: {
      Creative: 'Creativo',
      Balanced: 'Equilibrado',
      Precise: 'Preciso',
      Custom: 'Personalizado',
    },
    addMoreModel: 'Ir a configuraciones para agregar más modelos',
  },
  menus: {
    status: 'beta',
    explore: 'Explorar',
    apps: 'Estudio',
    plugins: 'Plugins',
    pluginsTips: 'Integrar plugins de terceros o crear Plugins AI compatibles con ChatGPT.',
    datasets: 'Conocimiento',
    datasetsTips: 'PRÓXIMAMENTE: Importa tus propios datos de texto o escribe datos en tiempo real a través de Webhook para la mejora del contexto LLM.',
    newApp: 'Nueva App',
    newDataset: 'Crear Conocimiento',
    tools: 'Herramientas',
  },
  userProfile: {
    settings: 'Configuraciones',
    emailSupport: 'Soporte de Correo Electrónico',
    workspace: 'Espacio de trabajo',
    createWorkspace: 'Crear espacio de trabajo',
    helpCenter: 'Ayuda',
    communityFeedback: 'Comentarios',
    roadmap: 'Hoja de ruta',
    community: 'Comunidad',
    about: 'Acerca de',
    logout: 'Cerrar sesión',
  },
  settings: {
    accountGroup: 'CUENTA',
    workplaceGroup: 'ESPACIO DE TRABAJO',
    account: 'Mi cuenta',
    members: 'Miembros',
    billing: 'Facturación',
    integrations: 'Integraciones',
    language: 'Idioma',
    provider: 'Proveedor de Modelo',
    dataSource: 'Fuente de Datos',
    plugin: 'Plugins',
    apiBasedExtension: 'Extensión basada en API',
  },
  account: {
    avatar: 'Avatar',
    name: 'Nombre',
    email: 'Correo electrónico',
    password: 'Contraseña',
    passwordTip: 'Puedes establecer una contraseña permanente si no deseas usar códigos de inicio de sesión temporales',
    setPassword: 'Establecer una contraseña',
    resetPassword: 'Restablecer contraseña',
    currentPassword: 'Contraseña actual',
    newPassword: 'Nueva contraseña',
    confirmPassword: 'Confirmar contraseña',
    notEqual: 'Las dos contraseñas son diferentes.',
    langGeniusAccount: 'Cuenta Dify',
    langGeniusAccountTip: 'Tu cuenta Dify y los datos de usuario asociados.',
    editName: 'Editar Nombre',
    showAppLength: 'Mostrar {{length}} apps',
    delete: 'Eliminar cuenta',
    deleteTip: 'Eliminar tu cuenta borrará permanentemente todos tus datos y no se podrán recuperar.',
    deleteConfirmTip: 'Para confirmar, por favor envía lo siguiente desde tu correo electrónico registrado a ',
    account: 'Cuenta',
    myAccount: 'Mi Cuenta',
    studio: 'Estudio Dify',
    deletePrivacyLinkTip: 'Para obtener más información sobre cómo manejamos sus datos, consulte nuestra',
    deletePrivacyLink: 'Política de privacidad.',
    deleteSuccessTip: 'Su cuenta necesita tiempo para terminar de eliminarse. Te enviaremos un correo electrónico cuando todo esté listo.',
    deleteLabel: 'Para confirmar, escriba su correo electrónico a continuación',
    deletePlaceholder: 'Por favor, introduzca su correo electrónico',
    sendVerificationButton: 'Enviar código de verificación',
    verificationLabel: 'Código de verificación',
    verificationPlaceholder: 'Pega el código de 6 dígitos',
    permanentlyDeleteButton: 'Eliminar cuenta de forma permanente',
    feedbackTitle: 'Retroalimentación',
    feedbackLabel: '¿Cuéntanos por qué eliminaste tu cuenta?',
    feedbackPlaceholder: 'Opcional',
  },
  members: {
    team: 'Equipo',
    invite: 'Agregar',
    name: 'NOMBRE',
    lastActive: 'ÚLTIMA ACTIVIDAD',
    role: 'ROLES',
    pending: 'Pendiente...',
    owner: 'Propietario',
    admin: 'Administrador',
    adminTip: 'Puede crear aplicaciones y administrar configuraciones del equipo',
    normal: 'Normal',
    normalTip: 'Solo puede usar aplicaciones, no puede crear aplicaciones',
    builder: 'Constructor',
    builderTip: 'Puede crear y editar sus propias aplicaciones',
    editor: 'Editor',
    editorTip: 'Puede crear y editar aplicaciones',
    datasetOperator: 'Administrador de Conocimiento',
    datasetOperatorTip: 'Solo puede administrar la base de conocimiento',
    inviteTeamMember: 'Agregar miembro del equipo',
    inviteTeamMemberTip: 'Pueden acceder a tus datos del equipo directamente después de iniciar sesión.',
    emailNotSetup: 'El servidor de correo no está configurado, por lo que no se pueden enviar correos de invitación. En su lugar, notifique a los usuarios el enlace de invitación que se emitirá después de la invitación.',
    email: 'Correo electrónico',
    emailInvalid: 'Formato de correo electrónico inválido',
    emailPlaceholder: 'Por favor ingresa correos electrónicos',
    sendInvite: 'Enviar invitación',
    invitedAsRole: 'Invitado como usuario {{role}}',
    invitationSent: 'Invitación enviada',
    invitationSentTip: 'Invitación enviada, y pueden iniciar sesión en Dify para acceder a tus datos del equipo.',
    invitationLink: 'Enlace de invitación',
    failedInvitationEmails: 'Los siguientes usuarios no fueron invitados exitosamente',
    ok: 'OK',
    removeFromTeam: 'Eliminar del espacio de trabajo',
    removeFromTeamTip: 'Se eliminará el acceso al equipo',
    setAdmin: 'Establecer como administrador',
    setMember: 'Establecer como miembro ordinario',
    setBuilder: 'Establecer como constructor',
    setEditor: 'Establecer como editor',
    disInvite: 'Cancelar la invitación',
    deleteMember: 'Eliminar miembro',
    you: '(Tú)',
  },
  integrations: {
    connected: 'Conectado',
    google: 'Google',
    googleAccount: 'Iniciar sesión con cuenta de Google',
    github: 'GitHub',
    githubAccount: 'Iniciar sesión con cuenta de GitHub',
    connect: 'Conectar',
  },
  language: {
    displayLanguage: 'Idioma de visualización',
    timezone: 'Zona horaria',
  },
  provider: {
    apiKey: 'Clave API',
    enterYourKey: 'Ingresa tu clave API aquí',
    invalidKey: 'Clave API de OpenAI inválida',
    validatedError: 'Validación fallida: ',
    validating: 'Validando clave...',
    saveFailed: 'Error al guardar la clave API',
    apiKeyExceedBill: 'Esta CLAVE API no tiene cuota disponible, por favor lee',
    addKey: 'Agregar Clave',
    comingSoon: 'Próximamente',
    editKey: 'Editar',
    invalidApiKey: 'Clave API inválida',
    azure: {
      apiBase: 'Base API',
      apiBasePlaceholder: 'La URL base de la API de tu Endpoint de Azure OpenAI.',
      apiKey: 'Clave API',
      apiKeyPlaceholder: 'Ingresa tu clave API aquí',
      helpTip: 'Aprender sobre el Servicio Azure OpenAI',
    },
    openaiHosted: {
      openaiHosted: 'OpenAI Hospedado',
      onTrial: 'EN PRUEBA',
      exhausted: 'CUOTA AGOTADA',
      desc: 'El servicio de hospedaje OpenAI proporcionado por Dify te permite usar modelos como GPT-3.5. Antes de que se agote tu cuota de prueba, necesitas configurar otros proveedores de modelos.',
      callTimes: 'Tiempos de llamada',
      usedUp: 'Cuota de prueba agotada. Agrega tu propio proveedor de modelos.',
      useYourModel: 'Actualmente usando tu propio proveedor de modelos.',
      close: 'Cerrar',
    },
    anthropicHosted: {
      anthropicHosted: 'Claude de Anthropíc',
      onTrial: 'EN PRUEBA',
      exhausted: 'CUOTA AGOTADA',
      desc: 'Modelo poderoso, que se destaca en una amplia gama de tareas, desde diálogos sofisticados y generación de contenido creativo hasta instrucciones detalladas.',
      callTimes: 'Tiempos de llamada',
      usedUp: 'Cuota de prueba agotada. Agrega tu propio proveedor de modelos.',
      useYourModel: 'Actualmente usando tu propio proveedor de modelos.',
      close: 'Cerrar',
    },
    anthropic: {
      using: 'La capacidad de incrustación está usando',
      enableTip: 'Para habilitar el modelo de Anthropíc, primero necesitas vincularte al Servicio OpenAI o Azure OpenAI.',
      notEnabled: 'No habilitado',
      keyFrom: 'Obtén tu clave API de Anthropíc',
    },
    encrypted: {
      front: 'Tu CLAVE API será encriptada y almacenada usando',
      back: ' tecnología.',
    },
  },
  modelProvider: {
    notConfigured: 'El modelo del sistema aún no ha sido completamente configurado, y algunas funciones pueden no estar disponibles.',
    systemModelSettings: 'Configuraciones del Modelo del Sistema',
    systemModelSettingsLink: '¿Por qué es necesario configurar un modelo del sistema?',
    selectModel: 'Selecciona tu modelo',
    setupModelFirst: 'Por favor configura tu modelo primero',
    systemReasoningModel: {
      key: 'Modelo de Razonamiento del Sistema',
      tip: 'Establece el modelo de inferencia predeterminado para ser usado en la creación de aplicaciones, así como características como la generación de nombres de diálogo y sugerencias de la próxima pregunta también usarán el modelo de inferencia predeterminado.',
    },
    embeddingModel: {
      key: 'Modelo de Incrustación',
      tip: 'Establece el modelo predeterminado para el procesamiento de incrustación de documentos del Conocimiento, tanto la recuperación como la importación del Conocimiento utilizan este modelo de Incrustación para el procesamiento de vectorización. Cambiarlo causará que la dimensión del vector entre el Conocimiento importado y la pregunta sea inconsistente, resultando en fallos en la recuperación. Para evitar fallos en la recuperación, por favor no cambies este modelo a voluntad.',
      required: 'El Modelo de Incrustación es requerido',
    },
    speechToTextModel: {
      key: 'Modelo de Voz a Texto',
      tip: 'Establece el modelo predeterminado para la entrada de voz a texto en la conversación.',
    },
    ttsModel: {
      key: 'Modelo de Texto a Voz',
      tip: 'Establece el modelo predeterminado para la entrada de texto a voz en la conversación.',
    },
    rerankModel: {
      key: 'Modelo de Reordenar',
      tip: 'El modelo de reordenar reordenará la lista de documentos candidatos basada en la coincidencia semántica con la consulta del usuario, mejorando los resultados de clasificación semántica',
    },
    apiKey: 'CLAVE API',
    quota: 'Cuota',
    searchModel: 'Modelo de búsqueda',
    noModelFound: 'No se encontró modelo para {{model}}',
    models: 'Modelos',
    showMoreModelProvider: 'Mostrar más proveedores de modelos',
    selector: {
      tip: 'Este modelo ha sido eliminado. Por favor agrega un modelo o selecciona otro modelo.',
      emptyTip: 'No hay modelos disponibles',
      emptySetting: 'Por favor ve a configuraciones para configurar',
      rerankTip: 'Por favor configura el modelo de Reordenar',
    },
    card: {
      quota: 'CUOTA',
      onTrial: 'En prueba',
      paid: 'Pagado',
      quotaExhausted: 'Cuota agotada',
      callTimes: 'Tiempos de llamada',
      tokens: 'Tokens',
      buyQuota: 'Comprar Cuota',
      priorityUse: 'Uso prioritario',
      removeKey: 'Eliminar CLAVE API',
      tip: 'Se dará prioridad al uso de la cuota pagada. La cuota de prueba se utilizará después de que se agote la cuota pagada.',
    },
    item: {
      deleteDesc: '{{modelName}} se está utilizando como modelo de razonamiento del sistema. Algunas funciones no estarán disponibles después de la eliminación. Por favor confirma.',
      freeQuota: 'CUOTA GRATUITA',
    },
    addApiKey: 'Agrega tu CLAVE API',
    invalidApiKey: 'Clave API inválida',
    encrypted: {
      front: 'Tu CLAVE API será encriptada y almacenada usando',
      back: ' tecnología.',
    },
    freeQuota: {
      howToEarn: 'Cómo ganar',
    },
    addMoreModelProvider: 'AGREGAR MÁS PROVEEDORES DE MODELOS',
    addModel: 'Agregar Modelo',
    modelsNum: '{{num}} Modelos',
    showModels: 'Mostrar Modelos',
    showModelsNum: 'Mostrar {{num}} Modelos',
    collapse: 'Colapsar',
    config: 'Configurar',
    modelAndParameters: 'Modelo y Parámetros',
    model: 'Modelo',
    featureSupported: '{{feature}} soportado',
    callTimes: 'Tiempos de llamada',
    credits: 'Créditos de Mensaje',
    buyQuota: 'Comprar Cuota',
    getFreeTokens: 'Obtener Tokens gratis',
    priorityUsing: 'Uso prioritario',
    deprecated: 'Desaprobado',
    confirmDelete: '¿Confirmar eliminación?',
    quotaTip: 'Tokens gratuitos restantes disponibles',
    loadPresets: 'Cargar Presets',
    parameters: 'PARÁMETROS',
    loadBalancing: 'Balanceo de carga',
    loadBalancingDescription: 'Reduce la presión con múltiples conjuntos de credenciales.',
    loadBalancingHeadline: 'Balanceo de Carga',
    configLoadBalancing: 'Configurar Balanceo de Carga',
    modelHasBeenDeprecated: 'Este modelo ha sido desaprobado',
    providerManaged: 'Gestionado por el proveedor',
    providerManagedDescription: 'Usa el único conjunto de credenciales proporcionado por el proveedor del modelo.',
    defaultConfig: 'Configuración Predeterminada',
    apiKeyStatusNormal: 'El estado de la CLAVE API es normal',
    apiKeyRateLimit: 'Se alcanzó el límite de velocidad, disponible después de {{seconds}}s',
    addConfig: 'Agregar Configuración',
    editConfig: 'Editar Configuración',
    loadBalancingLeastKeyWarning: 'Para habilitar el balanceo de carga se deben habilitar al menos 2 claves.',
    loadBalancingInfo: 'Por defecto, el balanceo de carga usa la estrategia Round-robin. Si se activa el límite de velocidad, se aplicará un período de enfriamiento de 1 minuto.',
    upgradeForLoadBalancing: 'Actualiza tu plan para habilitar el Balanceo de Carga.',
  },
  dataSource: {
    add: 'Agregar una fuente de datos',
    connect: 'Conectar',
    configure: 'Configurar',
    notion: {
      title: 'Notion',
      description: 'Usando Notion como fuente de datos para el Conocimiento.',
      connectedWorkspace: 'Espacio de trabajo conectado',
      addWorkspace: 'Agregar espacio de trabajo',
      connected: 'Conectado',
      disconnected: 'Desconectado',
      changeAuthorizedPages: 'Cambiar páginas autorizadas',
      pagesAuthorized: 'Páginas autorizadas',
      sync: 'Sincronizar',
      remove: 'Eliminar',
      selector: {
        pageSelected: 'Páginas seleccionadas',
        searchPages: 'Buscar páginas...',
        noSearchResult: 'No hay resultados de búsqueda',
        addPages: 'Agregar páginas',
        preview: 'VISTA PREVIA',
      },
    },
    website: {
      title: 'Sitio web',
      description: 'Importar contenido de sitios web usando un rastreador web.',
      with: 'Con',
      configuredCrawlers: 'Rastreadores configurados',
      active: 'Activo',
      inactive: 'Inactivo',
    },
  },
  plugin: {
    serpapi: {
      apiKey: 'Clave API',
      apiKeyPlaceholder: 'Ingresa tu clave API',
      keyFrom: 'Obtén tu clave API de SerpAPI en la página de cuenta de SerpAPI',
    },
  },
  apiBasedExtension: {
    title: 'Las extensiones basadas en API proporcionan una gestión centralizada de API, simplificando la configuración para su fácil uso en las aplicaciones de Dify.',
    link: 'Aprende cómo desarrollar tu propia Extensión API.',
    linkUrl: 'https://docs.dify.ai/features/extension/api_based_extension',
    add: 'Agregar Extensión API',
    selector: {
      title: 'Extensión API',
      placeholder: 'Por favor selecciona extensión API',
      manage: 'Gestionar Extensión API',
    },
    modal: {
      title: 'Agregar Extensión API',
      editTitle: 'Editar Extensión API',
      name: {
        title: 'Nombre',
        placeholder: 'Por favor ingresa el nombre',
      },
      apiEndpoint: {
        title: 'Punto final de la API',
        placeholder: 'Por favor ingresa el punto final de la API',
      },
      apiKey: {
        title: 'Clave API',
        placeholder: 'Por favor ingresa la clave API',
        lengthError: 'La longitud de la clave API no puede ser menor a 5 caracteres',
      },
    },
    type: 'Tipo',
  },
  about: {
    changeLog: 'Registro de cambios',
    updateNow: 'Actualizar ahora',
    nowAvailable: 'Dify {{version}} ya está disponible.',
    latestAvailable: 'Dify {{version}} es la última versión disponible.',
  },
  appMenus: {
    overview: 'Monitoreo',
    promptEng: 'Orquestar',
    apiAccess: 'Acceso API',
    logAndAnn: 'Registros y Anuncios',
    logs: 'Registros',
  },
  environment: {
    testing: 'PRUEBAS',
    development: 'DESARROLLO',
  },
  appModes: {
    completionApp: 'Generador de Texto',
    chatApp: 'Aplicación de Chat',
  },
  datasetMenus: {
    documents: 'Documentos',
    hitTesting: 'Pruebas de Recuperación',
    settings: 'Configuraciones',
    emptyTip: 'El Conocimiento no ha sido asociado, por favor ve a la aplicación o plugin para completar la asociación.',
    viewDoc: 'Ver documentación',
    relatedApp: 'aplicaciones vinculadas',
    noRelatedApp: 'No hay aplicaciones vinculadas',
  },
  voiceInput: {
    speaking: 'Habla ahora...',
    converting: 'Convirtiendo a texto...',
    notAllow: 'micrófono no autorizado',
  },
  modelName: {
    'gpt-3.5-turbo': 'GPT-3.5-Turbo',
    'gpt-3.5-turbo-16k': 'GPT-3.5-Turbo-16K',
    'gpt-4': 'GPT-4',
    'gpt-4-32k': 'GPT-4-32K',
    'text-davinci-003': 'Text-Davinci-003',
    'text-embedding-ada-002': 'Text-Embedding-Ada-002',
    'whisper-1': 'Whisper-1',
    'claude-instant-1': 'Claude-Instant',
    'claude-2': 'Claude-2',
  },
  chat: {
    renameConversation: 'Renombrar Conversación',
    conversationName: 'Nombre de la conversación',
    conversationNamePlaceholder: 'Por favor ingresa el nombre de la conversación',
    conversationNameCanNotEmpty: 'Nombre de la conversación requerido',
    citation: {
      title: 'CITAS',
      linkToDataset: 'Enlace al Conocimiento',
      characters: 'Caracteres:',
      hitCount: 'Conteo de recuperaciones:',
      vectorHash: 'Hash de vector:',
      hitScore: 'Puntuación de recuperación:',
    },
    inputPlaceholder: 'Hablar con el bot',
  },
  promptEditor: {
    placeholder: 'Escribe tu palabra de indicación aquí, ingresa \'{\' para insertar una variable, ingresa \'/\' para insertar un bloque de contenido de indicación',
    context: {
      item: {
        title: 'Contexto',
        desc: 'Insertar plantilla de contexto',
      },
      modal: {
        title: '{{num}} Conocimiento en Contexto',
        add: 'Agregar Contexto ',
        footer: 'Puedes gestionar contextos en la sección de Contexto abajo.',
      },
    },
    history: {
      item: {
        title: 'Historial de Conversación',
        desc: 'Insertar plantilla de mensaje histórico',
      },
      modal: {
        title: 'EJEMPLO',
        user: 'Hola',
        assistant: '¡Hola! ¿Cómo puedo asistirte hoy?',
        edit: 'Editar Nombres de Roles de Conversación',
      },
    },
    variable: {
      item: {
        title: 'Variables y Herramientas Externas',
        desc: 'Insertar Variables y Herramientas Externas',
      },
      outputToolDisabledItem: {
        title: 'Variables',
        desc: 'Insertar Variables',
      },
      modal: {
        add: 'Nueva variable',
        addTool: 'Nueva herramienta',
      },
    },
    query: {
      item: {
        title: 'Consulta',
        desc: 'Insertar plantilla de consulta del usuario',
      },
    },
    existed: 'Ya existe en la indicación',
  },
  imageUploader: {
    uploadFromComputer: 'Cargar desde la Computadora',
    uploadFromComputerReadError: 'Lectura de imagen fallida, por favor intenta nuevamente.',
    uploadFromComputerUploadError: 'Carga de imagen fallida, por favor carga nuevamente.',
    uploadFromComputerLimit: 'Las imágenes cargadas no pueden exceder {{size}} MB',
    pasteImageLink: 'Pegar enlace de imagen',
    pasteImageLinkInputPlaceholder: 'Pega el enlace de imagen aquí',
    pasteImageLinkInvalid: 'Enlace de imagen inválido',
    imageUpload: 'Carga de Imagen',
  },
  tag: {
    placeholder: 'Todas las Etiquetas',
    addNew: 'Agregar nueva etiqueta',
    noTag: 'Sin etiquetas',
    noTagYet: 'Aún sin etiquetas',
    addTag: 'Agregar etiquetas',
    editTag: 'Editar etiquetas',
    manageTags: 'Gestionar Etiquetas',
    selectorPlaceholder: 'Escribe para buscar o crear',
    create: 'Crear',
    delete: 'Eliminar etiqueta',
    deleteTip: 'La etiqueta se está utilizando, ¿eliminarla?',
    created: 'Etiqueta creada exitosamente',
    failed: 'Creación de etiqueta fallida',
  },
  fileUploader: {
    uploadFromComputer: 'Carga local',
    pasteFileLink: 'Pegar enlace de archivo',
    uploadFromComputerReadError: 'Error en la lectura del archivo, inténtelo de nuevo.',
    uploadFromComputerUploadError: 'Error en la carga del archivo, vuelva a cargarlo.',
    pasteFileLinkInvalid: 'Enlace de archivo no válido',
    fileExtensionNotSupport: 'Extensión de archivo no compatible',
    pasteFileLinkInputPlaceholder: 'Introduzca la URL...',
    uploadFromComputerLimit: 'El archivo de carga no puede exceder {{size}}',
  },
  license: {
    expiring: 'Caduca en un día',
    expiring_plural: 'Caducando en {{count}} días',
  },
  pagination: {
    perPage: 'Elementos por página',
  },
}

export default translation
