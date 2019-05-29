<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Guvu</title>
        {{-- TIPOGRAFIAS --}}
        <link rel="stylesheet" href="fonts/Ranga-Bold.ttf">

        {{-- CSS --}}
        <link rel="stylesheet" href="css/app.css">

        {{-- FontAwesome --}}
        <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" 
        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" 
        crossorigin="anonymous">
    </head>
    <body>


    <div id="app">
    
       <!-- usamos yield para mostrar contenido ----->
        @yield('content-body')
    
    
    </div>

    <script src="js/app.js"></script>
    </body>
</html>
