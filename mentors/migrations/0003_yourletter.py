# Generated by Django 3.2 on 2021-04-14 04:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mentors', '0002_rename_mymentors_mymentor'),
    ]

    operations = [
        migrations.CreateModel(
            name='YourLetter',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=255, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('text', models.TextField(blank=True, max_length=1500, null=True)),
            ],
        ),
    ]
