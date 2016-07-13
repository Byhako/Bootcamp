module Comprable
  def reducir_stock(cantidad_comprada)
    @stock -= cantidad_comprada
  end

  def stock_disponible?(cantidad_comprada)
    @stock >= cantidad_comprada
  end
end
