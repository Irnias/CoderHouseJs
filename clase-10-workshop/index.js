window.addEventListener('DOMContentLoaded', (event)=>{
    console.log(event);
    const btn = document.getElementById('btn');
    btn.addEventListener('click', (event)=>{
        alert('click');            
    })
});