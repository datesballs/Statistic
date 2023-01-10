   
   <template>
    <section>
        <h1>Contact us</h1>
        <div class="container">
        <form @submit.prevent="">
            <h2>Get in touch</h2>
            <div class="form">
            <label for="firstname"></label>
            <input
                type="text"
                placeholder="First name..."
                id="firstName"
                v-model="name"
            />
            </div>

            <div class="form">
            <label for="lastname"></label>
            <input
                type="text"
                placeholder="Last name.."
                id="lastname"
                v-model="lastname"
            />
            </div>

            <div class="form">
            <label for="email"></label>
            <input
                type="email"
                placeholder="Email.."
                id="email"
                v-model="email"
            />
            </div>

            <div class="form">
            <label for="subject"></label>
            <input
                type="text"
                placeholder="Subject.."
                id="subject"
                v-model="subject"
            />
            </div>

            <div class="form">
            <label for="text"></label>
            <textarea
                id="message"
                placeholder="Type in your message here.."
                rows="10"
                v-model="message"
            ></textarea>
            </div>

            <button type="submit">Submit</button>
        </form>
        </div>
    </section>
    </template>

    <script>
    export default {
    data() {
        return {
        name: "",
        lastname: "",
        email: "",
        subject: "",
        message: "",
        };
    },
    };
    </script>

    <style scoped>
    * {
    box-sizing: border-box;
    font-family: "Comfortaa", sans-serif;
    }

    h1 {
    text-align: center;
    padding: 2% 0 5% 0;
    }

    section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    }
    .container {
    background-color:  #6fbfb7;
    width: 700px;
    margin: 0 auto 10%;
    padding: 20px;
    box-shadow: 10px 10px 20px #00000080;
    border-radius: 8px;
    }
    .form {
    margin-top: 20px;
    font-size: 20px;
    color: #9e9e9e;
    
    
    }
    .form input,
    .form textarea {
    width: 100%;
    padding: 5px;
    font-size: 18px;
    border: 1px solid rgba(128, 128, 128, 0.199);
    margin-top: 5px;
    background-color:  #c4fefb;
    border-radius: 8px;

    }   
    textarea {
    resize: vertical;
    }
    button {
    left: 25%;
    position: relative;
    width: 50%;
    border: none;
    padding: 20px;
    font-size: 24px;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;
    background-color:  #f27127;
    }
 
    </style>
