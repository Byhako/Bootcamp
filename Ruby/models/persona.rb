class Persona
  attr_accessor :nombre, :cedula, :email, :direccion
  @@random = Random.new

  def initialize(nombre, email, direccion)
    @nombre = nombre
    @email = email
    @direccion = direccion
    @cedula = generar_cedula
  end

  def generar_cedula
    @@random.rand(40999999..79999999)
  end
  private :generar_cedula
end
