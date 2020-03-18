/**
 * This is a dialog window to show a video preview of a song.
 */
Ext.define('TestApp.view.Preview', {
    // Dialog is a floating panel
    extend: 'Ext.Dialog',
    xtype: 'preview',
    resizable: true,
    closable: true,
    bodyPadding: 16,
    width: 640,
    height: 480
});