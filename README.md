# ECommerceSite

This has been another project for our _Nology course, requiring the use of React and a focus on use of the Firestore database.

I wanted to avoid using an API dataset, so I've created a function that takes a series of arrays and can dynamically populate or reset the database with one click.
The app is responsive between tablet and desktop sizes, but not down to the mobile level. A completley different version would be made for the mobile version instead of using media queries -  I feel like the designs would be too radically different.

I still feel like I'm not taking full advantage of React's component re-usability, due at least in part to rushed scoping at the start of the project.


# What I learned during this project

This was my first time interacting with a database outside of some SQL coursework, and my first time using a NoSQL database. I'm quite proud of how the application interacts dynamically with the database. This wasn't the case all the way, as I was trying to use context to manage both the data and customer cart. This forced me to partially rebuild the application halfway through, which was a learning experience in itself.

At first, I had all the cart data stored in page context, but when I took another look at the data, I realized that would limit the ability to track an abandoned cart. I learned that it's important to plan not just for customer interaction, but also data collection and tracking at the outset.

Sometimes MVP also stands for maximum viable product. If there's extra functionality to implement, the scope would have called for it.

# What I struggled with

I still find styling quite difficult. I think I would benefit from a design course.

When I found myself really flowing, I would often forget to save and check progress often enough. Several times I had to spend an hour backtracking to solve a bug I had implemented along the way.

Scope creep. When I knew I had to implement a carousel, I immediately thought to have every category as a carousel, and even tried to implement it. This turned out to be a waste of time and very confusing to look at.

# What still needs to be done?

Find a font to use globally. I gave a quick look to importing fonts into a React project, but hit a wall on the import syntax. Most resources I found still referred to the create-react-app sytax and file structure.

Create a mobile version of the app.

Animation to slide the modal in and out of the page.

Carousel on the landing page to have more items, and transition in a less snappy way.

Error handling. Currently there's nothing in place in case the database is down.

Testing to be implemented so I can work on the app in the future morea easily.

# What would I do differently on a rebuild?

A more thorough scope at the beginning, and focus on what can be created as re-usable components instead of creating them several times. A more thorough scoping process would also help with setting out the database.

