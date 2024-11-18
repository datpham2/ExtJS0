Ext.define('MyApp.view.List.RandomWheel', {
    extend: 'Ext.panel.Panel',
    xtype: 'form-randomwheel',
    frame: true,
    title: 'Random Wheel',
    width: 300,
    bodyPadding: 10,
    defaultType: 'textfield',
    items: [
        {
            fieldLabel: 'Name',
            name: 'name',
            allowBlank: false
        },
        {
            fieldLabel: 'Email',
            name: 'email',
            vtype: 'email'
        },
        {
            fieldLabel: 'Phone',
            name: 'phone'
        }
    ],
})