from django.contrib.auth.models import User
from rest_framework import serializers
from apps.articles.models import Article


class UserSerializer(serializers.ModelSerializer):
    avatar = serializers.SerializerMethodField()

    def get_avatar(self, instance):
        return instance.awuser.avatar.url

    class Meta:
        model = User
        fields = (
            'first_name',
            'last_name',
            'avatar',
        )


class ArticleSerializer(serializers.ModelSerializer):
    absolute_url = serializers.CharField(source='get_absolute_url', read_only=True)
    author = UserSerializer()
    image = serializers.SerializerMethodField()

    def get_image(self, instance):
        return instance.image.url

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
            'image',
        )
