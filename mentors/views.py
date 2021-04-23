# pylint: disable=E1101
from django.shortcuts import render
from django.views.generic import TemplateView, DetailView
from django.views.generic.edit import CreateView, UpdateView

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404

from .models import MyMentor, YourLetter
from .serializers import MyMentorSerializer, YourLetterSerializer
from .forms import YourLetterForm


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



class EditYourLetterPage(UpdateView):
    form_class = YourLetterForm
    queryset = YourLetter.objects.all()
    template_name = 'mentors/edit_letter.html'

    def get_context_data(self, **kwargs): #throw a letter into context
        context = super().get_context_data(**kwargs)
        pk = self.kwargs.get(self.pk_url_kwarg)
        letter = YourLetter.objects.get(id=pk)
        context['letter'] = letter
        return context



class MentorPage(DetailView):
    model = MyMentor
    template_name = 'mentors/mentor.html'
    context_object_name = 'mentor'


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
 

class EditYourLetterAPI(APIView):
    """
        Edit and delete a yourletter instance. 
    """
    def get_object(self, pk):
        try:
            return YourLetter.objects.get(id=pk)
        except YourLetter.DoesNotExist:
            raise Http404 
             
    def put(self, request, pk, format=None):
        letter = self.get_object(pk)
        image = letter.image
        if 'image' not in request.data: #if no image set an established one
            request.data._mutable = True
            request.data['image'] = image
        serializer = YourLetterSerializer(letter, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        letter = self.get_object(pk)
        letter.delete()
        return Response('deleted')


class EditYourLetterPage(UpdateView):
    form_class = YourLetterForm
    queryset = YourLetter.objects.all()
    template_name = 'mentors/edit_letter.html'

    def get_context_data(self, **kwargs): #throw a letter into context
        context = super().get_context_data(**kwargs)
        pk = self.kwargs.get(self.pk_url_kwarg)
        letter = YourLetter.objects.get(id=pk)
        context['letter'] = letter
        return context


class DeleteYourLetterPage(TemplateView):
    template_name = 'mentors/delete_letter.html'

    