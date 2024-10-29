# Generated by Django 5.1.2 on 2024-10-29 09:41

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0005_remove_examscore_exam_id_remove_examscore_student_id_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="Exams",
            fields=[
                ("exam_id", models.AutoField(primary_key=True, serialize=False)),
                ("exam_name", models.CharField(max_length=25)),
            ],
        ),
        migrations.CreateModel(
            name="ExamScore",
            fields=[
                ("score_id", models.AutoField(primary_key=True, serialize=False)),
                ("score", models.DecimalField(decimal_places=2, max_digits=5)),
                (
                    "exam_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="scores",
                        to="api.exams",
                    ),
                ),
                (
                    "student_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="api.student"
                    ),
                ),
            ],
        ),
    ]
