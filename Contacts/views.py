from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpResponseRedirect

# Create your views here.

def getIndex(request):
    return render(request, 'index.html')

def getContacts(request):
    return HttpResponse('contact.html')

def switchIndex(request):
    return HttpResponseRedirect("home/")