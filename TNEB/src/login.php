
<?php
$logged = 0;
$invalid = 0;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  include 'server.php';
  $firstName = $_POST['firstName'];
  $email = $_POST['email'];
  $password = $_POST['password'];

  // Adjust SQL to use correct variables
  $sql = "SELECT * FROM users WHERE firstName = '$firstName' AND password = '$password'";
  $result = mysqli_query($con, $sql);

  if ($result) {
    $num = mysqli_num_rows($result);
    if ($num > 0) {
      // Login successful
      $logged = 1;
      session_start();

      // Fetch user data
      $row = mysqli_fetch_assoc($result);
      $_SESSION['name'] = $row['name'];
      $_SESSION['dob'] = $row['dob'];
      $_SESSION['phone'] = $row['phone'];
      $_SESSION['email'] = $row['email'];
      $_SESSION['pwd'] = $row['password'];

      header('location: index.html');
    } else {
      // Invalid data
      $invalid = 1;
    }
  } else {
    echo "Error in query: " . mysqli_error($con);
  }
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
  <title>Document</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

  <style>
    body {
      background-image: url("loginimg2.jpeg");
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      background-position: right;
    }
  </style>

  <script>
    function formvalidation() {
      let x = document.forms["login1"]["firstName"].value;
      if (x == "") {
        alert("Name is required");
        return false;
      }
    }
  </script>
</head>
<body>
  <h1 class="text-info text-center">Login to explore</h1>

  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <!-- Form -->
        <div class="card">
          <div class="card-body">
            <form action="login.php" method="post" id="login1" name="login1" onsubmit="return formvalidation()">
              <div class="form-group">
                <label for="firstName">Name</label>
                <input type="text" class="form-control" name="firstName" id="firstName" placeholder="Name" required>
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" name="email" id="email" placeholder="Email" required>
              </div>

              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" name="password" id="password" placeholder="Password" required>
              </div>

              <button class="login-button">Login</button>
            </form>
            <p class="mt-3">Not registered? <a href="connect.php">Create an account</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
