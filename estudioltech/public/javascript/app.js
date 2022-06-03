//Unik Firebase Object
const firebaseConfig = {
    apiKey: "AIzaSyB1mdAzfIBo_QVV_H2y7kxufyc8ykZT5bw",
    authDomain: "portfolio-pessoal-ronoel.firebaseapp.com",
    projectId: "portfolio-pessoal-ronoel",
    storageBucket: "portfolio-pessoal-ronoel.appspot.com",
    messagingSenderId: "810126920102",
    appId: "1:810126920102:web:b23c64d169bff187ace767",
   
  };
  
  //Initialize Firebase instance
  firebase.initializeApp(firebaseConfig)
  const firestore = firebase.firestore()

  //Variable to acess database collections
  const db = firestore.collection("formData")

  //Get submit FormData
  let submitButton = document.getElementById('submit')

  // Creat Event Listener To Allow Form submission

  submitButton.addEventListener("click",(e)=>{
  //Prevent Default Form Submission
  e.preventDefault()

    //Get Form Values

   let contatoV = document.getElementById("contato").value
   let emailV = document.getElementById('email').value
   let projetoV = document.getElementById('projeto').value
   let mensagemV = document.getElementById('mensagem').value


 
   //Save Form Data to Firebase
 
   db.doc().set({
     
     email: emailV,
     projeto: projetoV,
     mensagem: mensagemV
   }).then( ()=> {
       console.log("Data saved")
   }).catch((error)=> {
       console.log("Error")
   })

})

 