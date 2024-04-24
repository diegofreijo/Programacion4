const url = 'https://api.open-meteo.com/v1/forecast?latitude=34.60&longitude=58.38&current=temperature_2m';

async function hacerPedido(): Promise<void> {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

hacerPedido();
