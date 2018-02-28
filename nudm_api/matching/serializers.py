from rest_framework import serializers
from .models import Volunteers,Agencies,VolunteerOpportunityAssociations, Opportunities, KeywordAssociations, Keywords, VolunteerOpportunityAssociations
from django.contrib.auth.models import User, Group

class VolunteersSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Volunteers
		fields = ('id','name','phone_number','email','is_group','group_count','created_at','updated_at')

class AgenciesSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Agencies
		fields = ('id','name','address','email','phone_number','office_hours','contact_name','about','website_url','created_at','updated_at')

class OpportunitiesSerializer(serializers.ModelSerializer):
	class Meta:
		model = Opportunities
		fields = ('id','short_description','long_desription','location_description','time_description','event_start_time','volunteer_needed_count',
			'can_signup_online','agency')
		depth = 1

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ('username', 'password', 'first_name', 'last_name', 'email',)

class KeywordAssociationsSerializer(serializers.ModelSerializer):
	class Meta:
		model = KeywordAssociations
		fields = ('id','keyword')
		depth = 1

class VolunteerOpportunitySerializer(serializers.ModelSerializer):
	class Meta:
		model = VolunteerOpportunityAssociations
		fields = ('id','opportunity')
		depth = 1

class OpportunityVolunteerSerializer(serializers.ModelSerializer):
	class Meta:
		model = VolunteerOpportunityAssociations
		fields = ('id','volunteer')
		depth = 1

class AgencyOpportunitySerializer(serializers.ModelSerializer):
	class Meta:
		model = VolunteerOpportunityAssociations
		fields = ('id','opportunity')
		depth = 1