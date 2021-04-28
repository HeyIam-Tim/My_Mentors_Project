from django.urls import path
from . import views


urlpatterns = [
    path('', views.IndexPage.as_view(), name='index'),
    path('mentor_list/', views.MentorListAPI.as_view(), name='mentor_list'),
    path('mentor/<int:pk>/', views.MentorPage.as_view(), name='mentor'),
    path('mentor_api/<int:pk>/', views.MentorDetailAPI.as_view(), name='mentor_api'),
    path('course_api/<int:pk>/', views.MentorCourseListAPI.as_view(), name='course_api'),
    path('letter_list/', views.LetterListAPI.as_view(), name='letter_list'),
    path('create_letter/', views.CreateYourLetterPage.as_view(), name='create_letter'),
    path('edit_letter/<int:pk>/', views.EditYourLetterPage.as_view(), name='edit_letter'),
    path('edit_letter_api/<int:pk>/', views.EditYourLetterAPI.as_view(), name='edit_letter_api'),
    path('delete_letter/<int:pk>/', views.DeleteYourLetterPage.as_view(), name='delete_letter'),
]