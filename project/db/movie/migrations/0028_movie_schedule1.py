# Generated by Django 2.2.7 on 2019-12-10 13:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('movie', '0027_movie_theater1'),
    ]

    operations = [
        migrations.CreateModel(
            name='Movie_schedule1',
            fields=[
                ('ms_index', models.IntegerField(default=0, primary_key=True, serialize=False)),
                ('ms_start', models.TimeField(blank=True, null=True)),
                ('ms_end', models.TimeField(blank=True, null=True)),
                ('ms_region', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='movie.Movie_theater1')),
            ],
        ),
    ]
