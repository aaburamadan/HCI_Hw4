/* ==== Changing Color Theme ==== */ 

const body = document.body;
const theme = localStorage.getItem('theme');

if(theme){
   body.classList.add(theme);
} 

function switchTheme(){
   if(body.classList.contains('light')){
      body.classList.replace('light', 'dark');
      localStorage.setItem('theme', 'dark');
   } else if(body.classList.contains('dark')){ 
      body.classList.replace('dark', 'light');
      localStorage.setItem('theme', 'light');
   }
};         