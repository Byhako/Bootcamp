require '../modules/comprable.rb'
class Producto
  include Comprable
  attr_accessor :nombre, :valor_venta, :valor_compra, :stock
  def initialize(nombre, valor_venta, valor_compra, stock)
    @nombre = nombre
    @valor_venta = valor_venta.to_f
    @valor_compra = valor_compra.to_f
    @stock = stock
  end
end
