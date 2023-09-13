document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('form-sorteador').addEventListener('submit', (event)=> {
        event.preventDefault();
        
        let numeroMax = document.getElementById('numero-max').value;
        numeroMax = parseInt(numeroMax);

        let numeroRdn = Math.random() * numeroMax;
        const rounded = Math.floor(numeroRdn + 1);
        // alert(numeroRdn);

        document.getElementById('resultado-valor').innerText = rounded;
        document.querySelector('.resultado').style.display = 'block';
    }); 
});s