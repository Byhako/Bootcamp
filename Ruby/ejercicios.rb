# suma de los cuadrados de los numeros entre 1 y n

print "Dame un numero: "
nn = gets.chomp
n = nn.to_i

contador = 0

for i in (1..n)

  cuadrado = i*i
  contador = contador + cuadrado

end

puts "La suma de los cuadrados desde 1 hasta " + nn + " es: " + contador.to_s
puts
#******************************************************************

print "Cuantos numeros leo: "
mm = gets.chomp
m = mm.to_i

con = []

for i in (0..m-1)
  print "Escribe numero: "
  n = gets.chomp
  con[i] = n.to_f
end

ban  =  0

con.each do |x|
  ban = ban + x
end

promedio = ban/m

con.sort!

menor = con[0]
mayor = con[m-1]

p ""
p "promedio: " + promedio.to_s
p "el numero menor es: " + menor.to_s
p "el numero mayor es: " + mayor.to_s
p ""

#******************************************************************

print "dame un numero: "
coef = gets.chomp
puts "Tabla de multiplicar de " + coef
for i in (1..20)
  mul = coef.to_f*i
  puts i.to_s + " * " + coef + " = " + mul.to_s
end

#******************************************************************
# numero amigo
puts
print "Ingresa un numero: "
b = gets.chomp

# Obtengo divisores
divisores = []

for i in (1..b.to_i/2)
  if (b.to_i % i == 0)
    divisores.push(i)
  end
end


# Obtengo nuevo numero
c = 0
divisores.each do |x|
  c = c + x
end

# Obtengo divisores
divisores = []

for i in (1..c.to_i/2)
  if (c.to_i % i == 0)
    divisores.push(i)
  end
end

# Obtengo numero
d = 0
divisores.each do |x|
  d = d + x
end

# verifico si son amigos

if (d.to_i == b.to_i)
  puts "Su numero amigo es: " + c.to_s
else
  puts "No es un numero amigo"
end
#******************************************************************