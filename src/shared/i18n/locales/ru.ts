export const ru = {
  common: {
    cancel: 'Отмена',
    close: 'Закрыть',
    edit: 'Изменить',
    save: 'Сохранить',
  },
  navigation: {
    explore: 'Обзор',
    session: 'Сессия',
  },
  fishBite: {
    title: 'Поклёвка',
    form: {
      fish: 'Рыба',
      weight: 'Вес, кг',
      validation: {
        maxLength: 'Не больше {{count}} символов',
        positiveNumber: 'Введите число больше 0',
        required: 'Поле обязательно для заполнения',
      },
    },
  },
  rod: {
    add: 'Добавить удилище',
    editTitle: 'Изменить удилище {{number}}',
    title: 'Удилище {{number}}',
    card: {
      bait: 'Насадка: {{bait}}',
      distance: 'Дистанция {{distance}} метров ({{wraps}} оборотов на колышках)',
      distanceUnavailable: 'Дистанция не указана',
      inWater_one: 'В воде {{count}} минута',
      inWater_few: 'В воде {{count}} минуты',
      inWater_many: 'В воде {{count}} минут',
      inWater_other: 'В воде {{count}} минуты',
      recast: 'Перезабросил',
    },
    form: {
      bait: 'Насадка',
      distance: 'Дистанция {{distance}} метров',
      pegDistance: 'Расстояние между колышками',
      pegDistanceValue: '{{distance}} м',
      wraps: 'Оборотов на колышках',
      validation: {
        maxLength: 'Не больше {{count}} символов',
        positiveNumber: 'Введите число больше 0',
        required: 'Поле обязательно для заполнения',
      },
    },
  },
  session: {
    duration: {
      hour: 'ч',
      minute: 'м',
    },
    finish: 'Завершить сессию',
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
