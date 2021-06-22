const pictures = [
    { 
        title: 'Hangman', 
        paragraph: 'The classic game of Hangman made with HTML, CSS, and Javascript. Generates a random word(s) using an async/await fetch function. Primarily focused on the Javascript functionality of the game, such as keeping track of guesses and the current state of the Hangman.',
        link: "https://hangmann-gamee.netlify.app", 
        githubLink: 'https://github.com/leahzeisner/hangman',
        pictureNames: ["hangman-pic.png"], 
        activeIndex: 0 
    },
    { 
        title: 'Sudoku', 
        paragraph: 'I love playing Sudoku and wanted to challenge myself and recreate my own version. This game was made using Python and its Tkinter GUI Library, which I taught myself for the project. I developed a Sudoku Solver, a Sudoku Board Generator, and the Sudoku game itself. The user can choose between 4 levels, which the Sudoku Board Generator uses to generate a board according to that level.',
        link: "https://github.com/leahzeisner/Sudoku", 
        githubLink: 'https://github.com/leahzeisner/Sudoku',
        pictureNames: ["sudoku-pic-1.png", "sudoku-pic-2.png"], 
        activeIndex: 0
    },     
    { 
        title: 'Recipe App', 
        paragraph: "A Recipe App to keep track of all your recipes! This project was made with HTML, CSS, and Javascript. The user can filter by the name of the recipe and the type of food. They can also check which ingredients they have and don't have for the recipe. Supports functionality for adding, removing, and editing recipes and ingredients. Uses localstorage to preserve the user's data.",
        link: "https://recipe-applicationn.netlify.app", 
        githubLink: 'https://github.com/leahzeisner/WebDev/tree/main/recipe-app',
        pictureNames: ["recipe-app-pic-1.png", "recipe-app-pic-2.png"], 
        activeIndex: 0 
    },
    { 
        title: 'Indecision App', 
        paragraph: "Can't decide which task or activity to do? I know that feeling! This is an Indecision App made with React that randomly chooses something from your list so you don't have to. Made using HTML, CSS and Javascript. Just enter all the options and \"put your life in the hands of a computer!\"",
        link: "https://my-indecision-app.netlify.app/", 
        githubLink: 'https://github.com/leahzeisner/react-indecision-app',
        pictureNames: ["indecision-pic-1.png", "indecision-pic-2.png"], 
        activeIndex: 0 
    },
    { 
        title: 'Expensify', 
        paragraph: 'Expensify is an app to keep track of your expenses! This was made with React and all data is stored in a Firebase Database. The user can add, edit, and remove expenses, as well as filter by the date or amount of an expense. Each user is authenticated with their Google account and can login/logout securely.',
        link: "https://react-udemycourse2-expensify.herokuapp.com/", 
        githubLink: 'https://github.com/leahzeisner/React-Course-Expensify',
        pictureNames: ["expensify-pic-1.png", "expensify-pic-2.png" ], 
        activeIndex: 0 
    },
    { 
        title: 'Weather App', 
        paragraph: 'Need to check the weather? This weather app can provide you the weather information anywhere in the world. It can also access your current location if you give it permission. It uses weatherstack.com to fetch the weather and mapbox.com to fetch the location.',
        link: "https://zeisner-weather-app.herokuapp.com/", 
        githubLink: 'https://github.com/leahzeisner/nodejs-weather-website',
        pictureNames: ["weather-app-pic.png"], 
        activeIndex: 0 
    },
    { 
        title: 'Chat App', 
        paragraph: 'Chat with your friends using this Chat App. Join a room by selecting from the current active rooms or creating your own! You can also send your current location to the room using Google Maps.',
        link: "https://zeisner-chat-app.herokuapp.com/", 
        githubLink: 'https://github.com/leahzeisner/Chat-App',
        pictureNames: ["chat-app-pic-1.png", "chat-app-pic-2.png"], 
        activeIndex: 0 
    },
    { 
        title: 'Recipe & Shopping List App', 
        paragraph: 'Another Recipe App because you can never have too many! This one was made using Angular CLI and also incorporates a shopping list. You can keep track of your recipes and ingredients, as well as add ingredients from a recipe to your shopping list. All data is stored in a Firebase Database and users are authenticated with a username and password.',
        link: "https://recipe-shoppinglist-app.web.app/", 
        githubLink: 'https://github.com/leahzeisner/angular-recipe-shoppinglist-app',
        pictureNames : ["recipe-sl-app-pic-1.png", "recipe-sl-app-pic-2.png"], 
        activeIndex: 0 
    },
    { 
        title: 'Meetups App', 
        paragraph: "After a year long (+) pandemic, I'm sure you're looking for some fun events to go to! Made with Python Django, This Meetups App can keep track of any upcoming events. All data is stored in a SQLite Database. Users can browse events and register with their information.",
        link: "https://github.com/leahzeisner/django-meetups-app", 
        githubLink: 'https://github.com/leahzeisner/django-meetups-app',
        pictureNames: ["meetups-pic-1.png", "meetups-pic-2.png"], 
        activeIndex: 0 
    },
    { 
        title: 'Blog', 
        paragraph: 'For anyone who likes to blog, this is the app for you! Made with Python Django, this blog stores your posts in the built-in Django database. You can make posts, save posts for later, and leave comments! Specify tags on your post to highlight the topics!',
        link: "http://djangoblog-env.eba-jejnkqaj.us-east-2.elasticbeanstalk.com/", 
        githubLink: 'https://github.com/leahzeisner/django-blog',
        pictureNames: ["blog-app-pic-1.png", "blog-app-pic-2.png", "blog-app-pic-3.png"], 
        activeIndex: 0 
    },
    { 
        title: 'Random Quote Generator', 
        paragraph: 'This app was made using the Type.fit API to fetch a random quote. You can press the Twitter button to automatically fill out a new tweet with the quote, or generate a new one with the New Quote button.',
        link: "https://leahzeisner.github.io/quote-generator/quote-generator/", 
        githubLink: 'https://github.com/leahzeisner/quote-generator',
        pictureNames: ["quote-generator-pic.png"], 
        activeIndex: 0 
    },
    { 
        title: 'Infinite Picture Scroll', 
        paragraph: 'This website fetches 10 random photos at a time from Unsplash.com. It implements an infinite scroll functionality by calculating how much the user has scrolled. When the user is close to the bottom, it fetches 10 more random photos. This speeds up the website and creates an infinite scroll of some pretty aesthetic photos Each picture is also a link back to the source on Unsplash.com, where you can view the photographer and similar photos.',
        link: "https://github.com/leahzeisner/infinte-scroll",            // API KEY
        githubLink: 'https://github.com/leahzeisner/infinte-scroll',
        pictureNames: ["infinite-scroll-pic.png"], 
        activeIndex: 0 
    },  
    { 
        title: 'Robot Joke Teller', 
        paragraph: 'Need a joke? Have this robot tell you a randomly generated one! Made with HTML, CSS, and Javascript, this app fetches a joke from JokeAPI REST API. It uses a text-to-speech audio voice from VoiceRRS.org to have the robot tell the joke. There are even some computer science specific jokes!',
        link: "https://github.com/leahzeisner/joke-teller",              // API KEY
        githubLink: 'https://github.com/leahzeisner/joke-teller',
        pictureNames: ["joke-teller-pic.png"], 
        activeIndex: 0 
    },               
    { 
        title: 'Light to Dark Mode Website', 
        paragraph: "As a coder, I know all about light and dark mode. Personally, I can only use light mode, but this website supports both! This website is a template that can be adjusted to anyone's needs. It can toggle between a blue/red light mode and a black/purple dark mode.",
        link: "https://leahzeisner.github.io/light-dark-mode/", 
        githubLink: 'https://github.com/leahzeisner/light-dark-mode',
        pictureNames: ["light-dark-pic-light.png", "light-dark-pic-dark.png", "light-dark-pic-3.png", "light-dark-pic-4.png", "light-dark-pic-5.png"], 
        activeIndex: 0 
    },  
    { 
        title: 'Music Player', 
        paragraph: 'This project was made using HTML, CSS, and Javascript. The source code stores an array of songs, including their mp4 and image files. It uses calculations to show the progress bar and time of the current song. You can play, pause, skip, and go back to the previous song. The song seen here is "Electric Chill Machine" by Jacinto Design.',
        link: "https://leahzeisner.github.io/music-player/", 
        githubLink: 'https://github.com/leahzeisner/music-player',
        pictureNames: ["music-player-pic.png"], 
        activeIndex: 0 
    },
    { 
        title: 'Countdown App', 
        paragraph: 'Need to countdown to something special? Use this countdown web app I made with HTML, CSS, and Javascript! It uses Date Objects and localstorage to keep track of the time and event.',
        link: "https://leahzeisner.github.io/custom-countdown/", 
        githubLink: 'https://github.com/leahzeisner/custom-countdown',
        pictureNames: ["countdown-pic-1.png", "countdown-pic-2.png", "countdown-pic-3.png"], 
        activeIndex: 0 
    },
    { 
        title: 'Spock Rock Game', 
        paragraph: 'Rock Paper Scissors Lizard Spock. From Big Bang Theory, this is a twist on the classic Rock Paper Scissors game. It uses Font Awesome Icons from FontAwesome.com and a Confetti animation from downloaded from https://www.cssscript.com/confetti-falling-animation/',
        link: "https://leahzeisner.github.io/spock-rock-game/", 
        githubLink: 'https://github.com/leahzeisner/spock-rock-game',
        pictureNames: ["spock-rock-game-pic.png"], 
        activeIndex: 0 
    },
    { 
        title: 'Kanban Board', 
        paragraph: 'This is a Kanban Board, or a digital management system. It implements a "drag and drop" functionality, allowing users to easily move items from one section to the other, making task management much easier.',
        link: "https://leahzeisner.github.io/drag-n-drop/", 
        githubLink: 'https://github.com/leahzeisner/drag-n-drop',
        pictureNames: ["kanban-board-pic.png"], 
        activeIndex: 0 
    },
    { 
        title: 'Microsoft Paint Clone', 
        paragraph: 'This is a recreation of the Microsoft Paint software. It uses a Javascript Color Picker from jscolor.com. It uses Javascript canvases, line paths, click events and mouse positions to create the painting functionality.',
        link: "https://leahzeisner.github.io/microsoft-paint-clone/", 
        githubLink: 'https://github.com/leahzeisner/microsoft-paint-clone',
        pictureNames: ["paint-clone.png"], 
        activeIndex: 0 
    },
    { 
        title: 'Pong Game', 
        paragraph: "This is the classic pong game played against the computer. It uses many calculations to make sure the game is precise and enjoyable. It uses Javascript canvases to track the user's paddles and the ball.",
        link: "https://leahzeisner.github.io/pong-game/", 
        githubLink: 'https://github.com/leahzeisner/pong-game',
        pictureNames: ["pong-game-pic.png"], 
        activeIndex: 0 
    },
    { 
        title: 'Natours Website', 
        paragraph: 'This is the website for a fictional service called Natours, or Nature Tours. It was made with a focus on advanced CSS and Sass and all the fun features that can be implemented, like animations, clip paths, and background images, ',
        link: "https://leahzeisner.github.io/Natours-Project/", 
        githubLink: 'https://github.com/leahzeisner/Natours-Project',
        pictureNames: ["natours-pic.png", "natours-pic-2.png", "natours-pic-3.png", "natours-pic-4.png", "natours-pic-5.png", "natours-pic-6.png"], 
        activeIndex: 0 
    },
    { 
        title: 'Trillo Landing Page', 
        paragraph: 'This is the landing page for a fictional, all-in-one booking service called Trillo. You can book hotels, flights, car rentals, and tours. It was made with a focus on advanced CSS and Sass, specifically Flexbox layouts and fun animations that add a unqiue style.',
        link: "https://leahzeisner.github.io/Trillo-Project/", 
        githubLink: 'https://github.com/leahzeisner/Trillo-Project',
        pictureNames: ["trillo-pic.png"], 
        activeIndex: 0 
    },
    { 
        title: 'Nexter Landing Page', 
        paragraph: 'This is the landing page for a fictional company, Nexter, that sells luxury homes. It was made with a focus on advanced CSS and Sass, specifically CSS Grid layouts.',
        link: "https://leahzeisner.github.io/Nexter-Project/", 
        githubLink: 'https://github.com/leahzeisner/Nexter-Project',
        pictureNames: ["nexter-pic.png", "nexter-pic-2.png", "nexter-pic-3.png", "nexter-pic-4.png", "nexter-pic-5.png"], 
        activeIndex: 0 
    }
]