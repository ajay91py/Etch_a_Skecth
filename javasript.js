let n=4;
let newGrid=document.querySelector('button');
newGrid.addEventListener('click',  gridSize);
function gridSize() {
    n=prompt('choose grid size, between10-100')
    n=Number(n);
    



let m=n**2;
console.log(m)
let gridWidth=500;
let container=document.querySelector('#container');
let squareSize= (500/n);



for (let i=0; i<m; i++)
    {
    
        let grid=document.createElement('div');
        grid.classList.add('square')
        
        grid.setAttribute('style', `width: ${squareSize}px; height: ${squareSize}px; background: red`)
        // grid.style.border = 'black';
        // grid.style.borderBlockColor= 'black'

        container.appendChild(grid);
        grid.addEventListener("mousemove", () => {
            grid.setAttribute("style", `background: yellow; height: ${squareSize}px; width: ${squareSize}px;`);
       
    })

}   
        
} 

    
    