from django.contrib.auth.models import User
from rest_framework import serializers
from apps.articles.models import Article


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'first_name',
            'last_name',
        )


class ArticleSerializer(serializers.ModelSerializer):
    absolute_url = serializers.CharField(source='get_absolute_url', read_only=True)
    author = UserSerializer

    class Meta:
        model = Article
        fields = (
            'absolute_url',
            'id',
            'author',
            'created',
            'title',
            'ingress',
            'content',
        )
