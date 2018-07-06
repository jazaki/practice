let customName = document.getElementById("customname");
let storyContainer = document.querySelectorAll(".story")[0];
let usMode = document.getElementById('us');
let ukMode = document.getElementById('uk');

let randXNames = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let randYNames = ['the soup kitchen', 'Disneyland', 'the White House'];
let randZNames = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];




let story = [
    'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'];
    
let replaceMap = { 
    ':insertx:': null,
    ':inserty:': null,
    ':insertz:': null
}

function generateStory() {
    let chosenStory = getRandomStr(story);

    replaceMap[":insertx:"] = getRandomStr(randXNames);
    replaceMap[":inserty:"] = getRandomStr(randYNames);
    replaceMap[":insertz:"] = getRandomStr(randZNames);

    let newStory = (customName.value !== '') ? chosenStory.replace('Bob', customName.value) : chosenStory;

    storyContainer.innerText = newStory.replace(/:insertx:|:inserty:|:insertz:/gi, function(matched) {
        return replaceMap[matched]
    });

    storyContainer.setAttribute("style", "visibility: visible");
}

function getRandomStr(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function toggleMode() {
    if(usMode.checked){
        // convert to farenheit
        story[0] = story[0].replace(/[0-9]*\s(?=centigrade)/gi, function (matched) {
            let farenheit = (parseInt(matched) * (9 / 5) + 32);
            return `${farenheit} `;
        }).replace('centigrade', 'farenheit');
        // convert to stone
        story[0] = story[0].replace(/[0-9]*\s(?=stones)/gi, function (matched) {
            let pounds = parseInt(matched)  / 0.0714286;
            return `${pounds} `;
        }).replace('stones', 'pounds');
    } 
    else if (ukMode.checked) {
        // convert to celsius
        story[0] = story[0].replace(/[0-9]*\s(?=farenheit)/gi, function(matched) {
            let celsius = (parseInt(matched) - 32) * (5/9);
            return `${celsius} `;
        }).replace('farenheit', 'centigrade');
        // convert to stone
        story[0] = story[0].replace(/[0-9]*\s(?=pounds)/gi, function (matched) {
            let stone = parseInt(matched) * 0.0714286;
            return `${stone} `;
        }).replace('pounds', 'stones');
    }
    generateStory();
}