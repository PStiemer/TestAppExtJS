Ext.define('TestApp.view.main.MainView', {
  extend: 'Ext.tab.Panel',
  // Defines an xtype name for the class
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

  // Lets the tab bar appear on the bottom of the view
  tabBarPosition: 'bottom',

  // The array of the navigation tabs
  items: [{
    title: "Thumbnails",
    // xtype of our TunesView class
    xtype: 'tunesview',
    bind: {
      // Store taken from MainViewModel.js
      store: '{tunes}'
    },
    // Detects a click on a record
    listeners: {
      select: 'onThumbSelect'
    },
  }, {
    title: "Grid",
    // xtype of our TunesGrid class
    xtype: 'tunesgrid',
    bind: {
      // Store taken from MainViewModel.js
      store: '{tunes}'
    },
    // Detects a click on a row
    listeners: {
      select: 'onGridSelect'
    },
  }]
});
