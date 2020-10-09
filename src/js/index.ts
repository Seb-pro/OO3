
//Type Script
let Selector: HTMLSelectElement = <HTMLSelectElement> document.getElementById("Convert");
let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
let Manipulate: HTMLButtonElement = <HTMLButtonElement> document.getElementById("Manipulate")
let Input: HTMLInputElement = <HTMLInputElement> document.getElementById("TextInput")

Manipulate.addEventListener("click", function()
{
element.innerHTML = manipulateString(Input.value)
})

element.innerHTML = Input.value

function manipulateString(input : string): string{
    switch(Selector.selectedIndex)
    {
        case 0: {
            return input.toUpperCase()
        }

        case 1: {
            return input.toLowerCase()
        }

        default: {
            return input
        }
    }
}

// VUE
//  new Vue({
//    el: "#app",
//    data: {
//        inputWords:"",
//        show:"",
//        ChangeCase: "Upper"
//    },

//    methods: {
//        ConvertCase(){
//         console.log("Change case for text")
//         if(this.ChangeCase =="Upper")
//         {
//             this.show = this.inputWords.toUpperCase()
//         }
//         else if(this.ChangeCase == "Lower")
//         {
//             this.show = this.inputWords.toLowerCase()
//         }
       
//        }
//    }
//  }) 
