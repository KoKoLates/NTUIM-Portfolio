
const texts = [
    'HI, i am KOKO :)', 
    'here is my portfolio', 
    'enjoy my photographs'
]

async function typeWriting(sentence, ref, delay=100) {
    const letters = sentence.split("");
    let index = 0;
    while (index < letters.length) {
        await new Promise(resolve => setTimeout(resolve, delay));
        document.getElementById(ref).innerHTML += letters[index++];
    }
    return;
}

async function tpyeDeleting(ref, delay=100) {
    const sentence =  document.getElementById(ref).innerHTML;
    const letters = sentence.split("");
    while (letters.length > 0) {
        await new Promise(resolve => setTimeout(resolve, delay));
        letters.pop();
        document.getElementById(ref).innerHTML = letters.join("")
    }
    return;
}

document.addEventListener('DOMContentLoaded', async function() {
    let index = 0;
    while (true) {
        await typeWriting(texts[index++], 'sentence');
        await new Promise(resolve => setTimeout(resolve, 2000));
        await tpyeDeleting('sentence');
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (index >= texts.length) index = 0;
    }
})


window.onload = () => {
    const transition_el = document.querySelector('.transition');
    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 500)
}

window.addEventListener('scroll', function() {
})

