# Generated by Django 2.2.7 on 2019-12-04 11:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mv_title', models.CharField(blank=True, max_length=100, null=True)),
                ('mv_director', models.CharField(blank=True, max_length=100, null=True)),
            ],
        ),
    ]
