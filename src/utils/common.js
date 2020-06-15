/**
 * Генерация идентификатора для объекта
 * @return {string}
 */
export const generateId = () => `f${(+new Date()).toString(16)}${Math.random() * 1e8}`;
