from django.conf import settings
from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import TemplateView

urlpatterns = [
    # Admin
    url(r'^admin/', admin.site.urls),

    # Index
    url(r'^$', TemplateView.as_view(template_name='index.html'), name='index'),
]

# Add apps to urlpatterns
if 'apps.articles' in settings.INSTALLED_APPS:
    urlpatterns += [
        url(r'^articles/', include('apps.articles.urls')),
    ]
