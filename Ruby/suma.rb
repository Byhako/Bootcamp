def suma(a,b)
  c =  (a.to_f) + (b.to_f)
  return c
end

print "Dame el primer numero: "
a = gets.chomp
print "Dame el segundo numero: "
b = gets.chomp

c = suma(a,b)

puts "La suma de "+ a + " y " + b + " es: " + c.to_s