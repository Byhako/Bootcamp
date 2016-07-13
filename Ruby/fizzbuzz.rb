def fizzbuzz(numero)

  if(numero.to_f % 3 == 0 and numero.to_f % 5 == 0)
    return "FIZZBUZZ"
  elsif(numero.to_f % 3 == 0)
    return "FIZZ"
  elsif(numero.to_f % 5 == 0)
    return "BUZZ"
  else
    return numero
  end

end

print "Ingresa un numero: "
n = gets.chomp
c = fizzbuzz(n)
puts c
