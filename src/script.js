function commentSection() {
    let inputComment = document.getElementById('comment').value;
    let paragraphComment = document.getElementById('textComment');
    if (inputComment.length == 0) {
        paragraphComment.innerHTML = `enter maximum 50 characters`
    } else if (inputComment.length < 50) {
        paragraphComment.innerHTML = `${50 - inputComment.length} numbers are left`.fontcolor('green')

    } else {
        paragraphComment.innerHTML = `maximum 50 characters then you can't more`.fontcolor('red')
    }
}

function removeTextComment() {
    document.getElementById('textComment').textContent = "";
}

function userComment () {
    let userComment = document.getElementById('comment').value;
    if(userComment.trim() == "saisrinu"){
        console.log(`${userComment.trim()} is a correct name`);
        document.getElementById('comment').value = "";
    }else {
        console.log(`${userComment} once check username correct or not`);
        document.getElementById('comment').value = "";
    }
    
}
