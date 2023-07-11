const fnWithError = () => {
    throw new Error('Some Error'); // message -> Some Error
}
try {
    fnWithError();
}
catch(error) {
    console.error(error);
    console.log(error.message);
}