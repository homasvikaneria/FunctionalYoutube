const express = require('express');
const cors = require('cors'); // Import cors
const app = express();
// const port = 3000;

// Use CORS to allow cross-origin requests
app.use(cors());

// // Sample data array
const main1 = [
    {
        id: 1,
        img: "./assets/Thumbnail-8.png",
        profil: "./assets/Ellipse 4 (1).png",
        text1: "Bulbuli|Coke Studion Bangla|",
        text2: "Season One |Ritu Raj X Nandita",
        channelname: "Coke Studio Bangla",
        views: "1.5M views • 2 Days ago"
    },
    {
        id: 2,
        img: "./assets/Thumbnail-9.png",
        profil: "./assets/Ellipse 4 (2).png",
        text1: "Bulbuli|Coke Studion Bangla|",
        text2: "Season One |Ritu Raj X Nandita",
        channelname: "Coke Studio Bangla",
        views: "1.5M views • 2 Days ago"
    },
    {
        id: 3,
        img: "./assets/Thumbnail-10.png",
        profil: "./assets/Ellipse 4 (3).png",
        text1: "Bulbuli|Coke Studion Bangla|",
        text2: "Season One |Ritu Raj X Nandita",
        channelname: "Coke Studio Bangla",
        views: "1.5M views • 2 Days ago"
    },
    {
        id: 4,
        img: "./assets/Thumbnail-11.png",
        profil: "./assets/Ellipse 4 (4).png",
        text1: "Bulbuli|Coke Studion Bangla|",
        text2: "Season One |Ritu Raj X Nandita",
        channelname: "Coke Studio Bangla",
        views: "1.5M views • 2 Days ago"
    },
    {
        id: 5,
        img: "./assets/Thumbnail-8.png",
        profil: "./assets/Ellipse 4 (1).png",
        text1: "Bulbuli|Coke Studion Bangla|",
        text2: "Season One |Ritu Raj X Nandita",
        channelname: "Coke Studio Bangla",
        views: "1.5M views • 2 Days ago"
    },
    {
        id: 6,
        img: "./assets/Thumbnail-9.png",
        profil: "./assets/Ellipse 4 (2).png",
        text1: "Bulbuli|Coke Studion Bangla|",
        text2: "Season One |Ritu Raj X Nandita",
        channelname: "Coke Studio Bangla",
        views: "1.5M views • 2 Days ago"
    },
    {
        id: 7,
        img: "./assets/Thumbnail-10.png",
        profil: "./assets/Ellipse 4 (3).png",
        text1: "Bulbuli|Coke Studion Bangla|",
        text2: "Season One |Ritu Raj X Nandita",
        channelname: "Coke Studio Bangla",
        views: "1.5M views • 2 Days ago"
    },
    {
        id: 8,
        img: "./assets/Thumbnail-11.png",
        profil: "./assets/Ellipse 4 (4).png",
        text1: "Bulbuli|Coke Studion Bangla|",
        text2: "Season One |Ritu Raj X Nandita",
        channelname: "Coke Studio Bangla",
        views: "1.5M views • 2 Days ago"
    },
    {
        id: 9,
        img: "./assets/Thumbnail-8.png",
        profil: "./assets/Ellipse 4 (1).png",
        text1: "Bulbuli|Coke Studion Bangla|",
        text2: "Season One |Ritu Raj X Nandita",
        channelname: "Coke Studio Bangla",
        views: "1.5M views • 2 Days ago"
    },
    {
        id: 10,
        img: "./assets/Thumbnail-9.png",
        profil: "./assets/Ellipse 4 (2).png",
        text1: "Bulbuli|Coke Studion Bangla|",
        text2: "Season One |Ritu Raj X Nandita",
        channelname: "Coke Studio Bangla",
        views: "1.5M views • 2 Days ago"
    },
    {
        id: 11,
        img: "./assets/Thumbnail-10.png",
        profil: "./assets/Ellipse 4 (3).png",
        text1: "Bulbuli|Coke Studion Bangla|",
        text2: "Season One |Ritu Raj X Nandita",
        channelname: "Coke Studio Bangla",
        views: "1.5M views • 2 Days ago"
    },
    {
        id: 12,
        img: "./assets/Thumbnail-11.png",
        profil: "./assets/Ellipse 4 (4).png",
        text1: "Bulbuli|Coke Studion Bangla|",
        text2: "Season One |Ritu Raj X Nandita",
        channelname: "Coke Studio Bangla",
        views: "1.5M views • 2 Days ago"
    },
];    



app.get("/main1", (req, res) => {
    if (main1) {
        res.json(main1);
    } else {
        res.status(404).send("Videos not found");
    }
});



const PORT = process.env.PORT || 3000; app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });


