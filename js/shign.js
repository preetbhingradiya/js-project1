document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault()

    let data={
        firstname:document.getElementById("fname").value,
        lastname:document.getElementById("lname").value,
        email:document.getElementById("emil").value,
        password:document.getElementById("pass").value,
        conformpass:document.getElementById("conforpass").value,
    }

    localStorage.setItem("sign-up  page",JSON.stringify(data))

    console.log(data);
})