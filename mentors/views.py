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
    def get(self, request, format=None):
        mentors = MyMentor.objects.all()
        serializer = MyMentorSerializer(mentors, many=True)
        return Response(serializer.data)


# class MentorDetail(APIView):
#     def get_object(self, pk):
#         try:
#             return MyMentor.objects.get(pk=pk)
#         except MyMentor.DoesNotExist:
#             raise Http404

#     def get(self, request, pk, format=None):
#         mentor = self.get_object(pk)
#         serializer = MyMentorSerializer(mentor)
#         return Response(serializer.data)


class LetterListAPI(APIView):
    def get(self, request, format=None):
        letters = YourLetter.objects.all()
        serializer = YourLetterSerializer(letters, many=True)
        return Response(serializer.data)


