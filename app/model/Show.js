Ext.define('TvShows.model.Show', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'first_aired', type: 'date' },
        { name: 'title', type: 'string' },
        { name: 'episode', type: 'auto' },
        { name: 'genre', type: 'auto' },
        { name: 'overview', type: 'string' },
        { name: 'network', type: 'string' },
        { name: 'runtime', type: 'int' },
        { name: 'logo', type: 'string' },
        { name: 'thumb', type: 'string' },
        { name: 'fanart', type: 'string' },
        { name: 'year', type: 'int' },
        { name: 'slug', type: 'string' }

    ]
});
