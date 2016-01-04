/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    fingerprint: {
      exclude: ['images/sprite'],
      prepend: process.env.CDN_STUB_STRING
    },
    sprite: [
      {
        src: [
          'images/sprite/1x/**/*.png'
        ],
        compositor: 'jimp',
        spritePath: 'assets/sprite.png',
        stylesheetPath: 'assets/sprite.css',
        stylesheet: 'app/styles/sprite.tpl',
        stylesheetOptions: {
          prefix: 'icon.icon-',
          spritePath: 'sprite.png',
          pixelRatio: 1
        },
        layoutOptions: {
          padding: 0
        },
        optiping: process.env.NODE_ENV === 'production',
        layout: 'packed'
      },
      {
        src: [
          'images/sprite/2x/**/*.png'
        ],
        compositor: 'jimp',
        spritePath: 'assets/sprite-2x.png',
        stylesheetPath: 'assets/sprite-2x.css',
        stylesheet: 'app/styles/sprite-2x.tpl',
        stylesheetOptions: {
          prefix: 'icon.icon-',
          spritePath: 'sprite-2x.png',
          pixelRatio: 2
        },
        layoutOptions: {
          padding: 0
        },
        optiping: process.env.NODE_ENV === 'production',
        layout: 'packed'
      }
    ]
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
