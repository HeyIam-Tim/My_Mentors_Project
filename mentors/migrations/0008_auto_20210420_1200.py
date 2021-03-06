# Generated by Django 3.2 on 2021-04-20 07:00

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('mentors', '0007_alter_yourletter_options'),
    ]

    operations = [
        migrations.AddField(
            model_name='yourletter',
            name='default_image',
            field=models.ImageField(blank=True, default='defaultPic.png', max_length=255, null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='yourletter',
            name='image',
            field=models.ImageField(default=django.utils.timezone.now, max_length=255, upload_to=''),
            preserve_default=False,
        ),
    ]
