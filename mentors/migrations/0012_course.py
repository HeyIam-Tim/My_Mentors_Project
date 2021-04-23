# Generated by Django 3.2 on 2021-04-23 11:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mentors', '0011_alter_yourletter_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('custom_id', models.IntegerField(blank=True, null=True)),
                ('thumbnail', models.ImageField(blank=True, max_length=255, null=True, upload_to='')),
                ('link', models.CharField(blank=True, max_length=2085, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('mentor', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='mentors.mymentor')),
            ],
        ),
    ]
