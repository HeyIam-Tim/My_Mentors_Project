from django.forms import ModelForm
from .models import YourLetter
from django import forms


class YourLetterForm(ModelForm):
    image = forms.ImageField(widget=forms.FileInput)
    class Meta:
        model = YourLetter
        fields = '__all__'