Ext.define('TestApp.view.main.MainViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.mainviewcontroller',
  requires: 'TestApp.view.Preview',

  onThumbSelect: function(thumbs, record) {
    this.onShowPreview(record);
  },

  onGridSelect: function(grid, records) {
    this.onShowPreview(records[0]);
  },

  // Checks if the current video has been called already, if yes it doesn't call it again
  onShowPreview: function (record) {
    if (this.getView().down('video')) {
      return;
    }

    var videoConfig = {
      xtype: 'video',
      url: record.data.preview,
      posterUrl: record.data.image
    };

    var linkConfig = {
      docked: 'bottom',
      xtype: 'component',
      data: {
        itunesstore: record.data.itunesstore
      }
    };

    // parent container of the video and the link
    var containerConfig = {
      xtype: 'container',
      title: record.data.title + ' — ' + record.data.artist,
      style: '{background-color: black;}',
      layout: 'fit',
      items: [
        videoConfig,
        linkConfig
      ]
    };

    // instance of the Preview Dialog class displaying the container
    var vid = Ext.create({
      xtype: 'preview',
      title: record.data.title,
      layout: 'fit',
      items: [containerConfig],
    });
    vid.show();
  }

});
