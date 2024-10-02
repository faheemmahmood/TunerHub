from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import CarModelViewSet, PartViewSet, EventViewSet, register_user, login_user, logout_user

router = DefaultRouter()
router.register(r'car-models', CarModelViewSet)
router.register(r'parts', PartViewSet)
router.register(r'events', EventViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/register/', register_user, name='register'),
    path('api/login/', login_user, name='login'),
    path('api/logout/', logout_user, name='logout'),
]