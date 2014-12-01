<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('index');
});

Route::group(array('prefix' => 'api', 'namespace' => 'Api'), function() {

	Route::get('properties', ['as' => 'api.properties.index', 'uses' => 'PropertiesController@index']);
	Route::get('properties/{propertyId}', ['as' => 'api.properties.show', 'uses' => 'PropertiesController@show']);
	Route::post('properties', ['as' => 'api.properties.store', 'uses' => 'PropertiesController@store']);
	Route::delete('properties/{propertyId}', ['as' => 'api.properties.store', 'uses' => 'PropertiesController@destroy']);
});

App::missing(function($exception)
{
	return Redirect::to('/');
});
