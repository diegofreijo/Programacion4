function vender(amount) {
    const pricePerItem = 0.1;
    const items = Math.floor(amount / pricePerItem);

    console.log(`El usuario nos debe mandar ${items} items`);
    console.log(`Al usuario hay que pagarle $${amount}`);
    return items;
}
  
vender(0.3);

