/* ==== Changing Color Theme ==== */ 

const body = document.body;
const theme = localStorage.getItem('theme');

function switchTheme(){
    if(theme){
        body.classList.add(theme);
    } else if(body.classList.contains('light')){
       body.classList.replace('light', 'dark');
       localStorage.setItem('theme', 'dark');
    } else if(body.classList.contains('dark')){ 
       body.classList.replace('dark', 'light');
       localStorage.setItem('theme', "light");
    }
 };                      