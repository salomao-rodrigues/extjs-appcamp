Ext.define('TvShows.model.Show', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Date',
    ],

    fields: [
        {
            type: 'date',
            name: 'first_aired',
            dateFormat: 'C',
            convert: function(data) {
                return data;
            },
            mapping: 'show.first_aired'
        },
        { name: 'title', type: 'string', mapping: 'show.title' },
        { name: 'episode', type: 'auto', mapping: 'show.year' },
        { name: 'genre', type: 'auto', mapping: 'show.genre' },
        { name: 'overview', type: 'string', mapping: 'show.overview' },
        { name: 'network', type: 'string', mapping: 'show.network' },
        { name: 'runtime', type: 'int', mapping: 'show.runtime' },
        { name: 'logo', type: 'string', mapping: 'show.images.logo.full' },
        { name: 'thumb', type: 'string', mapping: 'show.images.poster.thumb' },
        { name: 'fanart', type: 'string', mapping: 'show.images.fanart.full' },
        { name: 'year', type: 'int', mapping: 'show.year' },
        { name: 'slug', type: 'string', mapping: 'show.ids.slug' }

    ]
});
