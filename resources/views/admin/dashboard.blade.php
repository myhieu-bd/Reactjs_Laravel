<!doctype html>
<html lang="en">

<head>
    <title>Dash board</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

        <style>
        .tab {
            overflow: hidden;
            border: 1px solid #ccc;
            background-color: #f1f1f1;
        }
        .tab button {
            background-color: inherit;
            float: left;
            border: none;
            outline: none;
            cursor: pointer;
            padding: 14px 16px;
            transition: 0.3s;
        }
        .tab button:hover {
            background-color: #ddd;
        }
        .tab button.active {
            background-color: #ccc;
        }
        .tabcontent{
            display: none;
            padding: 6px 12px;
            border: 1px solid #ccc;
            border-top: none;
        }
        
        </style>
</head>

<body style="height: 100%; width: 90%; margin: auto;">
<script>
function openDashboard(evt, choose) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(choose).style.display = "block";
  evt.currentTarget.className += " active";
}
</script>
@if(Auth::user())
                <form action="/auth/logout" method="get">
                    @csrf
                         <button> <a href="/logout" class="dropdown-item">Logout</a></button>
    
                </form>

                @else
                <div class="account" style="margin-left: 50px; float: right;">
                    <span> <a href="/auth/login"> LOGIN</a> </span> &nbsp;
                  
                    @endif
                </div>

                    <div class="tab">
                    <button class="tablinks" onclick="openDashboard(event, 'Courses')">COURSE({{count($courses)}})</button>
                    <button class="tablinks" onclick="openDashboard(event, 'Categories')">CATEGORIES({{count($categories)}})</button>
                    <button class="tablinks" onclick="openDashboard(event, 'Users')">USERS({{count($users)}})</button>
                    <button class="tablinks" onclick="openDashboard(event, 'Posts')">POSTS({{count($posts)}})</button>
                    </div>
                        <div id="Courses" class="tabcontent" style="display:block;">
                            <a href="/admin/courses/create"><button class="btn btn-danger" style="font-size: 18px;">Add Course</button></a>
                            <table class="table" cellspacing="0">
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Image</th>
                                    <th>Description</th>
                                    <th> Edit</th>
                                    <th>Delete</th>
                                </tr>
                                <?php $i=1;?>
                                @foreach ($courses as $course)
                                <tr>
                                    <td> {{ $i++ }} </td>
                                    <td> {{ $course->title }} </td>
                                    <td> {{ $course->category->title }} </td>
                                    <td><img src="{{$course->image}}" style="height:170px; width:150px; ">
                                    </td>
                                   
                                    <td>{{ $course->description }}</td>

                                    <td>
                                        <form action="{{'/admin/courses/'.$course->id.'/edit'}}" method="GET">
                                            <button type="submit" class="btn btn-link" style="font-size:18px;">Edit</button>
                                        </form>
                                    </td>
                                    <td>
                                        <form action="{{'/admin/courses/'.$course->id}}" method="POST">
                                            @csrf
                                            @method("DELETE")
                                            <button type="submit" class="btn btn-link" style="font-size:18px;">Delete</button>
                                        </form>
                                    </td>
                                </tr>
                                @endforeach
                            </table>
                        </div>
                       
                        
                        <div id="Posts" class="tabcontent">
                         
                            <table class="table" cellspacing="0">
                                <tr>
                                    <th>ID</th>
                                    <th>Name of user's post</th>
                                    <th>Content</th>
                                    <th>Image</th>  
                                    <th> Edit</th>
                                    <th>Delete</th>
                                </tr>
                                <?php $i=1;?>
                                @foreach ($posts as $post)
                                <tr>
                                    <td> {{ $i++ }} </td>
                                    <td> {{ $post->user->fullname }} </td>
                                    <td> {{ $post->content }} </td>
                                    <td><img src="{{$post->image}}" style="height:170px; width:150px; ">
                                    </td>
                               

                                    <td>
                                        <form action="{{'/admin/posts/'.$post->id.'/edit'}}" method="GET">
                                            <button type="submit" class="btn btn-link" style="font-size:18px;">Edit</button>
                                        </form>
                                    </td>
                                    <td>
                                        <form action="{{'/admin/posts/'.$post->id}}" method="POST">
                                            @csrf
                                            @method("DELETE")
                                            <button type="submit" class="btn btn-link" style="font-size:18px;">Delete</button>
                                        </form>
                                    </td>
                                </tr>
                                @endforeach
                            </table>
                        </div>
                       

                        <div id="Users" class="tabcontent">
                        <a href="/admin/posts/create"><button class="btn btn-danger" style="font-size: 18px;">Add User</button></a>
                            <table class="table" cellspacing="0">
                                <tr>
                                    <th>Username</th>
                                    <th>Fullname</th>
                                    <th>Avatar</th>
                                    <th>Date of birth</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Role</th>
                                    <th>Delete</th>
                                    <th>Update</th>
                                </tr>
                                @foreach($users as $user)
                                <tr>
                                    <td>{{$user->username}}</td>
                                    <td>{{$user->fullname}}</td>
                                    <td><img src="{{$user->avatar}}" style="height:170px; width:150px; "></td>
                                    <td>{{$user->dOB}}</td>
                                    <td>{{$user->email}}</td>
                                    <td>{{$user->address}}</td>
                                    <td>{{$user->role}}</td>
                                    <td style="width:100px;">
                                        <form action="/admin/users/{{$user->id}}" method="POST">
                                            @csrf
                                            @method("DELETE")
                                            <button class="btn btn-primary" style="font-size:18px;">Delete</button>
                                        </form>
                                    </td>

                                    <td style=" width:100px;">
                                        <form action="/admin/users/{{$user->id}}/edit" method="GET">
                                            @csrf
                                            <button class="btn btn-primary" style="font-size:18px;">Edit</button>
                                        </form>
                                    </td>

                                </tr>

                                @endforeach

                            </table>

                        </div>

                       
                        <div id="Categories" class="tabcontent">
                        <a href="/admin/posts/create"><button class="btn btn-danger" style="font-size: 18px;">Add Category</button></a>
                            <table class="table" cellspacing="0">

                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Image</th>
                                    <th>Description</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                                <?php $i=1;?>
                                @foreach ($categories as $category)
                                <tr>
                                    <td> {{ $i++ }} </td>
                                    <td> {{ $category->title }} </td>
                                    <td><img src="{{$category->image}}" style="height:170px; width:150px; "> </td>
                                    <td> {{ $category->description }} </td>

                                    <td>
                                        <form action="{{'/admin/categories/'.$category->id.'/edit'}}" method="GET">
                                            <button type="submit" class="btn btn-link" style="font-size:18px;">Edit</button>
                                        </form>
                                    </td>
                                    <td>
                                        <form action="{{'/admin/categories/'.$category->id}}" method="POST">
                                            @csrf
                                            @method("DELETE")
                                            <button type="submit" class="btn btn-link" style="font-size:18px;">Delete</button>
                                        </form>
                                    </td>
                                </tr>
                                @endforeach
                            </table>
                        </div>
                    


</body>

</html>