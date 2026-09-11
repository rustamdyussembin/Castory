export const ru = {
  common: {
    cancel: 'Отмена',
    close: 'Закрыть',
    save: 'Сохранить',
  },
  navigation: {
    explore: 'Обзор',
    session: 'Сессия',
  },
  rod: {
    add: 'Добавить удилище',
  },
  session: {
    duration: {
      hour: 'ч',
      minute: 'м',
    },
    runningFor: 'Сессия идет {{duration}}',
    sectorValue: 'Сектор {{sector}}',
    start: 'Начать сессию',
    form: {
      sector: 'Сектор',
      venue: 'Водоём',
      validation: {
        maxLength: 'Не больше {{count}} символов',
        required: 'Поле обязательно для заполнения',
      },
    },
  },
  weather: {
    loading: 'Загрузка погоды...',
    unavailable: 'Погода недоступна',
    wind: '{{direction}} {{speed}} м/с',
    windInHours_one: 'Через {{count}} час: {{direction}} {{speed}} м/с',
    windInHours_few: 'Через {{count}} часа: {{direction}} {{speed}} м/с',
    windInHours_many: 'Через {{count}} часов: {{direction}} {{speed}} м/с',
    windInHours_other: 'Через {{count}} часа: {{direction}} {{speed}} м/с',
    windDirection: {
      east: 'В',
      north: 'С',
      northEast: 'СВ',
      northWest: 'СЗ',
      south: 'Ю',
      southEast: 'ЮВ',
      southWest: 'ЮЗ',
      west: 'З',
    },
  },
} as const;
