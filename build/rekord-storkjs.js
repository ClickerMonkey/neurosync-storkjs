/* rekord-storkjs 1.4.0 - A rekord binding to storkjs - implementing Rekord.store by Philip Diffenderfer */
(function(global, Rekord, Stork, undefined)
{
  function StoreFactory(database)
  {
    return new Stork( database );
  }

  Rekord.setStore( StoreFactory, true );

})( this, this.Rekord, this.Stork );
