# Generated by Django 5.1.2 on 2024-10-29 06:59

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0002_alter_student_age"),
    ]

    operations = [
        migrations.CreateModel(
            name="Exams",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("exam_id", models.IntegerField()),
                ("exam_name", models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name="ExamScore",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("score_id", models.IntegerField()),
                (
                    "exam_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="api.exams"
                    ),
                ),
                (
                    "student_id",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE, to="api.student"
                    ),
                ),
            ],
        ),
    ]
