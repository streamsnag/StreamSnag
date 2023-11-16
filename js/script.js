const myUniqueID = "d4ta";
const isAdmin = false; // Cambia a true si eres el administrador
const errorElement = document.getElementById("errorMessage");

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function addComment(commentsId, commentId, formId) {
    const randomNumber = Math.floor(Math.random() * 999999) + 1; // Genera un número aleatorio entre 1 y 999999
    const name = '<span style="color:' + getRandomColor() + ';">Usuario ' + randomNumber + '</span>';
    const commentText = document.getElementById(commentId).value;
    const section = document.forms[formId].elements["section"].value;

    const dateTime = new Date();
    const formattedDateTime = dateTime.toLocaleString();

    // Aquí verificamos si el usuario actual es el administrador (d4ta) antes de permitir comentarios
    if (myUniqueID === "d4ta") {
        if (/^[a-zA-Z0-9.,!? :+$\n@._-]*$/.test(commentText)) {
            const escapedCommentText = document.createElement('div');
            escapedCommentText.innerText = commentText;

            if (escapedCommentText.innerText.trim() !== "") {
                const commentDiv = document.createElement("div");
                commentDiv.className = "comment";
                commentDiv.innerHTML = '<p>' + name + ': ' + escapedCommentText.innerHTML.replace(/\n/g, "<br>") + '</p>' +
                    '<div class="comment-meta">Publicado el ' + formattedDateTime + '</div>';

                // Modificación aquí para agregar el comentario al principio
                const commentsSection = document.getElementById(commentsId);
                commentsSection.insertBefore(commentDiv, commentsSection.firstChild);

                document.getElementById(commentId).value = "";
                displayErrorMessage("");
            } else {
                displayErrorMessage("Por favor, ingresa un comentario válido.");
            }
        } else {
            displayErrorMessage("Por favor, ingresa un comentario válido.");
        }
    } else {
        displayErrorMessage("Solo el administrador puede agregar comentarios en esta sección.");
    }
}

function showBitcoinDonation() {
    const bitcoinSection = document.getElementById('bitcoinDonation');
    bitcoinSection.style.display = 'block';
}

function showSection(sectionId) {
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
        post.style.display = 'none';
    });

    const selectedPost = document.getElementById(sectionId);
    if (selectedPost) {
        selectedPost.style.display = 'block';
    }
}

function displayErrorMessage(message) {
    errorElement.textContent = message;
}

// Agregar event listeners para los enlaces de navegación
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function () {
        const sectionId = this.getAttribute('href').substring(1);
        showSection(sectionId);
    });
});
