from django.db import models
from django.db.models import permalink
from django.template.defaultfilters import slugify

from unidecode import unidecode

from django.contrib.auth.models import User


def image_path(instance, filename):
    extension = filename.split('.')[-1]
    return 'articles/{}.{}'.format(instance.id, extension)


class Article(models.Model):
    author = models.ForeignKey(User)
    created = models.DateTimeField(auto_now_add=True, editable=False)
    title = models.CharField(max_length=50)
    ingress = models.TextField(max_length=100)
    content = models.TextField()
    image = models.ImageField(upload_to=image_path)

    def __str__(self):
        return self.title

    @property
    def slug(self):
        return slugify(unidecode(self.title))

    @permalink
    def get_absolute_url(self):
        return 'article_details', None, {'article_id': self.id, 'article_slug': self.slug}

    class Meta:
        ordering = ('created',)
