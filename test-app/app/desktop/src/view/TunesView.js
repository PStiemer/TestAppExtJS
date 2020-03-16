Ext.define('TestApp.view.TunesView', {
    extend: 'Ext.dataview.DataView',
    xtype: 'tunesview',
    scrollable: true,
    layout: {
        type: 'box',
        pack: 'space-around',
        wrap: true
    },
    // Defines a class to style the entire view, used by TunesView.scss
    cls: 'tunes-view',
    // Assigns each Item in itemTpl the class video
    itemCls: 'video',
    //The itemTpl allows the injection of html and css around the data available per record.
    itemTpl: [
        '<figure>',
        '<div class="thumbnail" style="background-image:url(\'{image}\')"></div>',
        '<figcaption><div class=\'title\'>{title}</div><div class=\'artist\'>{artist}</div></figcaption>',
        '</figure>'
    ]
});