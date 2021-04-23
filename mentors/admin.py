from django.contrib import admin
from .models import MyMentor, YourLetter, Course


admin.site.register(MyMentor)
admin.site.register(YourLetter)
admin.site.register(Course)