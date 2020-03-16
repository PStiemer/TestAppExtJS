/**
 * The view for the Grid Tab
 *
 * The grid contains a column for artistname, songtitle, release date and a thumbnail.
 */
Ext.define('TestApp.view.TunesGrid', {
    extend: 'Ext.grid.Grid',
    requires: [
        'Ext.grid.column.Column',
        'Ext.grid.cell.*'
    ],
    xtype: 'tunesgrid',
    // Defines a class to style the entire view, used by TunesGrid.scss
    cls: 'tunes-grid',
    defaults: {
        height: 54
    },
    columns: [{
        text: 'Artist',
        dataIndex: 'artist',
        flex: 1
    }, {
        text: 'Title',
        dataIndex: 'title',
        flex: 1
    }, {
        text: 'Release Date',
        dataIndex: 'release_date',
        flex: .5
    }, {
        text: 'Thumbnail',
        dataIndex: 'image',
        tpl: '<div class="grid-image" style="background-image:url(\'{image}\')"></div>',
        cell: {
            //We want to display an image and not the literal text of the image tag
            encodeHtml: false
        }
    }]
});