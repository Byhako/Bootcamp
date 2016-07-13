def count_matches(a,n)

  ban = 0

  a.each do |x|
    if (x == n)
      ban = ban + 1
    end
  end

  return ban
end

array = [1,2,3,4,4,5,4]
numero = 4

c = count_matches(array,numero)

puts
print "El array ",array," tiene ",c," veces el numero ",numero
puts
puts

