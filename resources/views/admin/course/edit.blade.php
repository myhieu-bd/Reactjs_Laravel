<!doctype html>
<html lang="en">

<head>
    <title>Edit Photo</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
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

<body style="height: 100%; width: 90%; margin: auto;">
    <div style="height: 50%; width: 40%; margin: auto;">
        <h1 style="text-align: center;">EDIT COURSE</h1>
        <img src="{{$course->image}}" alt="" width="500px;">
        <form action="{{'/admin/courses/'.$course->id}}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PATCH')
            <div class="form-group">
                <label for=""><b>Title</b></label>
                <input type="text" class="form-control" id="" placeholder="Title" name="title" value="{{$course->title}}">
            </div>
            <div class="form-group">
                <label for="category"><b>Category:</b></label>
                <select name="category" id="category">
                    @foreach($categories as $category)
                    <option label="{{$category->title}}"  value="{{$category->id}}" ></option>
                    @endforeach
                </select>
            </div>
            <div class="form-group">
                <label for=""><b> Image</b></label>
                <input type="file" class="form-control" id="" placeholder="image" name="image" value="{{$course->image}}">
            </div>
           
            <div class="form-group">
                <label for=""><b>Description</b></label>
                <input style="height: 200px; word-wrap: break-word;"class="form-control" name="description" value="{{$course->description}}">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</body>

</html>