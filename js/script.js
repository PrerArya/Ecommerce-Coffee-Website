
    document.addEventListener('DOMContentLoaded', function () {
        // Get the search button and search form elements
        const searchBtn = document.getElementById('search-btn');
        const searchForm = document.querySelector('.search-form');

        // Toggle the search form visibility on search button click
        searchBtn.addEventListener('click', function () {
            searchForm.classList.toggle('active');
        });

        // Get the menu button and navbar elements
        const menuBtn = document.getElementById('menu-btn');
        const navbar = document.querySelector('.navbar');

        // Toggle the navbar visibility on menu button click
        menuBtn.addEventListener('click', function () {
            navbar.classList.toggle('active');
        });
    });
    window.onscroll = function () {
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
    }

    
    
    
    