from rest_framework import serializers
from .models import Volunteers,Agencies,VolunteerOpportunityAssociations, Opportunities
from django.contrib.auth.models import User, Group

class VolunteersSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Volunteers
		fields = ('id','name','phone_number','email','is_group','group_count','created_at','updated_at')

class AgenciesSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Agencies
		fields = ('id','name','address','email','phone_number','office_hours','contact_name','about','website_url','created_at','updated_at')

class OpportunitiesSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Opportunities
		fields = ('id','short_description','long_desription','location_description','time_description','event_start_time','volunteer_needed_count',
			'can_signup_online','agency_id','created_at','updated_at')

class MatchSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = VolunteerOpportunityAssociations
		fields = ('id','opportunity_id','volunteer_id','date','created_at','updated_at')

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ('username', 'password', 'first_name', 'last_name', 'email',)