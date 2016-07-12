def longitud(cadena)
  return cadena.length
end

print "Dame un string: "
string = gets.chomp

l = longitud(string)

puts "Tu cadena tiene una longitud de: " + l.to_s