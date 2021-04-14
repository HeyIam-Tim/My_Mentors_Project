# pylint: disable=E1101
from django.shortcuts import render
from django.views.generic import TemplateView

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404

from .models import MyMentor, YourLetter
from .serializers import MyMentorSerializer, YourLetterSerializer


class IndexPage(TemplateView):
    template_name = 'mentors/index.html'


class MentorListAPI(APIView):
    """
        retrieves all mymentors and output them
    """
    def get(self, request, format=None):
        mentors = MyMentor.objects.all()
        serializer = MyMentorSerializer(mentors, many=True)
        return Response(serializer.data)


class LetterListAPI(APIView):
    """
        retrieves all youtletters and output them, or create a new yourletter
    """
    def get(self, request, format=None):
        letters = YourLetter.objects.all()
        serializer = YourLetterSerializer(letters, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = YourLetterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CreateYourLetterPage(TemplateView):
    template_name = 'mentors/create_letter.html'


