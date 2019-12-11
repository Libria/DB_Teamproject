# Generated by Django 2.2.7 on 2019-12-10 07:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movie', '0018_movie_mv_summary'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='mv_summary',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='movie_schedule',
            name='ms_end',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='movie_schedule',
            name='ms_start',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='seat',
            name='st_booking',
            field=models.CharField(default='ava', max_length=100),
        ),
    ]
