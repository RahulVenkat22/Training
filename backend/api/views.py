# from django.shortcuts import render
# from rest_framework import generics
# from .models import Student
# from .serializers import StudentSerializer
# # Create your views here.


# class StudentListCreateView(generics.ListCreateAPIView):
#     queryset = Student.objects.all()
#     serializer_class = StudentSerializer

# class StudentDetailView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Student.objects.all()
#     serializer_class = StudentSerializer



from .models import Student
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.

class StudentsView(APIView):

    def get(self,request):
        all_student = Student.objects.all()

        student_data =[]

        for stud in all_student:
            single_stud = {
                "id" : stud.id,
                "first_name" : stud.first_name,
                "last_name" :stud.last_name,
                "age": stud.age,
                "gender": stud.gender,
                "grade": stud.grade,
                "address":stud.address,
                "contact_number" : stud.contact_number
            }

            student_data.append(single_stud)

        return Response(student_data)

    def post(self,request):
        new_student = Student(first_name=request.data['first_name'],
                              last_name=request.data['last_name'],
                              age=request.data['age'],
                              gender=request.data['gender'],
                              grade = request.data['grade'],
                              address = request.data['address'],
                              contact_number=request.data['contact_number']
                              )
        
        new_student.save()
        return Response("NEW STUDENT SAVED SUCCESSFULLY")


class StudentViewById(APIView):
    def get(self,request,id):
        stud = Student.objects.get(id=id)

        single_stud = {
              "id" : stud.id,
                "first_name" : stud.first_name,
                "last_name" :stud.last_name,
                "age": stud.age,
                "gender": stud.gender,
                "grade": stud.grade,
                "address":stud.address,
                "contact_number" : stud.contact_number
        }

        return Response(single_stud)
    
    def put(self,request,id):
        student = Student.objects.filter(id=id)

        student.update(first_name=request.data['first_name'],
                              last_name=request.data['last_name'],
                              age=request.data['age'],
                              gender=request.data['gender'],
                              grade = request.data['grade'],
                              address = request.data['address'],
                              contact_number=request.data['contact_number'])

        return Response("Updated")
    
    def delete(self,request,id):
        student = Student.objects.get(id=id)
        student.delete()
        return Response("Deleted")