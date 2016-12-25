from django.conf.urls import url, include
from rest_framework import routers

from apps.articles import views

# Register the ArticleViewSet
router = routers.DefaultRouter()
router.register(r'articles', views.ArticleViewSet)


urlpatterns = [
    # Include the ArticleViewSet urls
    url(r'^', include(router.urls)),

    # URL used for individual article display
    url(r'^(?P<article_id>\d+)/(?P<article_slug>[a-zA-Z0-9_-]+)/$', views.details),
]