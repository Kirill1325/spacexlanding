from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from .models import Advantage, MenuItem
from .serializer import AdvantageSerializer, MenuItemSerializer
from rest_framework.response import Response

class AdvantagesView(APIView):
    def get(self, request):
        output = [
            {
                'id': advantage.id,
                'title': advantage.title,
                'description': advantage.description,
                'subtitle': advantage.subtitle
            } for advantage in Advantage.objects.all()
        ]
        return Response(output)

    def post(self, request):
        serializer = AdvantageSerializer(data=request.data)

        advantageAmount = Advantage.objects.all().count()
        if advantageAmount >= 4:
            return Response({"detail": "Maximum of 4 advantages allowed"}, status=status.HTTP_400_BAD_REQUEST)

        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data)
    

class MenuItemsView(APIView):
    def get(self, request):
        output = [
            {
                'id': menuItem.id,
                'title': menuItem.title
            } for menuItem in MenuItem.objects.all()
        ]
        return Response(output)
    
    def post(self, request):
        serializer = MenuItemSerializer(data=request.data)

        menuItemsAmount = MenuItem.objects.all().count()
        print(menuItemsAmount)
        if menuItemsAmount >= 6:
            return Response({"detail": "Maximum of 6 menu items allowed"}, status=status.HTTP_400_BAD_REQUEST)

        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data)