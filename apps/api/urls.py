from django.conf.urls import include, url

from apps.api.utils import SharedAPIRootRouter
from apps.articles import views as article_views


router = SharedAPIRootRouter()
router.register('articles', article_views.ArticleViewSet)

urlpatterns = [
    url(r'^articles/', include(router.urls)),
]
