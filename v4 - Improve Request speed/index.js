const baseUrl = 'http://localhost:3000/delay?delay=';

const requestDelays = [340, 230, 320];

async function retrieve() {
 
   
    console.log('Request Starts ');

    console.time('Request Time ');

    const result = await (await fetch(`${baseUrl}${requestDelays[0]}`)).text();
    console.log(result)
    const result2 = await (await fetch(`${baseUrl}${requestDelays[1]}`)).text();
    console.log(result2)

    const result3 = await (await fetch(`${baseUrl}${requestDelays[2]}`)).text();
    console.log(result3)

    console.timeEnd("Request Time ");


}
async function retrieveFaster() {
 
   
    console.log('Request Starts ');

    console.time('Request Time ');

    const promise = fetch(`${baseUrl}${requestDelays[0]}`);
 
    const promise2 = fetch(`${baseUrl}${requestDelays[1]}`);
 
    const promise3 = fetch(`${baseUrl}${requestDelays[2]}`);
 
    const [result,result2,result3] = await Promise.all([promise,promise2,promise3]);
    
    console.log(
        await result.text(),
    
    );
    console.log(
 
        await result2.text(),
 
    );
    console.log(
  
        await result3.text()
    );
    console.timeEnd("Request Time ");


}

function init() {
    document.getElementById('trigger').addEventListener('click', retrieveFaster);
}

init()