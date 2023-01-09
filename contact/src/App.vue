<template>
<div>
  <h1>Contact us</h1>

</div>
  <body class="contactFormBody">
    

    <form class="contactForm">
      <h2>Get in touch</h2>
      
      <div class="form-fields">
        <label for="name"></label>
        <input type="text" id="name" placeholder="Name.." name="name" required>
      </div>

      <div class="form-fields">
        <label for="name"></label>
        <input type="text" id="name" placeholder="Last name.." name="name" required>
      </div>
      
      <div class="form-fields">
        <label for="name"></label>
        <input type="text" id="name" placeholder="Subject.." name="name" required>
      </div>

      <div class="form-fields">
        <label for="email"></label>
        <input type="email" id="email" placeholder="Email.." name="email" required>
      </div>

      <div class="form-fields">
        <label for="message"></label>
        <textarea id="message" placeholder="Type in your message here.." name="message" required></textarea>
      </div>

      <button type="submit">Send message</button>
    </form>
  </body>
</template>

<style scoped>
  .contactFormBody{
    font-family: 'Comfortaa', sans-serif;
    text-align: center;
    display: flex;
  }

  .contactForm{
    justify-content: center;
    border-radius: 50px;
    width: 1000px;
    height: 500px;
    background-color:#6fbfb7 ;
    padding: 0;
  
  }

  h1 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .form-fields {
    margin-bottom: 1rem;
    font-family: 'Comfortaa', sans-serif;
    
  }
  label { 
    display: block; 
    margin-bottom: 4px; 
    font-weight: bold; 
    font-size: 0.9rem;
  }

  textarea{
    width: 75%;
    
  }

  input[type="text"], input[type="email"], textarea {
    border: 1px solid #ccc;
    font-size: 0.8rem;
    padding: 6px 10px;
    border-radius: 8px;
    font-family: 'Comfortaa', sans-serif;
    background-color:#c4fefb ;
    height: 40px;
  }




  button[type="submit"] { 
    background-color: rgb(67 56 202);
    color: white;
    font-size: 0.8rem;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    font-weight: 500;
  }
</style>
