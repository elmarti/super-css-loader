Package.describe({
  summary: "A file loader ",
  version: "0.0.0",
  git:"https://github.com/elmarti/all-file-loader"
});

Package.onUse(function(api){
  api.addFiles('core.js', 'client');
  api.export('allFileLoader');
});

