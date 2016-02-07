Package.describe({
  summary: "A file loader ",
  version: "0.1.1",
  git:"https://github.com/elmarti/all-file-loader"
});

Package.onUse(function(api){
  api.addFiles('core.js', 'client');
  api.export('allFileLoader');
   api.use(['ecmascript']);
  api.imply(['ecmascript']);
});

