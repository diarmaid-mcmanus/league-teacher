const url = ".api.riotgames.com";
const spectatorEndpoint = "/lol/spectator/v3/active-games/by-summoner/";
const summonerEndpoint = "/lol/summoner/v3/summoners/by-name/";
const api_key = "RGAPI-20df4091-47a7-4e60-9d4a-65b642da1f41";

const regions = {
    na: "na1",
    euw: 'euw1'
};

function handleErrors(response) {
    if(!response.ok) {
	throw Error(response.statusText);
    }
    return response.json();
}

function makeApiRequest(endpoint, region) {
    return fetch("https://" + regions[region] + url + endpoint, {
	method: 'GET',
	headers: {
	    'Accept': 'application/json',
	    'X-Riot-Token': api_key
	}
    }).then(handleErrors);
}

export function onGameStateChange(summonerId, region, func) {
    function checkState() {
	makeApiRequest(spectatorEndpoint + summonerId, region)
	    .then(spectator_data => {
		func(true);
	    }).catch(error => {
		func(false);
	    });
    }

    checkState();
    setInterval(() => {
	checkState();
    }, 5000);
}


    

export function getSummonerInformation(summonerName, region) {
    return makeApiRequest(summonerEndpoint + summonerName, region)
	.then(player_data => {
	    return { 
		summonerName,
		summonerId: player_data.id,
		profileIconId: player_data.profileIconId
	    };
	}).catch(error => console.log(error));
}

