function logDetails(uid : number | string, item : string)
{
    console.log(`A product with ${uid} has a title as ${item}.`);
}

function logInfo(uid: number | string, user: string)
{
    console.log(`A user with ${uid} has a title as ${user}.`);
}

logDetails(123, "ola");
logDetails("123", "ola");

logInfo(123, "ola");
logInfo("123", "ola");

// ---------------------------------------------------------------------------------------------
// TYPE ALIASES
// ---------------------------------------------------------------------------------------------

type Uid = number | string

function logDetails2(uid : Uid, item : string)
{
    console.log(`A product with ${uid} has a title as ${item}.`);
}

function logInfo2(uid: Uid, user: string)
{
    console.log(`A user with ${uid} has a title as ${user}.`);
}

logDetails2(123, "ola");
logDetails2("123", "ola");

logInfo2(123, "ola");
logInfo2("123", "ola");

type Platform = "Windows" | "Linux"

function renderPlatform(platform: Platform)
{
    return platform;
}

//renderPlatform('iOS'); nao funciona
renderPlatform('Windows');