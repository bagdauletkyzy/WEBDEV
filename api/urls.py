from django.urls import path
from api.views import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
)

urlpatterns = [
    path('products/', ProductListAPIView.as_view(), name='products-list'),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view(), name='products-detail'),

    path('categories/', CategoryListAPIView.as_view(), name='categories-list'),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view(), name='categories-detail'),
    path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view(), name='categories-products'),
]