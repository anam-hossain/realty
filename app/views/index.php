<!DOCTYPE html>
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

    <div class="well">
      <div class="row">
        <div class="col-sm-4">
          <img class="img-responsive img-thumbnail" src="images/10.jpg">
        </div>
        <div class="col-sm-8">
          <div class="listing-info">
            <div class="list-address">
              <div class="row">
                <div class="col-sm-9">
                  <p><strong>211/16 Lusty Street, Wolli Creek, NSW 2205</strong></p>
                </div>
                <div class="col-sm-3">
                  <p class="text-right rent">$560 per week</p>
                </div>
              </div>
            </div>
            <ul class="list-inline property-type">
              <li><span>Appartment</span></li>
              <li><img src="icon/bed.png" width="22"> 3</li>
              <li><img src="icon/bath.png" width="22"> 1</li>
              <li><img src="icon/car.png" width="22"> 2</li>
            </ul>
            <p>
              Please call Will 0404 665 999 for inspection appointment~ The stylish new apartments are designed for modern living and comfort...
              <br>
              Please call Will 0404 665 999 for inspection appointment.
            </p>
            <p class="text-right">
              <button class="btn btn-primary">Details</button>
            </p> 
          </div>
        </div>
      </div>
    </div>

    <div class="well">
      <div class="row">
        <div class="col-sm-4">
          <img class="img-responsive img-thumbnail" src="images/1.jpg">
        </div>
        <div class="col-sm-8">
          <div class="listing-info">
            <div class="list-address">
              <div class="row">
                <div class="col-sm-9">
                  <p><strong>211/16 Prices Highway, Wolli Creek, NSW 2205</strong></p>
                </div>
                <div class="col-sm-3">
                  <p class="text-right rent">$560 per week</p>
                </div>
              </div>
            </div>
            <ul class="list-inline property-type">
              <li><span>House</span></li>
              <li><img src="icon/bed.png" width="22"> 3</li>
              <li><img src="icon/bath.png" width="22"> 1</li>
              <li><img src="icon/car.png" width="22"> 2</li>
            </ul>
            <p>
              Please call Will 0404 665 999 for inspection appointment~ The stylish new apartments are designed for modern living and comfort...
              <br>
              Please call Will 0404 665 999 for inspection appointment.
            </p>
            <p class="text-right">
              <button class="btn btn-primary">Details</button>
            </p> 
          </div>
        </div>
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