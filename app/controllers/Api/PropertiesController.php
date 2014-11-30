<?php namespace Api;

use Property;
use Response;

class PropertiesController extends \BaseController {

	/**
	 * Send back all comments as JSON
	 *
	 * @return Response
	 */
	public function index()
	{
		return Response::json(Property::get());
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		Property::create(array(
			'author' => Input::get('author'),
			'text' => Input::get('text')
		));

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