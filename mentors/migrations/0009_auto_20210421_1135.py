# Generated by Django 3.2 on 2021-04-21 06:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mentors', '0008_auto_20210420_1200'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='yourletter',
            name='default_image',
        ),
        migrations.AlterField(
            model_name='yourletter',
            name='image',
            field=models.ImageField(default='defaultPic.png', max_length=255, upload_to=''),
        ),
    ]