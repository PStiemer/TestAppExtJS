Ext.define('TestApp.view.main.MainView', {
  extend: 'Ext.tab.Panel',
  xtype: 'mainview',
  controller: 'mainviewcontroller',
  viewModel: {
    type: 'mainviewmodel'
  },

  requires: [
    'TestApp.view.main.MainViewController',
    'TestApp.view.main.MainViewModel',
    'TestApp.view.TunesView'
  ],

  tabBarPosition: 'bottom',

  items: [{
    title: "Thumbnails",
    xtype: 'tunesview',
    bind: {
      store: '{tunes}'
    }
  }, {
    title: "Grid",
    html: '<h1>tunes grid</h1>'
  }]
});
