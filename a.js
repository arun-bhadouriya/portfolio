let fileChooser = document.getElementById('file-chooser');
let uploaded_image = "";
fileChooser.addEventListener('click',importData)

function importData() {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.addEventListener('change',()=>{
        let files = Array.from(input)
        console.log(files);
        const reader = new FileReader();
        reader.addEventListener("load",()=>{
            uploaded_image = reader.result;
            console.log(uploaded_image)
            document.querySelector('#myImage').src = `${uploaded_image}`
        })
        reader.readAsDataURL(input.files[0]);
    })
    input.click();
  };

let theme = false;
function setTheme(){
    theme = !theme;
    if(theme){
        document.body.style.backgroundColor = 'white';
        document.body.style.color = '#17141d';
    }
    else{
        document.body.style.backgroundColor = '#17141d';
        document.body.style.color = 'white';
    }
    
}