
const cell = document.getElementById("grid-container");
const myButton = document.querySelector("button")
const select = document.querySelector(".select");

myButton.addEventListener("click",
    function(){

        for(let i = 1; i <=100; i++){
            let newCell = createNewCell();
            cell.append(newCell);
            
            function createNewCell (){
                
                const newCell = document.createElement("div");
                newCell.classList.add("cell");
            
                newCell.addEventListener("click",
            
                    function(){
                        console.log(i)
                        console.log(this.classList);
                        if(newCell.classList.contains("clicked")){
                            newCell.classList.remove("clicked");
                        }
                        else{
                            newCell.classList.add("clicked")
                        }
                    }
                );
            return newCell;
            }
        }
    }
)




