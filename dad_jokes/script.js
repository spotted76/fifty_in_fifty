

/**
 * \brief class used to fetch new jokes
 */
class JokeFetcher {

    /**
     * 
     * @param {string} url - Url to joke fetcher api 
     */
    constructor(url) {
        this.apiUrl = url;
    }

    async setNewDadJoke(htmlElement) {

        let responseString = '';

        try {
            const response = await fetch(
                this.apiUrl, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    },
                    mode: 'cors',
                }
            );

            let body = await response.json();
            responseString = body.joke;
        }
        catch (ex) {
            console.log('Error occurred fetching new dad joke');
            responseString = 'There is nothing funny about this joke';
        }

        console.log('should be setting');
        console.log(responseString);
        console.log(htmlElement);
        htmlElement.innerText = responseString;

    }
}

let jokeFetcher = new JokeFetcher('https://icanhazdadjoke.com/');


const jokeText = document.getElementById('joke');
const jokeButton = document.getElementById('btn');

function getNextJoke() {

    console.log('should be getting a new joke');
    jokeFetcher.setNewDadJoke(jokeText);
}

jokeButton.addEventListener('click', getNextJoke);

//Fetch the very first one
getNextJoke();

