from django.urls import path
# from .views import StudentDetailView , StudentListCreateView
from .views import StudentsView,StudentViewById
urlpatterns = [
    path('students/',StudentsView.as_view()),
    path('students/<int:id>', StudentViewById.as_view()),
]

  
