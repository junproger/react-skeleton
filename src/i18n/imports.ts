/**
 * Импорт словарей переводов
 * Под каждую локаль массив переводов, чтобы каждый модуль проекта мог дополнить словарь своим набором
 * Импорт словаря, чтобы загружать только нужный
 */
import ru from './default/ru.json';

export default {
  // Переводы по-умолчанию.
  // Все локали наследуют '*'
  '*': {
    'example': () => import('./default/en.json'),
  },
  // Код локали и её словари с переводами
  'en-EN': {

  },
  'ru-RU': {
    //'example': ru
    'example': () => import('./default/ru.json')
  },
};
