<!doctype html>
<html lang="en">

<head>
    <title>Add Product</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
</head>

<body style="height: 100%; width: 90%; margin: auto;">
    <div style="height: 50%; width: 40%; margin: auto;">
        <h1 style="text-align: center;">Add Category</h1>
        <form action="/admin/categories" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="form-group">
                <label for="">Title</label>
                <input type="text" class="form-control" id="" placeholder="Enter name category" name="title">
                <label for="">Image</label>
                <input type="file" class="form-control" id="" name="image">
                <label for="">Description</label>
                <textarea name="description" id="" cols="30" rows="10"  placeholder="Enter description ...">Description</textarea>
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</body>

</html>