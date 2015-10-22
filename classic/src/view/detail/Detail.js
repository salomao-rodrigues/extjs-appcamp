Ext.define('TvShows.view.detail.Detail', {
    extend: 'Ext.Component',
    xtype: 'detail',
    tpl: [
        "<div class='holder' style='overflow: hidden; position: relative;'>",
            "<div class='text' style='position: relative; top: 0; left: 0; padding: 50px; margin-right: 712px; height: 400px; overflow: hidden;'>",
                "<h1>{title}</h1>",
            "</div>",
            "<div class='img' style='position: absolute; top: 0; right: 0; width: 712px; height: 400px; background-position: top center; background-size: cover; background-image: url({fanart});'>",
                "<div class='applogo' style='display: block; position: absolute; top: 0px; right: 40px; padding: 20px; text-align:center; background: #e50914; color: #fff; font-weight: bold;'>TV Shows</div>",
            "</div>",
        "</div>"],
    bind: {
        data: '{thumbview.selection}'
    }
});
