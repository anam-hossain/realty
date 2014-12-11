<!DOCTYPE html>
<html lang="en" ng-app="realtyApp">
<head ng-controller="LayoutsCtrl">
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>{{ Page.title() }}</title>

  <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css">
  <link rel="stylesheet" href="app.css">
</head>
<body>
  <div class="container">
    <div class="header">
      <nav ng-controller="WidgetsCtrl">
        <ul class="nav nav-pills pull-right">
          <li role="presentation" ng-class="{active: $route.current.activetab == 'home'}"><a href="/">Home</a></li>
          <li role="presentation" ng-class="{active: $route.current.activetab == 'advertise'}"><a href="#/properties/advertise">Place an Ad</a></li>
        </ul>
      </nav>
      <h3 class="text-muted"><a href="/">Realty</a></h3>
    </div>

    <div ng-view></div>

    <footer class="footer">
      <p>&copy; Realty 2014</p>
    </footer>

  </div>

  <script src="bower_components/angular/angular.js"></script>
  <script src="bower_components/angular-route/angular-route.js"></script>
  <script src="bower_components/angular-resource/angular-resource.js"></script>
  <script src="bower_components/angular-utils-pagination/dirPagination.js"></script>
  <script src="app.js"></script>
</body>
</html>