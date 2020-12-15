  
<!DOCTYPE html>
<html lang="">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Title Page</title>

    <style>
    form{
    border: 3px solid #f1f1f1;
    width: 500px;
    margin: auto;
}


button {
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }
  button:hover {
      background-color: chocolate;
  }
   input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
    </style>
</head>

<body class="container">
    <!--====================Đăng nhập======================-->
    <div style="text-align: center;">
        <h2>Welcome to ...</h2>
        <h4>Please Login </h4>
    </div>
    <div style="width:500px; margin: 50px auto auto auto; border: solid 1px; padding: 10px 10px 10px 10px; background-color: #
EEEEEE;">
        <form class="form-horizontal" action="/auth/login" method="POST">
            @csrf
            <p style="color:red">{{Request::get('error')}}</p>
            <div class="form-group">
                <label class="control-label col-sm-2">Username:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" name="username" placeholder="Enter username"
                      >
                </div>
            </div>
            @error('username')
            <div class="alert alert-danger">{{ $message }}</div>
            @enderror
            <div class="form-group">
                <label class="control-label col-sm-2">Password:</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" name="password" placeholder="Enter password">
                </div>
            </div>
            @error('password')
            <div class="alert alert-danger">{{ $message }}</div>
            @enderror
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <div class="checkbox">
                        <label><input type="checkbox"> Remember me</label>
                    </div>
                </div>
            </div>
            <p style="color:red"></p>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-default">Submit</button>
                </div>
            </div>
        </form>
    </div>

  
</body>

</html>