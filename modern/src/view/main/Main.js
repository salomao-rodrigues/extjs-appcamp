Ext.define('TvShows.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',

    requires: [
        'TvShows.view.main.MainController',
        'TvShows.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    bind: {},
    html: "MOBILE VIEW HERE"
});
