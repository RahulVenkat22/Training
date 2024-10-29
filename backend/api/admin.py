from django.contrib import admin
from .models import Student,Exams,ExamScore
# Register your models here.
admin.site.register(Student)
admin.site.register(Exams)
admin.site.register(ExamScore)