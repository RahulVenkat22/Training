from .models import Student,Exams,ExamScore
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import StudentSerializer
from rest_framework import status



class StudentsView(APIView):

    def post(self, request):
        
        student_serializer = StudentSerializer(data=request.data)
        
        if student_serializer.is_valid():
            student = student_serializer.save()
            
            # Now handle the scores
            scores_data = request.data.get('scores', [])
            
            for score in scores_data:
                exam_id = score.get('exam_id')
                score_value = score.get('score_value')

                # Create a new ExamScore instance
                ExamScore.objects.create(
                    student_id=student,
                    exam_id_id=exam_id,
                    score_value=score_value
                )
            
            return Response(
                {"message": "NEW STUDENT SAVED SUCCESSFULLY", "student": student_serializer.data},
                status=status.HTTP_201_CREATED
            )
        else:
            return Response(student_serializer.errors, status=status.HTTP_400_BAD_REQUEST)



    def get(self, request):
        all_students = Student.objects.all()
        serialized_data = []

        for student in all_students:
            
            student_info = StudentSerializer(student).data
            
            scores = ExamScore.objects.filter(student_id=student)
            scores_data = []

            for score in scores:
                scores_data.append({
                    "exam_id": score.exam_id.exam_id,
                    "maths": score.exam_id.maths,
                    "science": score.exam_id.science,
                    "social": score.exam_id.social,
                    "score_value": score.score_value,
                })

            
            student_info['scores'] = scores_data
            serialized_data.append(student_info)

        return Response(serialized_data)
    

class StudentViewById(APIView):
 
    def get(self, request, id):
        try:
            student = Student.objects.get(id=id)
            
            exam_scores = ExamScore.objects.filter(student_id=student)  # Get scores for this student
            print(exam_scores)
            
            scores_data = []
            for score in exam_scores:
                

                scores_data.append({
                    "exam_id": score.exam_id.exam_id,
                    "maths": score.exam_id.maths,
                    "science": score.exam_id.science,
                    "social": score.exam_id.social,
                    "score_value": score.score_value,
                    
                })
            
            
            student_data = StudentSerializer(student).data
            student_data['scores'] = scores_data  # Add scores to student data
            
            return Response(student_data)

        except Student.DoesNotExist:
            return Response({"error": "Student Not Found"}, status=status.HTTP_404_NOT_FOUND)


    def put(self, request, id):
        try:
            student = Student.objects.get(id=id)
        except Student.DoesNotExist:
            return Response({"error": "Student Not Found"}, status=status.HTTP_404_NOT_FOUND)

        # Update student details
        stud_serializer = StudentSerializer(instance=student, data=request.data, partial=True)
        if stud_serializer.is_valid():
            stud_serializer.save()
        else:
            return Response(stud_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # Assuming the incoming request contains a "scores" list to update exam scores
        scores_data = request.data.get('scores', [])

        for score_data in scores_data:
            exam_id = score_data.get('exam_id')
            score_value = score_data.get('score_value')

            # Check if the exam score already exists for this student
            exam_score, created = ExamScore.objects.update_or_create(
                student_id=student,
                exam_id_id=exam_id,  # exam_id is the foreign key field
                defaults={'score_value': score_value}
            )

        # Return updated student data along with their scores
        updated_student_data = StudentSerializer(student).data

        # Retrieve updated scores
        updated_exam_scores = ExamScore.objects.filter(student_id=student)
        updated_scores_data = []
        for score in updated_exam_scores:
            updated_scores_data.append({
                "exam_id": score.exam_id.exam_id,
                "maths": score.exam_id.maths,
                "science": score.exam_id.science,
                "social": score.exam_id.social,
                "score_value": score.score_value,
            })

        updated_student_data['scores'] = updated_scores_data  # Add updated scores to the response

        return Response(updated_student_data, status=status.HTTP_200_OK)

    
    def delete(self,request,id):
        student = Student.objects.get(id=id)
        student.delete()
        return Response("Deleted")