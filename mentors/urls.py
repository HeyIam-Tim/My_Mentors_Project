from django.urls import path
from . import views


urlpatterns = [
    path('', views.IndexPage.as_view(), name='index'),
    path('mentor_list/', views.MentorListAPI.as_view(), name='mentor_list'),
    path('letter_list/', views.LetterListAPI.as_view(), name='letter_list'),
    # path('mentor_list/<int:pk>/', views.MentorDetail.as_view(), name='mentor'),
]