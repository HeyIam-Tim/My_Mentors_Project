# pylint: disable=E1101
from django.db import models


class MyMentor(models.Model):
    mentor_name = models.CharField(max_length=200, blank=True, null=True)
    image = models.ImageField(blank=True, null=True)
    twitter_link = models.CharField(max_length=200, blank=True, null=True)
    youtube_link = models.CharField(max_length=200, blank=True, null=True)
    text_body = models.TextField(max_length=1500, blank=True, null=True)

    def __str__(self):
        return self.mentor_name


class Course(models.Model):
    mentor = models.ForeignKey(MyMentor, blank=True, null=True, on_delete=models.CASCADE)
    custom_id = models.IntegerField(blank=True, null=True)
    thumbnail = models.ImageField(max_length=255, null=True, blank=True)
    link = models.CharField(max_length=2085, null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return str(self.custom_id)


class YourLetter(models.Model):
    name = models.CharField(max_length=255, null=True)
    image = models.ImageField(max_length=255, null=False, blank=False)
    text = models.TextField(null=True, max_length=1500)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['-created']
    

