<?php



Route::get('/{any}', 'SinglePageController@index')->where('any', '.*');

Route::get('/', function () {
    return view('layouts/principal');
});
