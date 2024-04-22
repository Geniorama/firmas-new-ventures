const form = document.getElementById('form-nvc');
console.log('main cargado')

if(form){
    const inputs = document.querySelectorAll('input:not([type*="submit"])')

    inputs.forEach((el) => {
        const target = el.dataset.target

        if(target){
            el.addEventListener('keypress', function(){
                
            })
        }
    })
}