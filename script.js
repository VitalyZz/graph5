const btnCreate = document.querySelector('.btnCreateVertex');
const btnOutMatrix = document.querySelector('.outMatrixs');
const dataEntry = document.querySelector('.dataEntry');
const td = document.querySelectorAll('td');
const tableA = document.querySelector('.tableOfMatrixA');
const tableC = document.querySelector('.tableOfMatrixC');
const vertexValue = document.querySelector('.vertexInput');
const nameOfMatrixA = document.querySelector('.nameOfMatrixA');
const nameOfMatrixC = document.querySelector('.nameOfMatrixC');
const exBtn1 = document.querySelector('.ex1');
const exBtn2 = document.querySelector('.ex2');
const exBtn3 = document.querySelector('.ex3');
const exBtn4 = document.querySelector('.ex4');
const outTxt = document.querySelector('.outText');

exBtn1.addEventListener('click', fill1);
exBtn2.addEventListener('click', fill2);
exBtn3.addEventListener('click', fill3);
exBtn4.addEventListener('click', fill4);

btnCreate.addEventListener('click', getValue);
dataEntry.addEventListener('click', deleteBlock);

function deleteBlock(e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
}

function getValue() {
    dataEntry.textContent = '';
    tableA.textContent = '';
    tableC.textContent = '';
    
    const valueOfInput = vertexValue.value;
    console.log("valueOfInput", valueOfInput);
    if (!valueOfInput) {
        alert('Поле пустое');
        return;
    }
    dataEntry.textContent = '';
    document.querySelector('.nameOfMatrixA').style.display = 'none';
    document.querySelector('.nameOfMatrixC').style.display = 'none';
    document.querySelector('.outText').style.display = 'none';
    for (let i = valueOfInput; i > 0; i--) {
        dataEntry.insertAdjacentHTML('afterbegin', 
        `
        <div class="first"> 
            <div>G<sup>+</sup>(${i}) = </div>
            <input type="text" class="inputOfNumbers">
            <button class="btnDeleteVertex">Удалить</button>
        </div>
        `
        )
    }
    btnOutMatrix.style.display = 'block';
    btnOutMatrix.addEventListener('click', outMatrix);
}

function fill1() {
    let valueOfInput = 5;
    document.querySelector('.vertexInput').value = valueOfInput;

    if (!valueOfInput) {
        alert('Поле пустое');
        return;
    }
    dataEntry.textContent = '';
    for (let i = valueOfInput; i > 0; i--) {
        dataEntry.insertAdjacentHTML('afterbegin', 
        `
        <div class="first"> 
            <div>G<sup>+</sup>(${i}) = </div>
            <input type="text" class="inputOfNumbers">
            <button class="btnDeleteVertex">Удалить</button>
        </div>
        `
        )
    }
    btnOutMatrix.style.display = 'block';

    document.querySelectorAll('.inputOfNumbers')[0].value = '2';
    document.querySelectorAll('.inputOfNumbers')[1].value = '1 3';
    document.querySelectorAll('.inputOfNumbers')[2].value = '2 4';
    document.querySelectorAll('.inputOfNumbers')[3].value = '3 5';
    document.querySelectorAll('.inputOfNumbers')[4].value = '4';

    outMatrix();
}

function fill2() {
    let valueOfInput = 5;
    document.querySelector('.vertexInput').value = valueOfInput;

    if (!valueOfInput) {
        alert('Поле пустое');
        return;
    }
    dataEntry.textContent = '';
    for (let i = valueOfInput; i > 0; i--) {
        dataEntry.insertAdjacentHTML('afterbegin', 
        `
        <div class="first"> 
            <div>G<sup>+</sup>(${i}) = </div>
            <input type="text" class="inputOfNumbers">
            <button class="btnDeleteVertex">Удалить</button>
        </div>
        `
        )
    }
    btnOutMatrix.style.display = 'block';

    document.querySelectorAll('.inputOfNumbers')[0].value = '2 3';
    document.querySelectorAll('.inputOfNumbers')[1].value = '1';
    document.querySelectorAll('.inputOfNumbers')[2].value = '1 4 5';
    document.querySelectorAll('.inputOfNumbers')[3].value = '3';
    document.querySelectorAll('.inputOfNumbers')[4].value = '3';

    outMatrix();
}

function fill3() {
    let valueOfInput = 5;
    document.querySelector('.vertexInput').value = valueOfInput;

    if (!valueOfInput) {
        alert('Поле пустое');
        return;
    }
    dataEntry.textContent = '';
    for (let i = valueOfInput; i > 0; i--) {
        dataEntry.insertAdjacentHTML('afterbegin', 
        `
        <div class="first"> 
            <div>G<sup>+</sup>(${i}) = </div>
            <input type="text" class="inputOfNumbers">
            <button class="btnDeleteVertex">Удалить</button>
        </div>
        `
        )
    }
    btnOutMatrix.style.display = 'block';

    document.querySelectorAll('.inputOfNumbers')[0].value = '2 4';
    document.querySelectorAll('.inputOfNumbers')[1].value = '';
    document.querySelectorAll('.inputOfNumbers')[2].value = '1';
    document.querySelectorAll('.inputOfNumbers')[3].value = '';
    document.querySelectorAll('.inputOfNumbers')[4].value = '1';
    
    outMatrix();
}

function fill4() {
    let valueOfInput = 10;
    document.querySelector('.vertexInput').value = valueOfInput;

    if (!valueOfInput) {
        alert('Поле пустое');
        return;
    }
    dataEntry.textContent = '';
    for (let i = valueOfInput; i > 0; i--) {
        dataEntry.insertAdjacentHTML('afterbegin', 
        `
        <div class="first"> 
            <div>G<sup>+</sup>(${i}) = </div>
            <input type="text" class="inputOfNumbers">
            <button class="btnDeleteVertex">Удалить</button>
        </div>
        `
        )
    }
    btnOutMatrix.style.display = 'block';

    document.querySelectorAll('.inputOfNumbers')[0].value = '2 5 6';
    document.querySelectorAll('.inputOfNumbers')[1].value = '1';
    document.querySelectorAll('.inputOfNumbers')[2].value = '2 4 5';
    document.querySelectorAll('.inputOfNumbers')[3].value = '9';
    document.querySelectorAll('.inputOfNumbers')[4].value = '1 7';
    document.querySelectorAll('.inputOfNumbers')[5].value = '5 8 10';
    document.querySelectorAll('.inputOfNumbers')[6].value = '4';
    document.querySelectorAll('.inputOfNumbers')[7].value = '7 10';
    document.querySelectorAll('.inputOfNumbers')[8].value = '7';
    document.querySelectorAll('.inputOfNumbers')[9].value = '8';

    outMatrix();
}

function outMatrix() {
    let dataOfInputs = Array.from(document.querySelectorAll('.inputOfNumbers'), el => el.value);

    let a = [];

    for (let t = 0; t < dataOfInputs.length; t++) {
        a[t] = dataOfInputs[t].split(' ');
    }

    for (let el in a) {
        a[el] = a[el].map(parseFloat);
        a[el] = a[el].filter(Number);
    }

    let c = [];

    for (let i = 0; i < a.length; i++) {
        c.push([]);
    }

    c = a;

    let G = [];

    for (let i = 0; i < a.length; i++) {
        G.push([]);
        for (let j = 0; j < a.length; j++) {
            G[i][j] = 0;
        }
    }

    for (let i = 0; i < c.length; i++) { // Получаем матрицу смежности А
        for (let j = 0; j < c[i].length + 1; j++) {
            for (let k = 0; k < G.length + 1; k++) {
                if (c[i][j] == k) {
                    G[i][k - 1] = 1;
                }
            }
        }
    }

    let A = G;
    let C = [];
    let D = [];

    for(let i = 0; i < dataOfInputs.length; i++) {
        C.push([]);
    }

    for (var ii = 0; ii < dataOfInputs.length; ii++) {
        D.push([]);
        for (var jj = 0; jj < dataOfInputs.length; jj++) {
            D[ii][jj] = G[ii][jj];
        }
    }

    for (let n = 0; n < 4; n++) { // Находим суммарную матрицу
        for (let k = 0; k < dataOfInputs.length; k++) {
            for (let i = 0; i < dataOfInputs.length; i++) {
                let temp = 0;
                for (let j = 0; j < dataOfInputs.length; j++) {
                    temp += A[i][j]*G[j][k];
                }
                C[i][k] = temp;
            }
        }

        A = C;
        C = [];

        for (let z = 0; z < dataOfInputs.length; z++) {
            C.push([]);
        }

        for (var ii = 0; ii < dataOfInputs.length; ii++) {
            for (var jj = 0; jj < dataOfInputs.length; jj++) {
                D[ii][jj] += A[ii][jj];
            }
        }
    }

    C = [];

    for (let i = 0; i < dataOfInputs.length; i++) { // Находим матрицу связности
        C.push([]);
        for (let j = 0; j < dataOfInputs.length; j++) {
            C[i][j] = D[i][j] >= 1 ? 1 : 0;
        }
    }

    console.log("Суммарная матрица смежности:", D);

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < dataOfInputs.length + 1; i++) {
        const tr = document.createElement('tr');
        for (let c = 0; c < dataOfInputs.length + 1; c++) {
            if (i === 0) {
                const th = document.createElement('th');
                if (c === 0) {
                    th.textContent = ' '; 
                }
                else {
                    th.textContent = c; 
                }
                tr.appendChild(th);
            }
            else {
                if (c == 0) {
                    const th = document.createElement('th');
                    th.textContent = i;
                    tr.appendChild(th);
                }
                else {
                    const td = document.createElement('td');
                    td.textContent = D[i - 1][c - 1];
                    if (D[i - 1][c - 1] >= 1) {
                        td.style.backgroundColor = '#37ff37';
                    } else {
                        td.style.backgroundColor = '#ff4848';
                    }
                    tr.appendChild(td);
                }
            }
        }
        fragment.appendChild(tr);
    }
    nameOfMatrixA.style.display = 'block';
    tableA.textContent = '';
    tableA.appendChild(fragment);

    console.log("Матрица связности:", C);

    let outText = "Все элементы структуры связаны друг с другом";

    const fragment2 = document.createDocumentFragment();
    for (let i = 0; i < dataOfInputs.length + 1; i++) {
        const tr = document.createElement('tr');
        for (let c = 0; c < dataOfInputs.length + 1; c++) {
            if (i === 0) {
                const th = document.createElement('th');
                if (c === 0) {
                    th.textContent = ' '; 
                }
                else {
                    th.textContent = c; 
                }
                tr.appendChild(th);
            }
            else {
                if (c == 0) {
                    const th = document.createElement('th');
                    th.textContent = i;
                    tr.appendChild(th);
                }
                else {
                    const td = document.createElement('td');
                    td.textContent = C[i - 1][c - 1];
                    if (C[i - 1][c - 1] == 1) {
                        td.style.backgroundColor = '#37ff37';
                    } else {
                        td.style.backgroundColor = '#ff4848';

                        outText = "Структура не сильно связная";
                    }
                    tr.appendChild(td);
                }
            }
        }
        fragment2.appendChild(tr);
    }
    nameOfMatrixC.style.display = 'block';
    outTxt.style.display = 'block';
    
    if (outText == "Структура не сильно связная") {
        outTxt.style.color = "#ff4848";
        outTxt.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
    } else {
        outTxt.style.color = "#07d846";
        outTxt.style.backgroundColor = "rgba(7, 216, 70, 0.2)";
    }

    outTxt.textContent = outText;
    tableC.textContent = '';
    tableC.appendChild(fragment2);
}