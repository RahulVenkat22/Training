
def Count_Vowel():
# 1) Count Vowels in a String
    word = str(input("Enter the Word to count the vowels: "))
    word = word.lower()

    my_list = ['a','e','i','o','u']

    vowel_count =0
    for i in word:
        if i in my_list:
            vowel_count+=1

    print("Total Number of Vowels in Give Word is :" ,vowel_count)



# # Count_Vowel()

# # 2) Find the Maximum in a List

# list = [1,5,6,1,2]
# for i in range(len(list)):
#     find_max=list[i]<list[i+1]
#     print(find_max)

# 2) Find the Maximum in a List

list1 = [1,2,3,4,5]

for i in range(0,len(list1)+1):

    if list1[i]<list1[i+1]:
        print(list1[1])
    else:
        print(list1[0])


def reverse_string():
    # 3) Reverse a string
    string=str(input("Enter the String TO REVERSE"))
    print("            ")
    for i in range(len(string)):
        # for j in range(1,len(string)):
        print(string[-i],end="")

def list_merge():
    list1=[]
    list2=[]
    
    while True:
        list1_values = input("Enter the Numbers for LIST1: ")
        if list1_values == "stop":
            break
        else:
            list1.append(list1_values)

    while True:
        list2_values = input("Enter the Numbers for LIST2: ")
        if list2_values == "stop":
            break
        else:
            list2.append(list2_values)
    print(list1+list2)



# 6) Odd or even numbers find out
def  odd_even():
    number=int(input("Enter the Number to Check: "))
    if number==0:
        print("Number 0 is both Odd and Even")
    elif number%2==0:
        print(number,"is even")
    elif number%2==1:
        print(number, "is Odd")


# 5) Fibonacci Sequence

# my_list=[0,1]


# max_value=50


# answer = my_list[-1]+my_list[-2]
# my_list.append(answer)
# print(answer)
# print(my_list)

# answer1 = my_list[-1]+my_list[-2]
# my_list.append(answer1)
# print(my_list)

def Fibonacci():
    my_list=[0,1]
    max_value=int(input("Enter the Maximum Number: "))

    while my_list[-1]<max_value:
        answer = my_list[-1]+my_list[-2]
        my_list.append(answer)

    print(my_list)

