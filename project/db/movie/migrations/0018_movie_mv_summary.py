# Generated by Django 2.2.7 on 2019-12-10 07:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movie', '0017_auto_20191210_1617'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='mv_summary',
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
    ]