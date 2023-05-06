var books = [{
        title: "Lord of the Rings",
        year: 1994,
        pages: 3000
    },
    {
        title: "1984 bbook",
        year: 1984,
        pages: 2000
    },
    {
        title: "Art of war",
        year: 2000,
        pages: 5000
    }
]

// alert(books.length);




setTimeout(() => {
    for (i = 0; i < books.length; i++) {
        console.log(i)
        document.querySelector('.title').innerHTML = books[i].title
        document.write(
            books[i].title + "<br />",
            books[i].year + "<br />",
            books[i].pages + "<br />"
        );

    }
}, [4000]);