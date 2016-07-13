require 'byebug'
require './persona'
require './vendedor'
require './producto'
require '../modules/comprable'
class Comprador < Persona
  attr_accessor :productos, :dinero, :vendedor
  def initialize(nombre,
                 email,
                 direccion,
                 dinero,
                 vendedor)
    super(nombre, email, direccion)
    @productos = []
    @dinero = dinero
    @vendedor = vendedor
  end

  def comprar(nombre_producto, cantidad)
    producto = buscar_producto(nombre_producto)
    if producto_disponible?(producto, cantidad)
      pagar_producto(producto, cantidad)
      descontar_cantidad(producto, cantidad)
      agregar_producto(producto)
      @vendedor.calcular_ganancia(nombre_producto, cantidad)
    end
  end

  def descontar_cantidad(producto, cantidad)
    producto.stock -= cantidad
  end
  private :descontar_cantidad

  def agregar_producto(producto)
    @productos << producto
  end
  private :agregar_producto

  def pagar_producto(producto, cantidad)
    @dinero -= (producto.valor_venta * cantidad)
  end
  private :pagar_producto

  def producto_disponible?(producto, cantidad)
    producto.stock_disponible?(cantidad)
  end
  private :producto_disponible?

  def buscar_producto(nombre_producto)
    productos_de_vendedor.detect do |producto|
      producto.nombre == nombre_producto
    end
  end
  private :buscar_producto

  def productos_de_vendedor
    @productos_de_vendedor ||= @vendedor.productos
  end
  private :productos_de_vendedor
end
