Ext.define('TvShows.view.thumbview.View', {
    extend: 'Ext.view.View',
    alias: 'widget.thumbview',

    tpl: [
        '<h2>Upcoming shows</h2>',
        '<tpl for=".">',
            '<div class="thumb" style="width: 100px; height: 147px; float: left; margin: 2px; overflow: hidden;">',
                '<img src="{thumb}" style="width: 100px;">',
            '</div>',
        '</tpl>'
    ],
    itemSelector: '.shows div.thumb',

    cls: 'shows',
    itemCls: 'show',
    overItemCls: 'over',
    selectedItemCls: 'selected',

    reference: 'thumbview'
});
