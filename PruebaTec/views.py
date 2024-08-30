from django.http import HttpResponse
from django.shortcuts import render

def vista1Def(request):
    return render(request, 'index.html')