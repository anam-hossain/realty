<?php

class Photo extends Eloquent {

    protected $table = 'photos';

    protected $fillable = [
    	'property_id', 
    	'name', 
    	'location'
    ];

    public function property()
    {
        return $this->belongsTo('Property');
    }

}