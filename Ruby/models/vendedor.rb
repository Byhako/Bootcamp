class Vendedor < Persona
  attr_accessor :productos, :dinero_ganado
  def initialize(nombre,
                 email,
                 direccion,
                 productos)
    super(nombre, email, direccion)
    @productos = productos
    @dinero_ganado = 0.0
  end

  def cantidad_productos
    @productos.length
  end

  def calcular_ganancia(nombre_producto, cantidad_comprada)
    producto = buscar_producto(nombre_producto)
    @dinero_ganado += (cantidad_comprada * (producto.valor_venta - producto.valor_compra))
  end

  def buscar_producto(nombre_producto)
    @productos.detect do |producto|
      producto.nombre == nombre_producto
    end
  end
  private :buscar_producto
end
