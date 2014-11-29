<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePropertiesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('properties', function(Blueprint $table)
		{
			$table->increments('id');
			$table->enum('property_type', array('house', 'apartment', 'unit'));
			$table->integer('amount');
			$table->string('address');
			$table->text('description');
			$table->tinyInteger('beds')->default(1);
			$table->tinyInteger('bathrooms')->default(1);
			$table->tinyInteger('car_spaces')->default(0);
			$table->tinyInteger('smoking_allowed')->default(0);
			$table->tinyInteger('pets_allowed')->default(0);
			$table->timestamp('available_at');
			
			$table->softDeletes();
			$table->timestamps();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('properties');
	}

}
