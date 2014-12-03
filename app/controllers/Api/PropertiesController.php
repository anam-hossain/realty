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
		return $input;
		if (isset($input['pets'])) $input['pets'] = 1;

		if (isset($input['smoking'])) $input['smoking'] = 1;
		
		if (isset($input['dateAvailable'])) {
			$input['dateAvailable'] = Carbon::parse($input['dateAvailable']);
		}

		Property::create($input);

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