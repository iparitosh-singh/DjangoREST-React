from articles.api.views import ArticleViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ArticleViewSet, base_name='articles')
urlpatterns = router.urls


# from django.urls import path
# from .views import (
#     ArticleListView,
#     ArticleDetailView,
#     ArticleCreateView,
#     ArticleDeleteView,
#     ArticleUpdateView,
#     )


# urlpatterns = [
#     path('', ArticleListView.as_view()),
#     path('create/', ArticleCreateView.as_view()),
#     path('<int:pk>', ArticleDetailView.as_view()),
#     path('<int:pk>/delete', ArticleDeleteView.as_view()),
#     path('<int:pk>/update', ArticleUpdateView.as_view()),
# ]