from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Perfume
from .serializers import PerfumeSerializer

class PerfumeViewSet(viewsets.ModelViewSet):
    queryset = Perfume.objects.all()
    serializer_class = PerfumeSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    
    filterset_fields = ['category']
    search_fields = ['name', 'brand', 'category']
    ordering_fields = ['price', 'rating', 'created_at']
