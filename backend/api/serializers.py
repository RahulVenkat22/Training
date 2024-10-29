from rest_framework import serializers
from .models import Student, Exams, ExamScore

class ExamsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exams
        fields = "__all__"

class ExamScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamScore
        fields = "__all__"

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = "__all__"

    