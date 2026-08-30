from django.contrib import admin
from .models import Perfume

@admin.register(Perfume)
class PerfumeAdmin(admin.ModelAdmin):
    list_display = ('name', 'brand', 'price', 'size_ml', 'category', 'stock', 'rating')
    list_filter = ('category', 'brand')
    search_fields = ('name', 'brand', 'category')
