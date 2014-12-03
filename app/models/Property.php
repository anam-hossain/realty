<?php

use Carbon\Carbon;
use Illuminate\Database\Eloquent\SoftDeletingTrait;

class Property extends Eloquent {

    use SoftDeletingTrait;

    protected $table = 'properties';

    protected $fillable = [
    	'property_type', 
    	'amount', 
    	'address', 
    	'description', 
    	'beds',
    	'bathrooms',
    	'car_spaces',
    	'smoking_allowed',
    	'pets_allowed',
    	'available_at' 
    ];

    protected $dates = ['deleted_at'];


    public function photos()
    {
        return $this->hasMany('Photo');
    }

    public function getavailableAtAttribute($value)
    {
        return Carbon::parse($value)->toDateString();
    }

}