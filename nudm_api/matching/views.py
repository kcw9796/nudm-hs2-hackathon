from .models import Volunteers, Agencies,VolunteerOpportunityAssociations, Opportunities, KeywordAssociations, Keywords, VolunteerOpportunityAssociations
from .serializers import VolunteersSerializer, AgenciesSerializer, UserSerializer, OpportunitiesSerializer, KeywordAssociationsSerializer, VolunteerOpportunitySerializer, OpportunityVolunteerSerializer, VolunteerOpportunityWriteSerializer
from django.contrib.auth.models import User, Group
from rest_framework import generics
from django_filters import rest_framework as filters
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from django.views.decorators.csrf import csrf_exempt


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
	filter_fields = ('agency_id',)

class KeywordAssociationsView(generics.ListAPIView):
	queryset = KeywordAssociations.objects.all()
	serializer_class = KeywordAssociationsSerializer
	filter_backends = (filters.DjangoFilterBackend,)
	filter_fields = ('agency_id','opportunity_id','volunteer_id')


class VolunteerOpportunityView(generics.ListCreateAPIView):
	queryset = VolunteerOpportunityAssociations.objects.all()
	serializer_class = VolunteerOpportunitySerializer
	filter_backends = (filters.DjangoFilterBackend,)
	filter_fields = ('volunteer_id',)

	@csrf_exempt
	def create(self, request, *args, **kwargs):
		serializer = VolunteerOpportunityWriteSerializer(data=request.data)
		if(serializer.is_valid()):
			serializer.save();
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class OpportunityVolunteerView(generics.ListAPIView):
	queryset = VolunteerOpportunityAssociations.objects.all()
	serializer_class = OpportunityVolunteerSerializer
	filter_backends = (filters.DjangoFilterBackend,)
	filter_fields = ('opportunity_id',)




