from django.db import models

class Perfume(models.Model):
    CATEGORY_CHOICES = [
        ('Eau de Parfum', 'Eau de Parfum'),
        ('Eau de Toilette', 'Eau de Toilette'),
        ('Cologne', 'Cologne'),
        ('Attar', 'Attar'),
    ]

    name = models.CharField(max_length=255)
    brand = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image_url = models.URLField(max_length=255, blank=True, null=True)
    size_ml = models.IntegerField()
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    stock = models.IntegerField(default=0)
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0.00)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name} by {self.brand}"
