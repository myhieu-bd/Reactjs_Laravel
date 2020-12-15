<!doctype html>
<html lang="en">

<head>
    <title>Add Course</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
</head>

<body style="height: 100%; width: 90%; margin: auto;">
    <div style="height: 50%; width: 40%; margin: auto;">
        <h1 style="text-align: center;">Add Course</h1>
        <a href="/admin/dashboard"><button class="btn btn-danger">Come back dashboard</button></a>
        <form action="/admin/products" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="form-group">
                <label for="">Title</label>
                <input type="text" class="form-control" id="" placeholder="Title" name="title">
            </div>
            
            @error('title')
            <div class="alert alert-danger">{{ $message }}</div>
            @enderror
            <div class="form-group">
                <label for="category">Category:</label>
                <select name="category" id="category">
                    @foreach($categories as $category)
                    <option label="{{$category->name}}"  value="{{$category->id}}" ></option>
                    @endforeach
                </select>
            </div>

            <div class="form-group">
                <label for="">Image</label>
                <input type="file" class="form-control" id="" placeholder="image" name="image">
            </div>
            @error('image')
            <div class="alert alert-danger">{{ $message }}</div>
            @enderror
            <div class="form-group">
                <label for="">Description</label>
                <input type="text" class="form-control" id="" placeholder="description" name="description">
            </div>
            @error('description')
            <div class="alert alert-danger">{{ $message }}</div>
            @enderror
        
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</body>

</html>