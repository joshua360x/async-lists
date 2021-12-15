
const supabaseUrl = 'https://nhbazqqortcneqwecrjp.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwNzU3MywiZXhwIjoxOTU1MDgzNTczfQ.ItAD5AYhCLq3yVOxHVfShkrOdhiFsmpg3uT9tBIISV0';
const client = supabase.createClient(supabaseUrl, SUPABASE_KEY);


export async function getPizzas() {
    const response = await client.from('pizza').select();

  
    return response.data;
}


export async function getComputers() {
    const { data } = await client.from('computer').select();

    return data;
}

export async function getPhones() {
    const { data } = await client.from('phone').select();

    return data;
}

export async function getSpeaker() {
    const { data } = await client.from('speaker').select();

    return data;
}

export async function postPizza(topping, crust, sauce) {
    const { data } = await client.from('pizza').insert([
        { topping: topping,
            crust: crust,
            sauce: sauce },
    ]);

    return data;
}


