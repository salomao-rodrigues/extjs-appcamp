Ext.define('TvShows.store.Shows', {
    extend: 'Ext.data.Store',

    alias: 'store.shows',

    model: 'TvShows.model.Show',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        extraParams: {
            date: Ext.Date.format(new Date(), 'Y-m-d'),
            days: 1
        },
        url: 'http://188.226.215.171/trakt/shows/upcoming',
        reader: {
            type: 'json',
            rootProperty: 'results'
        }
    }
});
