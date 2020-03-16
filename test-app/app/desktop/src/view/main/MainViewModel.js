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
      //Sort by artist and then by title.
      sorters: ['artist', 'title']
    }
  }
});