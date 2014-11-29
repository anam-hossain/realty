<?php

use Faker\Factory as Faker;

class PhotosTableSeeder extends Seeder {

	protected $photos = [];

	public function __construct()
	{
		for ($i = 1; $i <= 15; $i++) {
			$this->photos[] = $i;
		}
	}

	public function run()
	{
		$faker = Faker::create();

		$properties = Property::all();

		foreach($properties as $property)
		{
			$photos = $this->randomPhotos(rand ( 1 , 7));

			foreach ($photos as $photo) {
				Photo::create([
					'property_id' 	=> $property->id,
					'name'			=> ($photo == 0) ? $faker->randomNumber(1) : $photo
				]);
			}
			
		}
	}


	protected function randomPhotos($totalPhotos)
	{

		$photos = array_rand($this->photos, $totalPhotos);

		return (array) $photos;
	}

}