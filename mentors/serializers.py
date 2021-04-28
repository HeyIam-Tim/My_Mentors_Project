# pylint: disable=E1101
from rest_framework import serializers
from .models import MyMentor, YourLetter, Course


class MyMentorSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyMentor
        fields = '__all__' 


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__' 


class YourLetterSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(default='defaulPic.png')
    class Meta:
        model = YourLetter
        fields = '__all__'