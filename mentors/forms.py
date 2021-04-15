from django.forms import ModelForm
from .models import YourLetter


class YourLetterForm(ModelForm):
    class Meta:
        model = YourLetter
        fields = '__all__'