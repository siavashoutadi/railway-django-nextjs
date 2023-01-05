from django.contrib import admin
from django.urls import include, path
from django.views.decorators.csrf import csrf_exempt
from strawberry.django.views import GraphQLView

from .schema import schema

urlpatterns = [
    path('graphql', csrf_exempt(GraphQLView.as_view(graphiql=False, schema=schema))),
    path('admin/', admin.site.urls),
    path('ht/M4ZUFrstgmRNMfJfclTsyCe6Xosmd36EE2NxeU4CDUg',
         include('health_check.urls'))
]
