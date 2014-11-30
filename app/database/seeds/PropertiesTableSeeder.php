<?php

use Faker\Factory as Faker;

class PropertiesTableSeeder extends Seeder {

	protected $propertyTypes = [
		'house',
		'apartment',
		'unit'
	];

	protected $permit = [
		0,
		1
	];

	protected $descriptions = [
		"Discover a place that epitomises modern living, with everything you need all in one place. With beautifully designed apartments, parks and waterfront access, specialty shopping, transport on site and a sense of space not yet seen in such a central location, LINC delivers in space, style and convenience.

		\nDiscover LINC and get connected to a great lifestyle…

		\nLinc is the latest residential building in the vibrant Discovery Point community, offering a range of apartments.

		\nWith such a unique parkside, waterside, cityside setting, they have been specifically created to provide the ultimate in indoor-outdoor living.
		",

		'This is an opportunity for living in a brand new contemporary one bedroom apartment plus study in the LINC RESIDENTIAL by Australand. This apartment is perfectly positioned in the heart of Wolli Creek, surrounding by shops, cafes and public transportation.',

		'Large north-east facing 2 bedroom plus study with 2 bathrooms and 1 car space. 
		Located next to a park along water towards Wolli Creek train station and shops.
		Convenience at its best being only 10kms from Sydney CBD and M5 motorway around the corner.'
	];


	public function run()
	{
		$faker = Faker::create('en_AU');

		foreach(range(1, 20) as $index)
		{
			Property::create([
				'property_type' 	=> $this->randomPropertyType(), 
		    	'amount'			=> $faker->randomNumber(3), 
		    	'address'			=> $faker->address, 
		    	'description'		=> $this->randomDescription(), 
		    	'beds'				=> $faker->numberBetween(1, 6),
		    	'bathrooms'			=> $faker->numberBetween(1, 3),
		    	'car_spaces'		=> $faker->numberBetween(0, 4),
		    	'smoking_allowed'	=> array_rand($this->permit),
		    	'pets_allowed'		=> array_rand($this->permit),
		    	'available_at'		=> $faker->dateTimeBetween($startDate = 'now', $endDate = '+30 days') 
			]);
		}
	}


	protected function randomPropertyType()
	{
		$randIndex = array_rand($this->propertyTypes);

		return $this->propertyTypes[$randIndex];
	}

	protected function randomDescription()
	{
		$randIndex = array_rand($this->descriptions);

		return $this->descriptions[$randIndex];
	}

}