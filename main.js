let button = document.querySelector('#button');
let input = document.querySelector('#input');
let resultTag = document.querySelector('#result');

let select1 = "USD"
let select2 = "UZS"

const url = 'https://currency-converter-pro1.p.rapidapi.com/convert?from=USD&to=EUR&amount=100';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'b40108df76msh0df7e1ad6f138e4p105204jsnc49ea54de9e5',
        'x-rapidapi-host': 'currency-converter-pro1.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
} catch (error) {
    console.error(error);
}

GetAllCurrecies()

button.addEventListener("click", () => {
    const url = 'https://currency-converter-pro1.p.rapidapi.com/convert?from=USD&to=EUR&amount=100';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'b40108df76msh0df7e1ad6f138e4p105204jsnc49ea54de9e5',
            'x-rapidapi-host': 'currency-converter-pro1.p.rapidapi.com'
        }
    };

    async function convert() {
        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    convert()
})