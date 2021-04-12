# pylint: disable=E1101
from rest_framework import serializers
from .models import MyMentor


class MyMentorSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyMentor
        fields = '__all__'
        # fields = ['mentor_name', 'text_body',]