from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User

from apps.authentication.models import AWUser


# Define an inline admin descriptor for AWUser model
# which acts a bit like a singleton
class AWUserInline(admin.StackedInline):
    model = AWUser
    can_delete = False


# Define a new User admin
class UserAdmin(BaseUserAdmin):
    inlines = (AWUserInline, )

# Re-register UserAdmin
admin.site.unregister(User)
admin.site.register(User, UserAdmin)
