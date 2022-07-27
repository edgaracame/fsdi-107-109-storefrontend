import axios from "axios";

let catalog = [
    {
        id: "1",
        title: "Arms",
        genre: "Fight",
        console: "Nintendo Switch",
        price: 50.00,
        stock: 5,
        image: "arms.jpg"
    },

    {
        id: "2",
        title: "Halo Infinite",
        genre: "Shooter",
        console: "Xbox One",
        price: 75.00,
        stock: 10,
        image: "halo-infinite.jpg"
    },

    {
        id: "3",
        title: "Mario Odyssey",
        genre: "Adventure",
        console: "Nintendo Switch",
        price: 50.00,
        stock: 15,
        image: "mario-odyssey.jpg"
    },

    {
        id: "4",
        title: "Horizon Zero Dawn",
        genre: "Open World",
        console: "PlayStation 4",
        price: 75.00,
        stock: 10,
        image: "horizon-zero-dawn.jpg"
    },

    {
        id: "5",
        title: "Legend of Zelda: Breath of the Wild",
        genre: "Open World",
        console: "Nintendo Switch",
        price: 50.00,
        stock: 10,
        image: "breath-wild.jpeg"
    },

    {
        id: "6",
        title: "Horizon Forbidden West",
        genre: "Open World",
        console: "PlayStation 5",
        price: 75.00,
        stock: 10,
        image: "horizon-forbidden-west.jpg"
    },

    {
        id: "7",
        title: "Resident Evil Village",
        genre: "Horror",
        console: "Xbox Series X",
        price: 75.00,
        stock: 5,
        image: "resident-evil-village.jpg"
    },

    {
        id: "8",
        title: "Kirby and the Forgotten Land",
        genre: "Adventure",
        console: "Nintendo Switch",
        price: 50.00,
        stock: 10,
        image: "kirby-forgotten-land.jpg"
    },

    {
        id: "9",
        title: "Spider-Man: Miles Morales",
        genre: "Adventure",
        console: "PlayStation 5",
        price: 75.00,
        stock: 15,
        image: "spiderman-miles-morales.jpg"
    },

    {
        id: "10",
        title: "Super Smash Bros Ultimate",
        genre: "Fight",
        console: "Nintendo Switch",
        price: 50.00,
        stock: 10,
        image: "smash-bros-ultimate.jpg"
    },

    {
        id: "11",
        title: "Kingdom Hearts III",
        genre: "Fight",
        console: "PlayStation 4",
        price: 75.00,
        stock: 5,
        image: "kingdom-hearts-3.jpg"
    },
]

class DataService{
    serverURL = "http://127.0.0.1:5000";

    async getCatalog(){
        let response = await axios.get(this.serverURL + "/api/products");
        return response.data;

        // return catalog;
    }

    async addProduct(product){
        let responde = await axios.post(this.serverURL + "/api/products", product);
    }
}

export default DataService;