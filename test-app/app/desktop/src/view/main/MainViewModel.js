Ext.define('TestApp.view.main.MainViewModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.mainviewmodel',
  requires: [
    'TestApp.model.Tune'
  ],
  stores: {
    tunes: {
      model: 'TestApp.model.Tune',
      autoLoad: true,
      sorters: ['artist', 'title']
    }
  }
});