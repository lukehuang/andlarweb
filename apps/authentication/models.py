from django.db import models
from django.contrib.auth.models import User


def image_path(instance, filename):
    extension = filename.split('.')[-1]
    return 'authentication/{}.{}'.format(instance.user.id, extension)


class AWUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to=image_path, default='media/authentication/0.png')
