console.log('get random quotes: AJAX fetch')

const url = "https://thesimpsonsquoteapi.glitch.me/quotes"
document.getElementById('simpbutt').addEventListener('mouseover', function() {
    fetch(url) //fetch is the simplifed version of xmlhttprequest
    .then((res) => { return res.json() }) //receiving returning response as JSON application
    .then((data) => {            // selecting which data retrieved from returned response to be displayed on html
        data.forEach((item) => {
            const { quote, character } = item
            const result = `Quote : "${quote}"  By : ${character}`
            document.getElementById('simpsons').innerHTML = result;
        });
    })
    .catch(function (error) {
        console.log(JSON.stringify(error)); //logs in console whenever HTTP response error occurs (failed HTTP response handling)
    })
})
console.log('Script End')