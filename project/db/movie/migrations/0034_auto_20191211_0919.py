# Generated by Django 2.2.7 on 2019-12-11 00:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('movie', '0033_auto_20191211_0918'),
    ]

    operations = [
        migrations.RenameField(
            model_name='seat1',
            old_name='st_row',
            new_name='Row',
        ),
    ]
