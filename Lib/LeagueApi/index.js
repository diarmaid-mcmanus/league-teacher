const url = ".api.riotgames.com";
const spectatorEndpoint = "/lol/spectator/v3/active-games/by-summoner/";
const summonerEndpoint = "/lol/summoner/v3/summoners/by-name/";
const api_key = "";

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

export function userInGame(summonerId) {
    return makeApiRequest(spectatorEndpoint + summonerId)
	.then(spectator_data => {
	    return spectator_data;
	}).catch(error => {
	    console.log("Oh no!");
	});
}

export function getSummonerInformation(summonerName, region) {
    return makeApiRequest(summonerEndpoint + summonerName, region)
	.then(player_data => {
	    return { 
		summonerName,
		summonerId: player_data.id,
		profileIconId: player_data.profileIconId
	    };
	});
}

