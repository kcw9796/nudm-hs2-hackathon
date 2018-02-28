from .models import Volunteers, Agencies,VolunteerOpportunityAssociations, Opportunities, KeywordAssociations, Keywords, VolunteerOpportunityAssociations
from .serializers import VolunteersSerializer, AgenciesSerializer, MatchSerializer, UserSerializer, OpportunitiesSerializer, KeywordsMatchSerializer, VolunteerOpportunitySerializer, OpportunityVolunteerSerializer
from django.contrib.auth.models import User, Group
from rest_framework import generics
from django_filters import rest_framework as filters


class UserView(generics.ListAPIView):
	queryset = User.objects.all()
	serializer_class = UserSerializer
	filter_backends = (filters.DjangoFilterBackend,)
	filter_fields = ('username','email')

class VolunteerView(generics.ListAPIView):
	queryset = Volunteers.objects.all()
	serializer_class = VolunteersSerializer
	filter_backends = (filters.DjangoFilterBackend,)
	filter_fields = ('id','email')

class AgencyView(generics.ListAPIView):
	queryset = Agencies.objects.all()
	serializer_class = AgenciesSerializer
	filter_backends = (filters.DjangoFilterBackend,)
	filter_fields = ('id','email')

class OpportunityView(generics.ListAPIView):
	queryset = Opportunities.objects.all()
	serializer_class = OpportunitiesSerializer
	filter_backends = (filters.DjangoFilterBackend,)
	filter_fields = ('id','agency_id')

class MatchView(generics.ListAPIView):
	queryset = VolunteerOpportunityAssociations.objects.all()
	serializer_class = MatchSerializer
	filter_backends = (filters.DjangoFilterBackend,)
	filter_fields = ('opportunity_id','volunteer_id')

class KeywordView(generics.ListAPIView):
	queryset = KeywordAssociations.objects.all()
	serializer_class = KeywordsMatchSerializer
	filter_backends = (filters.DjangoFilterBackend,)
	filter_fields = ('agency_id','opportunity_id','volunteer_id')

class VolunteerOpportunityView(generics.ListAPIView):
	queryset = VolunteerOpportunityAssociations.objects.all()
	serializer_class = VolunteerOpportunitySerializer
	filter_backends = (filters.DjangoFilterBackend,)
	filter_fields = ('opportunity_id','volunteer_id')

class OpportunityVolunteerView(generics.ListAPIView):
	queryset = VolunteerOpportunityAssociations.objects.all()
	serializer_class = OpportunityVolunteerSerializer
	filter_backends = (filters.DjangoFilterBackend,)
	filter_fields = ('opportunity_id','volunteer_id')


# class VolunteerViewSet(viewsets.ModelViewSet):
# 	queryset = Volunteers.objects.all()
# 	serializer_class = VolunteersSerializer

# class AgencyViewSet(viewsets.ModelViewSet):
# 	queryset = Agencies.objects.all()
# 	serializer_class = AgenciesSerializer

# class MatchVolunteersViewSet(viewsets.ModelViewSet):
# 	queryset = VolunteerOpportunityAssociations.objects.all().filter(opportunity_id=1)
# 	serializer_class = MatchVolunteersSerializer


