const images = [{
        name: 'Wild Elephant',
        url: './asset/img/animal1.jpg',
        category: 'Animals',
        date: '2012-04'
    },
    {
        name: 'Sea Turtle',
        url: './asset/img/animal2.jpg',
        category: 'Animals',
        date: '2015-12'
    },
    {
        name: 'New-York Skyline',
        url: './asset/img/city1.jpg',
        category: 'City',
        date: '2020-01'
    },
    {
        name: 'Toronto Skyline',
        url: './asset/img/city2.jpg',
        category: 'City',
        date: '2021-03'
    },
    {
        name: 'Foggy Forest',
        url: './asset/img/nature1.jpg',
        category: 'Nature',
        date: '2019-11'
    },
    {
        name: 'House on a lake',
        url: './asset/img/nature2.jpg',
        category: 'Nature',
        date: '2018-09'
    },
    {
        name: 'Stars at night',
        url: './asset/img/space1.jpg',
        category: 'Space',
        date: '2010-02'
    },
    {
        name: 'Milkyway',
        url: './asset/img/space2.jpg',
        category: 'Space',
        date: '2006-06'
    }
];

const gallery = document.querySelector('.gallery');

for (const el of images) {
    gallery.innerHTML += `
        <div>
            <img src = "${el.url}" alt = "${el.name}">
            <p>${el.name}</p>
            <p>${el.date}</p>
        </div>`;
};

// FUNCTION
function filterByCategory(cat) {
    gallery.innerHTML = '';
    for (const el of images) {
        if (el.category === cat) {
            gallery.innerHTML += `
        <div>
            <img src = "${el.url}" alt = "${el.name}">
            <p>${el.name}</p>
            <p>${el.date}</p>
        </div>`;
        };
    };
};

// FILTER BY CATEGORY
const nature = document.querySelector('.filtersBtns__nature');
const space = document.querySelector('.filtersBtns__space');
const animal = document.querySelector('.filtersBtns__animal');
const city = document.querySelector('.filtersBtns__city');

nature.addEventListener('click', function () {
    let isFiltered = false;
    
    filterByCategory('Nature');
});
space.addEventListener('click', function () {
    filterByCategory('Space');
});
animal.addEventListener('click', function () {
    filterByCategory('Animals');
});
city.addEventListener('click', function () {
    filterByCategory('City');
});