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


class YourLetter(models.Model):
    name = models.CharField(max_length=255, null=True)
    image = models.ImageField(max_length=255, null=False, blank=False)
    text = models.TextField(null=True, max_length=1500)
    default_image = models.ImageField(default='defaultPic.png', max_length=255, null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['-created']
    

