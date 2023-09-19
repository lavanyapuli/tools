function function1()
{
let my1 = document.getElementById('check1')
    if(my1.checked)
    {
        let canvas = document.querySelector('.brush-container')
        canvas.style.cursor = 'url("./images/brush.png"), auto';
        
    }
    else
    {
    let canvas = document.querySelector('.brush-container')
    canvas.style.cursor = '';
    }
    
}
function function2()
{
let my1 = document.getElementById('check2')
if(my1.checked)
{
    let canvas = document.querySelector('.brush-container')
    canvas.style.cursor = 'url("./images/pen.png"), auto';
}
else
{
let canvas = document.querySelector('.brush-container')
canvas.style.cursor = '';
}

}
function function3()
{
let my1 = document.getElementById('check3')
if(my1.checked)
{
    
    let canvas = document.querySelector('.brush-container')
    canvas.style.cursor = 'url("./images/eraser.png"), auto';
    
}
else
{
let canvas = document.querySelector('.brush-container')
canvas.style.cursor = '';
}

}
function function4()
{
let my1 = document.getElementById('check4')
if(my1.checked)
{
    
    let canvas = document.querySelector('.brush-container')
    canvas.style.cursor = 'url("./images/fill_color.png"), auto';
    
}
else
{
let canvas = document.querySelector('.brush-container')
canvas.style.cursor = '';
}

}

document.getElementById("ageInputId").oninput =function(){
    draw=null;
    lineW=document.getElementById("ageInputId").value;
    document.getElementById("ageOutputId").innerHTML =lineW;
    CSSMatrixComponent.lineWidth=lineW;
};


