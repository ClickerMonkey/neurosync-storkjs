/* rekord-storkjs 1.4.4 - A rekord binding to storkjs - implementing Rekord.store by Philip Diffenderfer */
// UMD (Universal Module Definition)
(function (root, factory)
{
  if (typeof define === 'function' && define.amd) // jshint ignore:line
  {
    // AMD. Register as an anonymous module.
    define(['rekord', 'storkjs'], function(Rekord, Stork) { // jshint ignore:line
      return factory(root, Rekord, Stork);
    });
  }
  else if (typeof module === 'object' && module.exports)  // jshint ignore:line
  {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(global, require('rekord'), require('storkjs'));  // jshint ignore:line
  }
  else
  {
    // Browser globals (root is window)
    root.Rekord = factory(root, root.Rekord, root.Stork);
  }
}(this, function(global, Rekord, Stork, undefined)
{

  function StoreFactory(database)
  {
    return new Stork( database );
  }

  Rekord.setStore( StoreFactory, true );

  return Rekord;

}));
