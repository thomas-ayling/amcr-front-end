import React from 'react';
import axios from 'axios';

const [books, setBooks] = useState([]);
const [searchInput, setSearchInput] = useState("");

// Testing Library sudo Database
const fakebooks = [
    {name: "book One", genre: "Devops", author: "Charles", reader: "John", out: false},
    {name: "book Two", genre: "Java", author: "John", reader: "", out: false},
    {name: "book Three", genre: "Devops", author: "Steve", reader: "Kentaro Miura", out: true},
    {name: "book Four", genre: "Python", author: "Alex", reader: "Kevin", out: true},
    {name: "book Five", genre: "Management", author: "Tom", reader: "Smith", out: true},
    {name: "book Six", genre: "Python", author: "Zoriana", reader: "tanjiro", out: false},
    {name: "book Seven", genre: "Java", author: "Kya", reader: "Haruki Murakami", out: false},
    {name: "book Eight", genre: "Java", author: "Stanislav", reader: "John", out: true},
    {name: "book Nine", genre: "Buisness", author: "Jab", reader: "Saitama", out: false},
]

const getData = async () => {
    const {data} = await axios.get('https://databaseUrl/books/getAll');
    setBooks(data);
}

const Library = () => {

    useEffect(() => {
        getData();
    })

    return (
        <>
        </>

    )
}