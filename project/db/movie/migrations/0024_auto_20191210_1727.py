# Generated by Django 2.2.7 on 2019-12-10 08:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movie', '0023_auto_20191210_1648'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='movie_theater',
            name='mt_seat',
        ),
        migrations.AddField(
            model_name='movie_theater',
            name='mt_seat',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
