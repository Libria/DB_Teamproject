# Generated by Django 2.2.7 on 2019-12-10 04:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movie', '0013_auto_20191210_1319'),
    ]

    operations = [
        migrations.AlterField(
            model_name='seat',
            name='st_col',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='seat',
            name='st_row',
            field=models.IntegerField(default=0),
        ),
    ]
