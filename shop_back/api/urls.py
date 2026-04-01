from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, ProductViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)

urlpatterns = router.urls


urlpatterns = [
    path('products/', views.products_list),
    path('products/<int:id>/', views.product_detail),

    path('categories/', views.categories_list),
    path('categories/<int:id>/', views.category_detail),
    path('categories/<int:id>/products/', views.category_products),
]