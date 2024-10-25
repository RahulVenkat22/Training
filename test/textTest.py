a = open("MyText.txt",'a')
a.write("This is the New LINE \n")

b =open("MyText.txt",'r')
print(b.read())