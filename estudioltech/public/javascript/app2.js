//unik Firebase Object
const firebaseConfig = {
    apiKey: "AIzaSyB1mdAzfIBo_QVV_H2y7kxufyc8ykZT5bw",
    authDomain: "portfolio-pessoal-ronoel.firebaseapp.com",
    projectId: "portfolio-pessoal-ronoel",
    storageBucket: "portfolio-pessoal-ronoel.appspot.com",
    messagingSenderId: "810126920102",
    appId: "1:810126920102:web:b23c64d169bff187ace767",
    measurementId: "G-FK2RTK3VQL"
  };

  //Initialize Firebase - first erro
  firebase.initializeApp(firebaseConfig)
  var firestore = firebase.firestore()

  //Variable to access database collection
const db = firestore.collection("formData")

//Get submit Form
let submitButton = document.getElementById('submit')

//Creat Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e)=>{
    //Prevent Default Form Submission
    e.preventDefault()

    //get Form Values

    let contactPortfolio = document.getElementById('projeto2').value
    let emailPortfolio = document.getElementById('email').value
    let projectPortfolio = document.getElementById('projeto').value
    let messagePortfolio = document.getElementById('mensagem').value

    //Save Form Data To Firebasejs

    db.doc().set({
        projeto2:contactPortfolio,
        email: emailPortfolio,
        projeto: projectPortfolio,
        mensagem: messagePortfolio,
    }).then( () => {
        console.log("Data saved")
    }).catch ((error) => {
        console.log(error)
    })

    alert("Seu formulário foi submetido com sucesso")
})

