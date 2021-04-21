# pylint: disable=E1101
from rest_framework import serializers
from .models import MyMentor, YourLetter


class MyMentorSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyMentor
        fields = '__all__' 


class YourLetterSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(default='defaulPic.png')
    class Meta:
        model = YourLetter
        fields = '__all__'