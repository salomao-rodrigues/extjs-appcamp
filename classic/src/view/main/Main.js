Ext.define('TvShows.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.layout.container.Center',
        'Ext.layout.container.Border',
        'TvShows.view.main.MainController',
        'TvShows.view.main.MainModel',
        'TvShows.view.thumbview.View',
        'TvShows.view.detail.Detail'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: 'center',
    items: [{
        layout: 'border',
        height: '75%',
        width: '75%',
        items: [
        {
             title: 'TV SHOWS',
             region: 'north',
             xtype: 'detail',
             height: 400,
        },
        {
            region: 'center',
            xtype: 'thumbview',
            layout: 'fit',
            bind: {
                store: '{shows}'
            },
            scrollable: true
        }]
    }]
});
