// Define a functional component called Navbar
function Navbar() {
  function openNav(){
    document.getElementById("mySidenav").style.width = "250px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
   return (
     <>
       {/* Main banner section */}
       <div class="banner_bg_main">
         {/* Container for header section */}
         <div class="container">
           {/* Top header section */}
           <div class="header_section_top">
             <div class="row">
               <div class="col-sm-12">
                 {/* Custom menu */}
                 <div class="custom_menu">
                   <ul>
                     <li><a href="#">Top Selling</a></li>
                     <li><a href="#">Gift Ideas</a></li>
                     <li><a href="#">Newly Added</a></li>
                     <li><a href="#">Today's Deals</a></li>
                     <li><a href="#">Customer Service</a></li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
         </div>
         
         {/* Logo section */}
         <div class="logo_section">
           <div class="container">
             <div class="row">
               <div class="col-sm-12">
                 <div class="logo">
                   <a class="text-white" href="index.html">
                     {/* <img src="images/logo.png"/> */}
                     {/* <h1 class="banner_taital">HueShoppe</h1> */}
                   </a>
                 </div>
               </div>
             </div>
           </div>
         </div>
         
         {/* Header section */}
         <div class="header_section">
           <div class="container">
             <div class="containt_main">
               {/* Side navigation */}
               <div id="mySidenav" class="sidenav">
                 <a href="javascript:void(0)" class="closebtn" onClick={()=>closeNav()}>&times;</a>
                 <a href="index.html">Home</a>
                 <a href="Custom T-Shirt Services.html">Custom T-Shirt Services</a>
                 <a href="Camian Photo Studio.html">Camian Photo Studio</a>
                 <a href="3D Customized Woodcraft Services.html">3D Customized Woodcraft Services</a>
               </div>
               <span class="toggle_icon" onClick={()=>openNav()}>
                 <img src="images/toggle-icon.png"/>
               </span>
               
               {/* Dropdown for categories */}
               <div class="dropdown">
                 <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   All Category
                 </button>
                 <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                   <a class="dropdown-item" href="#">Custom T-Shirt Services</a>
                   <a class="dropdown-item" href="#">Camian Photography Services</a>
                   <a class="dropdown-item" href="#"> 3D Custom Woodcraft Services</a>
                 </div>
               </div>
               
               {/* Search bar */}
               <div class="main">
                 <div class="input-group">
                   <input type="text" class="form-control" placeholder="Search this blog"/>
                   <div class="input-group-append">
                     <button class="btn btn-secondary" type="button" style={{backgroundColor: "#f26522", borderColor:"#f26522"}}>
                       <i class="fa fa-search"></i>
                     </button>
                   </div>
                 </div>
               </div>
               
               {/* Language and login menu */}
               <div class="header_box">
                 <div class="lang_box">
                   <a href="#" title="Language" class="nav-link" data-toggle="dropdown" aria-expanded="true">
                     <img src="images/flag-uk.png" alt="flag" class="mr-2" title="United Kingdom"/> English <i class="fa fa-angle-down ml-2" aria-hidden="true"></i>
                   </a>
                   <div class="dropdown-menu">
                     <a href="#" class="dropdown-item">
                       <img src="images/flag-france.png" class="mr-2" alt="flag"/> French
                     </a>
                   </div>
                 </div>
                 <div class="login_menu">
                   <ul>
                     <li><a href="#">
                       <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                       <span class="padding_10">Cart</span></a>
                     </li>
                     <li><a href="#">
                       <i class="fa fa-user" aria-hidden="true"></i>
                       <span class="padding_10">Log in</span></a>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
         </div>
         
         {/* Banner section with carousel */}
         <div class="banner_section layout_padding">
           <div class="container">
             <div id="my_slider" class="carousel slide" data-ride="carousel">
               <div class="carousel-inner">
                 <div class="carousel-item active">
                   <div class="row">
                     <div class="col-sm-12">
                       <h1 class="banner_taital">Shop, Click, Repeat <br/>Your Shopping Haven</h1>
                       <div class="buynow_bt"><a href="#">Buy Now</a></div>
                     </div>
                   </div>
                 </div>
                 <div class="carousel-item">
                   <div class="row">
                     <div class="col-sm-12">
                       <h1 class="banner_taital">Discover Beauty <br/>in Every Click</h1>
                       <div class="buynow_bt"><a href="#">Buy Now</a></div>
                     </div>
                   </div>
                 </div>
                 <div class="carousel-item">
                   <div class="row">
                     <div class="col-sm-12">
                       <h1 class="banner_taital">Your Online <br/>Shopping Destination</h1>
                       <div class="buynow_bt"><a href="#">Buy Now</a></div>
                     </div>
                   </div>
                 </div>
               </div>
               <a class="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
                 <i class="fa fa-angle-left"></i>
               </a>
               <a class="carousel-control-next" href="#my_slider" role="button" data-slide="next">
                 <i class="fa fa-angle-right"></i>
               </a>
             </div>
           </div>
         </div>
       </div>
     </>
   );
 }
 
 export default Navbar;
 