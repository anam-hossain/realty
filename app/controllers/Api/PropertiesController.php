<?php namespace Api;

use Property;
use Response;
use Input;
use Carbon\Carbon;

class PropertiesController extends \BaseController {

	/**
	 * Send back all comments as JSON
	 *
	 * @return Response
	 */
	public function index()
	{
		$properties = Property::with('photos')->orderBy('id', 'desc')->get();

		return Response::json($properties);
	}


	public function show($id)
	{
		$property = Property::with('photos')->find($id);

		return Response::json($property);
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		// Remove empty and boolean false inputs;
		
		$input = array_filter(Input::all());
		//return $input;
		if (isset($input['pets_allowed'])) $input['pets_allowed'] = 1;

		if (isset($input['smoking_allowed'])) $input['smoking_allowed'] = 1;
		
		if (isset($input['available_at'])) {
			$input['available_at'] = Carbon::parse($input['available_at']);
		}

		$property = Property::create($input);

		for ($i=0; $i< rand ( 1 , 5 ); $i++) {
			\Photo::create(['property_id' => $property->id, 'name' => rand (1, 15)]);
		}

		return Response::json(array('success' => true));
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		Property::destroy($id);

		return Response::json(array('success' => true));
	}

}