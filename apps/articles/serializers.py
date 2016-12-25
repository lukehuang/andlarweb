from rest_framework import serializers
from apps.articles.models import Article


class ArticleSerializer(serializers.ModelSerializer):
    absolute_url = serializers.CharField(source='get_absolute_url', read_only=True)

    class Meta:
        model = Article
        fields = (
            'absolute_url',
            'author',
            'content'
            'created',
            'id',
            'ingress',
            'title',
        )
