let login = document.getElementById("log__in")
login.addEventListener("click", () => {
    const userData = document.getElementById("userName").value.toUpperCase()
    if (!userData == ``) {
        dataDone()
    }
    else {
        Swal.fire({
            title: 'Username required',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },

        })
    }
})

function dataDone() {
    const userData = document.getElementById("userName").value.toUpperCase()
    const userDataWrite = document.getElementById("userData")
    userDataWrite.innerHTML = `Name:${userData}`

    const dateTime = new Date();
    document.getElementById("dateTimeStart").innerHTML = dateTime;

    let showBody = document.getElementById('on__off__body__style')
    console.log("done")

    if (showBody.style.display === "none") {
        showBody.style.display = "block"
    }
    if (showBody.style.display = "block") {
        let logInOff = document.getElementById('logInscreenDiv')
        logInOff.style.display = "none"

    }
    else {
        showBody.style.display = "none"
    }
}








