Package.describe({
  name:"elmarti:super-css-loader",
  summary: "Load and remove css files quickly and easily,",
  version: "0.2.1",
  git: "https://github.com/elmarti/super-css-loader"
});

Package.onUse(function(api) {
  api.addFiles('core.js', 'client');
  api.export('superCSSLoader');
  api.use(['ecmascript@0.1.6', 'jquery@1.11.3']);
  api.imply(['ecmascript@0.1.6', 'jquery@1.11.3']);
});
