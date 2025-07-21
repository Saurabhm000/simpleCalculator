// BY USING querySelectorAll WE STORE ALL BUTTONS IN button (it return as nodeList of elements);
let button = document.querySelectorAll('button');
// BY USING querySelector WE STORE INPUT DISPLAY FILED IN display VARIABLE 
let display = document.querySelector(".input1");
//MAKING A EMPTY STRING VARIABLE
let string = "";

//HERE WE CONVERT button OBJECT IN buttonArray ARRAY
let buttonArray = Array.from(button);

//BY USING .forEach FUNTION WE ITERATE OVER EVERY ELEMENT OF buttonArray ARRAY
buttonArray.forEach((buttons) => {

    //HERE WE SET A EVENTLISTENER FOR EACH BUTTON
    buttons.addEventListener("click", (e) => {

        //HERE WE USE IF ELSE CONDITIONS ACCORDING TO USER CLICK'S
        if (e.target.innerHTML === "AC") {
            string = "";
            display.value = string;
        }
        else if (e.target.innerHTML === "DEL") {
            string= string.slice(0,-1);
            display.value = string;
        }
        else if (e.target.innerHTML === "=") {

            try {
                let chau = eval(string);
                display.value = chau;
            }
            catch(err) {
                display.value = "wrongValue";
            }
            
        }
        else {
            string += e.target.innerHTML;
            display.value = string;

        }


    })
})