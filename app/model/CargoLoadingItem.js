Ext.define('MyApp.model.CargoLoadingItem', {
    extend: 'MyApp.model.Base',

    fields: [
        {
			name: 'truckNo',
			type: 'string'
		},
        {
			name: 'wbTicketNo',
			type: 'string'
		},
        {
			name: 'category',
			type: 'string'
		},
        {
			name: 'firstWeight',
			type: 'string'
		},
        {
			name: 'secondWeight',
			type: 'string'
		},
        {
			name: 'weightInTime',
			type: 'date'
		},
        {
			name: 'weighOutTime',
			type: 'string'
		},
        {
			name: 'netWeight',
			type: 'string'
		},
        {
			name: 'shipCallNo',
			type: 'string'
		},
        {
			name: '',
			type: 'string'
		},
    ]
});
