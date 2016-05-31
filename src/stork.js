(function(global, Rekord, Stork, undefined)
{
  function StoreFactory(database)
  {
    return new Stork( database );
  }

  Rekord.setStore( StoreFactory, true );

})( this, this.Rekord, this.Stork );
