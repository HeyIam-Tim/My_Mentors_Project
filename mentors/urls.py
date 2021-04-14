from django.urls import path
from . import views


urlpatterns = [
    path('', views.IndexPage.as_view(), name='index'),
    path('mentor_list/', views.MentorListAPI.as_view(), name='mentor_list'),
    path('letter_list/', views.LetterListAPI.as_view(), name='letter_list'),
    path('create_letter/', views.CreateYourLetterPage.as_view(), name='create_letter'),
]