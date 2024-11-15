Ext.define('MyApp.view.main.List.LoadingCargo', {
    extend: 'Ext.form.Panel',
    xtype: 'form-loadingcargo',
    requires: [
        'MyApp.store.CategoryStore'
    ],
    viewModel: {
        type: 'default',
        stores: {
            category: {
                type: 'categorystore'
            }
        }
    },
    frame: false,
    title: 'Loading Cargo',
    bodyPadding: 10,
    scrollable: true,

    // fieldDefaults: {
    //     labelAlign: 'right',
    //     labelWidth: 115,
    //     msgTarget: 'side'
    // },

    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            xtype: 'form',
            viewModel: {
                type: 'default',
                stores: {
                    category: {
                        type: 'categorystore'
                    }
                }
            },
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {//row
                    xtype: 'fieldset',
                    title: 'Search Criteria',
                    style: {
                        borderColor: 'black',
                        borderStyle: 'solid',
                        borderWidth: '1px',
                        borderTopColor: 'black'
                    },
                    items: [

                        {
                            xtype: 'container',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'container',
                                    layout: 'vbox',
                                    colspan: 2,
                                    align: 'left',
                                    flex: 1,
                                    items: [


                                        {
                                            xtype: 'container',
                                            layout: 'hbox',
                                            items: [
                                                {
                                                    xtype: 'container',
                                                    layout: 'vbox',
                                                    items: [
                                                        {
                                                            xtype: 'textfield',
                                                            fieldLabel: 'Truck No:',
                                                            name: 'truckNo',
                                                            labelAlign: 'right',
                                                            labelWidth: 50,
                                                        },
                                                        {
                                                            xtype: 'container',
                                                            layout: 'hbox',
                                                            items: [
                                                                {
                                                                    xtype: 'datefield',
                                                                    fieldLabel: 'From:',
                                                                    name: 'from',
                                                                    labelAlign: 'right',
                                                                    labelWidth: 50,
                                                                },
                                                                {
                                                                    xtype: 'datefield',
                                                                    fieldLabel: 'To:',
                                                                    name: 'to',
                                                                    labelAlign: 'right',
                                                                    labelWidth: 50,
                                                                },
                                                            ]
                                                        },

                                                    ]
                                                },
                                                {
                                                    xtype: 'container',
                                                    height: 100
                                                },

                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    layout: 'vbox',
                                    colspan: 2,
                                    align: 'left',
                                    flex: 1,
                                    items: [


                                        {
                                            xtype: 'container',
                                            layout: 'hbox',
                                            items: [
                                                {
                                                    xtype: 'container',
                                                    layout: 'vbox',
                                                    items: [
                                                        {
                                                            xtype: 'container',
                                                            layout: 'hbox',
                                                            items: [
                                                                {
                                                                    xtype: 'textfield',
                                                                    fieldLabel: 'Ship Call No:',
                                                                    name: 'shipCallNo',
                                                                    labelAlign: 'right',
                                                                    labelWidth: 50,
                                                                },
                                                                {
                                                                    xtype: 'container',
                                                                    width: 30
                                                                },
                                                                {
                                                                    xtype: 'combobox',
                                                                    value: '-Select-',
                                                                    fieldLabel: 'Category:',
                                                                    name: 'category',
                                                                    labelAlign: 'right',
                                                                    labelWidth: 50,
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            xtype: 'container',
                                                            layout: 'hbox',
                                                            items: [
                                                                {
                                                                    xtype: 'combobox',
                                                                    value: '-Select-',
                                                                    fieldLabel: 'Bill of Lading:',
                                                                    name: 'billOfLading',
                                                                    labelAlign: 'right',
                                                                    labelWidth: 50,
                                                                },
                                                                {
                                                                    xtype: 'container',
                                                                    width: 30
                                                                },
                                                                {
                                                                    xtype: 'combobox',
                                                                    value: '-Select-',
                                                                    fieldLabel: 'Shipping Note:',
                                                                    name: 'shippingNote',
                                                                    labelAlign: 'right',
                                                                    labelWidth: 50,
                                                                }
                                                            ]
                                                        },

                                                    ]
                                                },
                                                {
                                                    xtype: 'container',
                                                    height: 100
                                                },

                                            ]
                                        }
                                    ]
                                },
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'Weight List',

                    style: {
                        borderColor: 'black',
                        borderStyle: 'solid',
                        borderWidth: '1px',
                        borderTopColor: 'black'
                    },
                    items: [
                        {
                            xtype: 'grid',
                            reference: 'refGrdMyGrid',
                            flex: 1.5,
                            stateful: true,
                            stateId: 'stateMyGrid',
                            // plugins: [
                            //         'gridexporter',
                            //         'gridfilters',
                            //         'clipboard'
                            // ],
                            bind: {
                                //store: '{iStore}'
                            },
                            selModel: {
                                type: 'spreadsheet',
                                cellSelect: false
                            },
                            listeners: {
                                //celldblclick: 'onDblClick'
                            },
                            columns: {
                                defaults: {
                                    style: 'text-align:center',
                                    align: 'center'
                                },
                                items: [
                                    {
                                        xtype: 'rownumberer',
                                        width: 40,
                                        lockable: false,
                                        locked: true,
                                        header: 'No',
                                        align: 'center'
                                    },
                                    {
                                        header: 'Truck No',
                                        dataIndex: 'truckNo',
                                        reference: 'refTruckNo',
                                        filter: 'string',
                                        flex: 1
                                    },
                                    {
                                        header: 'WB Ticket',
                                        dataIndex: 'wbTicket',
                                        reference: 'refWbTicket',
                                        filter: 'string',
                                        flex: 1
                                    },
                                    {
                                        header: 'Category',
                                        dataIndex: 'category',
                                        reference: 'refCategory',
                                        filter: 'string',
                                        align: 'left',
                                        flex: 1
                                    },
                                    {
                                        header: '1st Weight',
                                        dataIndex: 'firstWeight',
                                        reference: 'refFirstWeight',
                                        filter: 'string',
                                        flex: 1
                                    },
                                    {
                                        header: 'Weight In time',
                                        dataIndex: 'weightInTime',
                                        reference: 'refWeightInTime',
                                        filter: 'list',
                                        flex: 1
                                    },
                                    {
                                        header: '2nd Weight',
                                        dataIndex: 'secondWeight',
                                        reference: 'refSecondWeight',
                                        filter: 'string',
                                        align: 'left',
                                        flex: 1
                                    },
                                    {
                                        header: 'Weight Out time',
                                        dataIndex: 'weightOutTime',
                                        reference: 'refWeightOutTime',
                                        filter: 'string',
                                        flex: 1
                                    },
                                    {
                                        header: 'Net Weight',
                                        dataIndex: 'netWeight',
                                        reference: 'refNetWeight',
                                        filter: 'list',
                                        flex: 1
                                    },
                                    {
                                        header: 'Ship Call No',
                                        dataIndex: 'shipCallNo',
                                        reference: 'refShipCallNo',
                                        filter: 'string',
                                        align: 'left',
                                        flex: 1
                                    },
                                ]
                            },
                            store: {
                                fields: [
                                    { name: 'truckNo', type: 'string' },
                                    { name: 'wbTicket', type: 'string' },
                                    { name: 'category', type: 'string' },
                                    { name: 'firstWeight', type: 'string' },
                                    { name: 'weightInTime', type: 'string' },
                                    { name: 'secondWeight', type: 'string' },
                                    { name: 'weightOutTime', type: 'string' },
                                    { name: 'netWeight', type: 'string' },
                                    { name: 'shipCallNo', type: 'string' },
                                ],
                                data: [
                                    { truckNo: '', wbTicket: '', category: '', firstWeight: '', weightInTime: '', secondWeight: '', weightOutTime: '', netWeight: '', shipCallNo: '' },
                                    { truckNo: '', wbTicket: '', category: '', firstWeight: '', weightInTime: '', secondWeight: '', weightOutTime: '', netWeight: '', shipCallNo: '' },
                                ]
                            }
                        }
                    ]
                },
                {//row
                    xtype: 'fieldset',
                    style: {
                        borderColor: 'black',
                        borderStyle: 'solid',
                        borderWidth: '1px',
                        borderTopColor: 'black'
                    },
                    items: [

                        {
                            xtype: 'container',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'fieldset',
                                    title: 'Weight Scale',
                                    style: {
                                        borderColor: 'black',
                                        borderStyle: 'solid',
                                        borderWidth: '1px',
                                        borderTopColor: 'black'
                                    },
                                    items: [
                                        {
                                            xtype: 'container',
                                            layout: 'hbox',
                                            margin: '5 0 5 0',
                                            items: [
                                                {
                                                    xtype: 'combobox',
                                                    value: '-Select-',
                                                    fieldLabel: 'Category:',
                                                    name: 'category',
                                                    bind: {
                                                        store: '{category}',
                                                        value: '{selectedCategory}'
                                                    },
                                                    displayField: 'name',
                                                    valueField: 'id',
                                                    listeners: {
                                                        afterrender: function (combo) {
                                                            var store = combo.getStore();
                                                            console.log(store.getData().items); // Check if the store has data
                                                        }
                                                    }
                                                },
                                                {
                                                    xtype: 'container',
                                                    width: 15
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'Truck No:',
                                                    name: 'truckNo',
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            layout: 'hbox',
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'WB Ticket:',
                                                    colspan: 2,
                                                    name: 'wbTicket'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            layout: 'hbox',
                                            margin: '5 0 5 0',
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'Weight:',
                                                    name: 'weight'
                                                },
                                                {
                                                    xtype: 'container',
                                                    width: 15
                                                },
                                                {
                                                    xtype: 'button',
                                                    text: 'Read Weight',
                                                    style: {
                                                        backgroundColor: 'lightblue',
                                                        color: 'black'
                                                    },
                                                    handler: function () {
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            layout: 'hbox',
                                            margin: '5 0 5 0',
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: '1st Weight:',
                                                    name: 'firstWeight'
                                                },
                                                {
                                                    xtype: 'container',
                                                    width: 15
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'Time:',
                                                    name: 'time'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            layout: 'hbox',
                                            margin: '5 0 5 0',
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: '2nd Weight:',
                                                    name: 'secondWeight'
                                                },
                                                {
                                                    xtype: 'container',
                                                    width: 15
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'Time:',
                                                    name: 'time'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            layout: 'hbox',
                                            margin: '5 0 5 0',
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'Net Weight:',
                                                    name: 'netWeight'
                                                },
                                                {
                                                    xtype: 'container',
                                                    width: 15
                                                },
                                                {
                                                    xtype: 'checkbox',
                                                    fieldLabel: 'Dual Cycle',
                                                    name: 'dualCycle'
                                                }
                                            ]
                                        },
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    title: 'Cargo Information',
                                    style: {
                                        borderColor: 'black',
                                        borderStyle: 'solid',
                                        borderWidth: '1px',
                                        borderTopColor: 'black'
                                    },
                                    items: [
                                        {
                                            xtype: 'container',
                                            layout: 'hbox',
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'Ship Call No:',
                                                    name: 'shipCallNo'
                                                },
                                                {
                                                    xtype: 'container',
                                                    width: 15
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'Vessel Name:',
                                                    name: 'vesselName'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            layout: 'hbox',
                                            margin: '5 0 5 0',
                                            items: [
                                                {
                                                    xtype: 'combobox',
                                                    value: '-Select-',
                                                    fieldLabel: 'BL / SN No:',
                                                    name: 'blSnNo'
                                                },
                                                {
                                                    xtype: 'container',
                                                    width: 15
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'DO/GR:',
                                                    name: 'doGr'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            layout: 'hbox',
                                            margin: '5 0 5 0',
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'Shipper:',
                                                    name: 'shipper'
                                                },
                                                {
                                                    xtype: 'container',
                                                    width: 15
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'Consignee:',
                                                    name: 'consignee'

                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            layout: 'hbox',
                                            margin: '5 0 5 0',
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'Commodity:',
                                                    name: 'commodity'
                                                },
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            layout: 'hbox',
                                            margin: '5 0 5 0',
                                            items: [
                                                {
                                                    xtype: 'combobox',
                                                    value: '-Select-',
                                                    fieldLabel: 'Crane',
                                                    name: 'crane'
                                                },
                                                {
                                                    xtype: 'container',
                                                    width: 15
                                                },
                                                {
                                                    xtype: 'combobox',
                                                    value: '-Select-',
                                                    fieldLabel: 'Hatch:',
                                                    name: 'hatch'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            layout: 'hbox',
                                            margin: '5 0 5 0',
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    fieldLabel: 'Remarks:',
                                                    name: 'remarks'
                                                }
                                            ]
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                },
            ]
        });

        me.callParent(arguments);
    }
});