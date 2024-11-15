/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.VesselSchedule',{
    extend: 'Ext.form.Panel',
    xtype: 'screen-vessel',

    requires:[],
    title: 'Vessel List',
    
    items: [{
        xtype: 'grid',
        bind: {
            store: '{vesselSchedule}'
        },
        columns:[
        {
            text: 'JPVC No',
            dataIndex: 'jpvcNo',
            width: 120
        }, {
            text: 'Vessel Name',
            dataIndex: 'vesselName',
            width: 200
        }, {
            text: 'Berth',
            dataIndex: 'berthNo',
            width: 70
        }, {
            text: 'ETA',
            dataIndex: 'eta',
            width: 100
        }, {
            text: 'ATB',
            dataIndex: 'atb',
            width: 100
        }, {
            text: 'Arrival Pilot',
            dataIndex: 'arrivalPilotCheck',
            width: 150,
            renderer: function(value, record){
                if (value === true) {
                    return 'Mooring: ' + record.data.arrivalMooring + ' / Tug: ' + record.data.arrivalTug;
                }
            }
        }, {
            text: 'ATW',
            dataIndex: 'atw',
            width: 120
        }, {
            text: 'ATC',
            dataIndex: 'atc',
            width: 120
        }, {
            text: 'ATU',
            dataIndex: 'atu',
            width: 120
        }, {
            text: 'Departure Pilot',
            dataIndex: 'departurePilotCheck',
            width: 150,
            renderer: function(value, record){
                if (value === true) {
                    return 'Mooring: ' + record.data.departureMooring + ' / Tug: ' + record.data.departureTug;
                }
            }
        }]
    }]
});

// Ext.define('MyApp.view.main.List', {
//     extend: 'Ext.grid.Grid',
//     xtype: 'mainlist',

//     requires: [
//         'MyApp.store.Personnel'
//     ],

//     title: 'Personnel',

//     store: {
//         type: 'personnel'
//     },

//     columns: [{ 
//         text: 'Name',
//         dataIndex: 'name',
//         width: 100,
//         cell: {
//             userCls: 'bold'
//         }
//     }, {
//         text: 'Email',
//         dataIndex: 'email',
//         width: 230 
//     }, { 
//         text: 'Phone',
//         dataIndex: 'phone',
//         width: 150 
//     }],

//     listeners: {
//         select: 'onItemSelected'
//     }
// });
