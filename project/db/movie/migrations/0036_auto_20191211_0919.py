# Generated by Django 2.2.7 on 2019-12-11 00:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('movie', '0035_auto_20191211_0919'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='seat1',
            unique_together={('Col', 'Row')},
        ),
    ]
