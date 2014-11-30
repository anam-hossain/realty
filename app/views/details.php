<!doctype html>
<html lang="en" ng-app>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Realty</title>

  <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css">
  <link rel="stylesheet" href="app.css">
</head>
<body>
  <div class="container">
    <div class="header">
      <nav>
        <ul class="nav nav-pills pull-right">
          <li role="presentation" class="active"><a href="#">Home</a></li>
          <li role="presentation"><a href="#">About</a></li>
          <li role="presentation"><a href="#">Contact</a></li>
        </ul>
      </nav>
      <h3 class="text-muted">Realty</h3>
    </div>

    <div class="well photo-viewer">
      <div class="row">
        <div class="col-sm-10 col-xs-9">
          <div class="main-photo">
            <img class="img-responsive img-rounded" src="images/1.jpg">
          </div>
        </div>
        <div class="col-sm-2 col-xs-3">
          <div class="thumb">
            <img class="img-responsive img-thumbnail" src="images/2.jpg">
            <img class="img-responsive img-thumbnail" src="images/3.jpg">
            <img class="img-responsive img-thumbnail" src="images/4.jpg">
            <img class="img-responsive img-thumbnail" src="images/2.jpg">
            <img class="img-responsive img-thumbnail" src="images/3.jpg">
          </div>
        </div>
      </div>
    </div>

    <div class="row marketing">
      <div class="col-lg-6">
        <h4>Subheading</h4>
        <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

        <h4>Subheading</h4>
        <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

        <h4>Subheading</h4>
        <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
      </div>

      <div class="col-lg-6">
        <h4>Subheading</h4>
        <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

        <h4>Subheading</h4>
        <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

        <h4>Subheading</h4>
        <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
      </div>
    </div>

    <footer class="footer">
      <p>&copy; Realty 2014</p>
    </footer>

  </div>

  <script src="bower_components/angular/angular.js"></script>
  <script src="bower_components/angular-route/angular-route.js"></script>
  <script src="bower_components/angular-resource/angular-resource.js"></script>
  <script src="app.js"></script>
</body>
</html>