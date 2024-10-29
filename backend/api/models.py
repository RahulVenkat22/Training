from django.db import models


# Create your models here.

class Student(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    age = models.CharField(max_length=3)
    grade = models.CharField(max_length=2)
    gender = models.CharField(max_length=6)
    address =models.TextField()

    contact_number = models.CharField(max_length=15)

    def __str__(self):
        return self.first_name

    
class Exams(models.Model):
    exam_id =models.AutoField(primary_key=True)
    maths = models.IntegerField(default=0)
    science = models.IntegerField(default=0)
    social = models.IntegerField(default=0)

    

class ExamScore(models.Model):
    score_id = models.AutoField(primary_key=True)
    student_id = models.ForeignKey(Student,on_delete=models.CASCADE)
    exam_id = models.ForeignKey(Exams,on_delete=models.CASCADE,related_name="scores")
    score_value = models.DecimalField(max_digits=5,decimal_places=2)

    def __str__(self):
        return f'Score for {self.student_id} in {self.exam_id}'