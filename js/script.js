        const myUniqueID = "d4ta";
        const isAdmin = false; // Cambia a true si eres el administrador
        const errorElement = document.getElementById("errorMessage");
        
        // Función para mostrar u ocultar los comentarios al hacer clic en el botón de Adsterra
        document.getElementById('adsterraButton').addEventListener('click', function() {
            // Cuando se hace clic en el anuncio, se muestra el botón y se habilitan los comentarios después de 3 segundos (puedes ajustar el tiempo)
            setTimeout(function() {
                const commentsSection = document.getElementById('commentsStarPlus');
                const adsterraButton = document.getElementById('adsterraButton');
            
                commentsSection.style.display = 'block'; // Mostrar comentarios
                adsterraButton.style.display = 'none'; // Ocultar botón de Adsterra
            
                // Habilitar comentarios después de ver el anuncio
                document.querySelector('#commentsStarPlus textarea').removeAttribute('disabled');
                document.querySelector('#commentsStarPlus button').removeAttribute('disabled');
            }, 3000); // 3 segundos (3000 milisegundos)
        });
        
        // Función para mostrar u ocultar los comentarios al hacer clic en el botón de Adsterra en Disney Plus
        document.getElementById('adsterraDisney').addEventListener('click', function() {
        // Cuando se hace clic en el anuncio, se muestra el botón y se habilitan los comentarios después de 10 segundos (puedes ajustar el tiempo)
            setTimeout(function() {
                const commentsSection = document.getElementById('commentsDisneyPlus');
                const adsterraButton = document.getElementById('adsterraDisney');
            
                commentsSection.style.display = 'block'; // Mostrar comentarios
                adsterraButton.style.display = 'none'; // Ocultar botón de Adsterra
            
        // Habilitar comentarios después de ver el anuncio
                document.querySelector('#commentsDisneyPlus textarea').removeAttribute('disabled');
                document.querySelector('#commentsDisneyPlus button').removeAttribute('disabled');
            }, 3000); // 3 segundos (3000 milisegundos)
        });

        // Función para mostrar u ocultar los comentarios al hacer clic en el botón de Adsterra en HBO Max
        document.getElementById('adsterraHBO').addEventListener('click', function() {
        // Cuando se hace clic en el anuncio, se muestra el botón y se habilitan los comentarios después de 10 segundos (puedes ajustar el tiempo)
            setTimeout(function() {
                const commentsSection = document.getElementById('commentsHBO');
                const adsterraButton = document.getElementById('adsterraHBO');
            
                commentsSection.style.display = 'block'; // Mostrar comentarios
                adsterraButton.style.display = 'none'; // Ocultar botón de Adsterra
            
        // Habilitar comentarios después de ver el anuncio
                document.querySelector('#commentsHBO textarea').removeAttribute('disabled');
                document.querySelector('#commentsHBO button').removeAttribute('disabled');
            }, 3000); // 3 segundos (3000 milisegundos)
        });

        // Función para mostrar u ocultar los comentarios al hacer clic en el botón de Adsterra en Crunchyroll
        document.getElementById('adsterraCrunchyroll').addEventListener('click', function() {
        // Cuando se hace clic en el anuncio, se muestra el botón y se habilitan los comentarios después de 10 segundos (puedes ajustar el tiempo)
            setTimeout(function() {
                const commentsSection = document.getElementById('commentsCrunchyroll');
                const adsterraButton = document.getElementById('adsterraCrunchyroll');
            
                commentsSection.style.display = 'block'; // Mostrar comentarios
                adsterraButton.style.display = 'none'; // Ocultar botón de Adsterra
            
        // Habilitar comentarios después de ver el anuncio
                document.querySelector('#commentsCrunchyroll textarea').removeAttribute('disabled');
                document.querySelector('#commentsCrunchyroll button').removeAttribute('disabled');
            }, 3000); // 3 segundos (3000 milisegundos)
        });
        
        // Función para mostrar u ocultar los comentarios al hacer clic en el botón de Adsterra en Paramount Plus
        document.getElementById('adsterraParamount').addEventListener('click', function() {
        // Cuando se hace clic en el anuncio, se muestra el botón y se habilitan los comentarios después de 10 segundos (puedes ajustar el tiempo)
            setTimeout(function() {
                const commentsSection = document.getElementById('commentsParamountPlus');
                const adsterraButton = document.getElementById('adsterraParamount');
            
                commentsSection.style.display = 'block'; // Mostrar comentarios
                adsterraButton.style.display = 'none'; // Ocultar botón de Adsterra
            
            // Habilitar comentarios después de ver el anuncio
                document.querySelector('#commentsParamountPlus textarea').removeAttribute('disabled');
                document.querySelector('#commentsParamountPlus button').removeAttribute('disabled');
            }, 3000); // 3 segundos (3000 milisegundos)
        });
        
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
                if (/^[a-zA-Z0-9.,!? :()+%*#$\n@._-]*$/.test(commentText)) {
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
