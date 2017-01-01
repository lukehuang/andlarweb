from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.generics import get_object_or_404

from apps.articles.models import Article
from apps.articles.serializers import ArticleSerializer


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all().order_by('-created')
    serializer_class = ArticleSerializer


def articles(request):
    article_objects = Article.objects.order_by('-created')
    return render(request, 'articles/articles.html', {'articles': article_objects})


def details(request, article_id, article_slug):

    # Get the article based on its id
    article = get_object_or_404(Article, pk=article_id)

    return render(request, 'articles/details.html', {'article': article})
