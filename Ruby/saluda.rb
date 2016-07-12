def saluda(nombre)
  return "Hola " + nombre
end

print "Tu nombre: "
nombre = gets.chomp

n = saluda(nombre)
puts n