from django.db import models


class Article(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()

    def __str__(self):
        return self.title

    def __repr__(self):
        return f'Article("{self.title}" ,<content>)'

    class Meta:
        verbose_name_plural = "Articles"
