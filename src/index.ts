import fetchData from "./services/ApiService";


fetchData('/users').then((data) => {
    console.log(data);
})