from django.conf.urls import url

from apps.api.utils import SharedAPIRootRouter
from apps.articles import views


urlpatterns = [
    # URL used for individual article display
    url(r'^(?P<article_id>\d+)/(?P<article_slug>[a-zA-Z0-9_-]+)/$', views.details, name='article_details'),
]

router = SharedAPIRootRouter()
router.register('articles', views.ArticleViewSet)
