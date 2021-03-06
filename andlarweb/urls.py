from django.conf import settings
from django.conf.urls import url, include
from django.conf.urls.static import static
from django.contrib import admin
from apps.articles import views as articles_views

urlpatterns = [
    # Index
    url(r'^$', articles_views.articles),

    # Admin
    url(r'^admin/', admin.site.urls),

    # Logging in through DRF browsable API
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),

]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


# Add apps to urlpatterns
if 'apps.api' in settings.INSTALLED_APPS:
    urlpatterns += [
        url(r'^api/', include('apps.api.urls')),
    ]

if 'apps.articles' in settings.INSTALLED_APPS:
    urlpatterns += [
        url(r'^articles/', include('apps.articles.urls')),
    ]

# Add api urls
if 'rest_framework' in settings.INSTALLED_APPS:
    from apps.api.utils import SharedAPIRootRouter

    # API
    def api_urls():
        return SharedAPIRootRouter.shared_router.urls

    urlpatterns += [
        url(r'^api/', include(api_urls()))
    ]
