from django.urls import path
from django.conf.urls import url, include
from .models import Volunteers, Agencies, VolunteerOpportunityAssociations
from rest_framework import routers, serializers, viewsets
from matching import views 
from rest_framework.urlpatterns import format_suffix_patterns

# router = routers.DefaultRouter()
# router.register(r'volunteers', VolunteerViewSet)
# router.register(r'agencies', AgencyViewSet)
# router.register(r'matches', MatchVolunteersViewSet)
# router.register(r'accounts/(?P<username>.+)/$', views.UserView)

urlpatterns = [
    # url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^accounts/', views.UserView.as_view()),
    url(r'^volunteers/', views.VolunteerView.as_view()),
    url(r'^agencies/', views.AgencyView.as_view()),
    url(r'^opportunities/', views.OpportunityView.as_view()),
    url(r'^match/', views.MatchView.as_view()),
    # url(r'^volunteers/$', views.VolunteerList.as_view()),
    # url(r'^volunteers/(?P<pk>.+)/$', views.Volunteer.as_view()),
    
]

# urlpatterns = format_suffix_patterns(urlpatterns)