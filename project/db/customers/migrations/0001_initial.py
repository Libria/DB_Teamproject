# Generated by Django 2.2.7 on 2019-11-26 17:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('c_name', models.CharField(max_length=100)),
                ('c_password', models.CharField(max_length=150)),
                ('c_address', models.CharField(max_length=300)),
                ('c_age', models.IntegerField(default=0)),
                ('c_gender', models.CharField(max_length=30)),
            ],
        ),
    ]
