// const one = document.getElementById('one')
// const txt = document.createElement('input')
// one.appendChild(txt);

// // *************************************************************************

// const two = document.getElementById('two');
// for (const i of[1, 2, 3]) {
//     const button1 = document.createElement('button');
//     button1.innerText = i;
//     button1.style.margin = '10px';
//     button1.style.padding = '10px';
//     two.appendChild(button1);
// }

// // *************************************************************************

// const three = document.getElementById('three');
// for (const i of[4, 5, 6]) {
//     const button2 = document.createElement('button');
//     button2.innerText = i;
//     button2.style.margin = '10px';
//     button2.style.padding = '10px';
//     three.appendChild(button2);
// }


// // *************************************************************************

// const four = document.getElementById('four');
// for (const i of[7, 8, 9]) {
//     const button3 = document.createElement('button');
//     button3.innerText = i;
//     button3.style.margin = '10px';
//     button3.style.padding = '10px';
//     four.appendChild(button3);
// }

// button1.onClick() = () => {
//     const innreValue = document.getElementById('1');
//     document.getElementsByName('input').value = innreValue;

// }

// // *************************************************************************
const a = [];
const numbs = 0;

document.getElementById('1').addEventListener('click', () => {
    document.getElementById('numb').value += 1;
})
document.getElementById('2').addEventListener('click', () => {
    document.getElementById('numb').value += 2;
})
document.getElementById('3').addEventListener('click', () => {
    document.getElementById('numb').value += 3;
})
document.getElementById('4').addEventListener('click', () => {
    document.getElementById('numb').value += 4;
})
document.getElementById('5').addEventListener('click', () => {
    document.getElementById('numb').value += 5;
})
document.getElementById('6').addEventListener('click', () => {
    document.getElementById('numb').value += 6;
})
document.getElementById('7').addEventListener('click', () => {
    document.getElementById('numb').value += 7;
})
document.getElementById('8').addEventListener('click', () => {
    document.getElementById('numb').value += 8;
})
document.getElementById('9').addEventListener('click', () => {
    document.getElementById('numb').value += 9;
})
document.getElementById('0').addEventListener('click', () => {
    document.getElementById('numb').value += 0;
})

// ************************************************


document.getElementById('-').addEventListener('click', () => {
    // numbs += document.getElementById("numb").value;
    storeValue();
    document.getElementById('numb').value = ' ';
})
document.getElementById('+').addEventListener('click', () => {
    document.getElementById('numb').value = ' ';

})
document.getElementById('/').addEventListener('click', () => {
    document.getElementById('numb').value = ' ';
})
document.getElementById('*').addEventListener('click', () => {
    document.getElementById('numb').value = ' ';
})
document.getElementById('clear').addEventListener('click', () => {
    document.getElementById('numb').value = ' ';
})

function storeValue() {
    numbs = +document.getElementById("numb").value;
}