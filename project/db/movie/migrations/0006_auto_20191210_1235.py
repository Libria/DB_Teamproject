# Generated by Django 2.2.7 on 2019-12-10 03:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movie', '0005_auto_20191209_1711'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie_theater',
            name='mt_name',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='movie_theater',
            name='mt_region',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
