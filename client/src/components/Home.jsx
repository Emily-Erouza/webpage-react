import React from "react";
function Home() {

  const handleSubmit = (e) => {
    e.preventDefault();
    var menButton = document.getElementById("menu");
    menButton.addEventListener("click", handleSubmit);
  };

  return (

    <div>
    
      <header className="headers" id="headers">
        <nav className="nav-bar" id="nav-bar">
          <ul>
          <li>
            <a class="nav-link" href="#contacts">Contacts</a>
          </li>
          
          <li>
            <a class="nav-link" href="#form">Form</a>
          </li>

          <li>
            <a class="nav-link" href="#menu">Menu</a>
          </li>

          <li>
            <a class="nav-link" href="#service">Service</a>
          </li>

          <li>
            <a class="nav-link" href="#home">Home</a>
          </li>

          </ul>
        </nav>
      </header>
  
      <div className="logo" id="home">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-dXEWLCZDQQOUbqhkLXFARHkNq7AIUB0k7zKc46fBTGE69_3vhHoBUdPLk3B1vGSiAFM&usqp=CAU" alt="Queen Logo" />
      </div>

      <div className='homeImage'>
        <img id='photo' src="https://static.wixstatic.com/media/3abb85_59744bd4737241a9a114544d8c1f31e0~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3abb85_59744bd4737241a9a114544d8c1f31e0~mv2.jpg" alt="" />
      </div>


      <div className="Header-page">
      <h1 className="header">🌟 Emily's</h1>
      <h1>Resturant And Bar!🌟</h1>
      <p>Are you ready to take your food to the next level? Look no further than Flavor Fusion, your
        ultimate
        recipe companion for extraordinary meals!</p>
      <p>Food is our love language, and we're fluent in flavor.Pouring happiness, one drink at a time.</p>
      <p>Good times start with great food and even better drinks.</p>
      <p>We're not just a restaurant; we're a taste of the extraordinary.</p>
      <p>Raise your glass to unforgettable nights and unforgettable bites.</p>
      </div>


<div className="mealActionButtons">
<h1>Order Here...</h1>
      
      <button class="btn btn-warning">
                        <a id="menu" href="#menu" value="menu">Menu</a>
                    </button>

      
      </div>

      
    </div>


  );
}

export default Home;