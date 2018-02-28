from django.urls import path
from django.conf.urls import url, include
from .models import Volunteers, Agencies, VolunteerOpportunityAssociations
from rest_framework import routers, serializers, viewsets
from matching import views 
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^accounts/', views.UserView.as_view()),
    url(r'^volunteers/', views.VolunteerView.as_view()),
    url(r'^agencies/', views.AgencyView.as_view()),
    url(r'^opportunities/', views.OpportunityView.as_view()),
    url(r'^keyword_associations/', views.KeywordAssociationsView.as_view()),
    url(r'^volunteer_opportunity/', views.VolunteerOpportunityView.as_view()),
    url(r'^opportunity_volunteer/', views.OpportunityVolunteerView.as_view()),
]

