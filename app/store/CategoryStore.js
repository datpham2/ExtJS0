// app/store/CategoryStore.js
Ext.define('MyApp.store.CategoryStore', {
    extend: 'Ext.data.Store',
    alias: 'store.categorystore',

    fields: ['id', 'name'],
    data: [
        { id: 1, name: 'Category 1' },
        { id: 2, name: 'Category 2' },
        { id: 3, name: 'Category 3' }
    ]
});