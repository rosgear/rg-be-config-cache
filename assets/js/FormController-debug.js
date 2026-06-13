/*!
 * Контроллер формы.
 * Расширение "Кэш".
 * Модуль "Конфигурация".
 * 
 * Copyright 2015 RosGear. Anton Tivonenko <anton.tivonenko@gmail.com>
 * https://rosgear.ru/license/
 */

Ext.define('Rg.be.config.cache.FormController', {
    extend: 'Ge.view.form.PanelController',
    alias: 'controller.rg-be-config-cache-form',

    /**
     * Генерирует уникальный префикс ключа кэша.
     * @param {Ext.form.field.TextField} me
     */
     generateKeyPrefix: (me) => {
         me.setValue('g-' + Ge.uniqId() + ':');
    }
});
