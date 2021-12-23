<h1 align="center">Sport Quiz 2021 </h1>

## Introduction
This interactive quiz is based on the sporting achievements of the past year to show there were some great sporting moments of 2021 as a part of my project portfolio to demonstrate the skills I have developed from the JavaScript Essentials module.


![Am I Responsive UX](assests/images/design/amIInteractive.png)

View the live website on GitHub [Sports Quiz 2021](https://ryanmawalker.github.io/sports-quiz-portfolio-2/)

<h1 align="center">User Experience (UX)</h1>

-   ### User Stories

    -   #### First Time Visitor Goals

        * Understand the main purpose of this site.
        * Play anytime.
        * Easily understand how to play.
        * See my score.
        * See when I get an answer right.
        

    -   #### Returning Visitor Goals 

        * Beat other scores.
        * Better my own score.
        * Repeat the quiz again.

    -   #### Author Goals

        * As an Author, I want users to be immediately drawn into to the website.
        * As an Author, I want to promote user interaction via our social media channels.
        * As an Author, I want the campaign to be shared to gain notirotity for my further works.  


### Opportunities/Problems

|Opportunities | Importance | Viability / Feasibility
|-----|:------:|:-----:|
|**Entice the user using interactive design** | 5 | 5 |
|**Responsive site for mobile and tablet** | 5 | 5 |
|**Provide details of the campaign**  | 5 | 5 |
|**Provide ease of access to information** | 5 | 5 |
|**Encourage users to return to the site** | 5 | 5 |
|**To build a community**   | 5 | 4 |
|**Encourage users to share the campaign** | 4 | 4 |
|**Provide a single point of reference to useful external resources** | 3 | 4 |



### Wireframe mockups
To produce a basic mockup of the site layouts I used Balsamiq. 

* [Home page wireframe](assests/wireframes/homepage-wireframe.png)
* [Overview page wireframe](assests/wireframes/overview-wireframe.png)
* [Character Creation page wire frame](assests/wireframes/charactercreation-wireframe.png)
* [Contact page wire frame](assests/wireframes/contact-wireframe.png)

There were necessary deviations from the wireframe regarding copyright concerns, initally I had aimed to include a youtube video that users could interact with and watch however looking further into YouTubes copyright terms and coditions I was unsure if this would be fair use so have instead removed it and kept a clickable link that sends you straight to the youtube video by How to be a Great DM. 

* [Original Soundcloud Interact](assests/media/ux-changes/soundcloud-issue.png)
* [UX of Soundcloud and Youtube link](assests/media/ux-changes/link-only.png)


### Design

Following the overall structure of the wireframes being established, I first set out to find stock images that would relate to a niche horror fantasy without compromising on the aesthetic. I needed a hero image that immediately caught the user’s focus and explained the webpage on its own. After going through unsplash and pexels for a couple of days I was able to find what matched the asthetic I was targetting on shutterstock [https://www.shutterstock.com/](https://www.shutterstock.com/g/WarmTail?searchterm=)

* [Image Collection](assests/media/image-collage.png)
* [Final Image](assests/images/hero-2560.jpg)

### Color Scheme

The image then dictated the color scheme design focus, the goal then became to have striking contrasts that mentally relate to horror but for a contrasting perspective, I needed to clear visible text as the purpose of the website is to draw the user in and give them the information they want to come back to.

By testing different rgba shades of red to match up with my hero image I chose I compared contrasting colors using [https://webaim.org/resources/contrastchecker/](https://webaim.org/resources/contrastchecker/) of which white (#FFFFFF) gave a good contrast. 

To give a container contrast for the main body of text I used a grey background color which gave a suitable contrast ratio, however later on in development this was changed to black. The black to white contrast is the highest contrast and suited the theme of the website and the goal of making the information stand out. 

* [Red Contrast Check](assests/media/ux-changes/contrast-red.png)
* [Grey Contrast Check](assests/media/ux-changes/grey-contrast.png)
* [Black Contrast Check](assests/media/ux-changes/contrast-black.png)
* [Previous Grey container](assests/media/ux-changes/grey-container.png)
* [Final Black container](assests/media/ux-changes/black-container.png)

<h1 align="center">Features</h1>


## Common Features

* ### Navigation Bar

    - The navigation bar is common across the whole site appearing on all 4 pages.
    - The navigation bar contains links to the home page, campaign, character creation and contact page to give the user simple navigation around the website.
    - The logo has been added to the navigation bar as an additional link back to the home page.
    - The logo item was imported using font awesome the choice of the logo was straight forward a d20 dice is synonymous with D&D.
    - The navigation bar is fully responsive with the nav bar change at two media sizes to give a smoother transition. 
    -  A hover over feature has been added so the users can see what navigation option they are currently selecting.
    - An active class has been set for the page the user is currently on, this is shown via a white underline beneath the text which is shown below. 

    ![Navigation bar](assests/media/ux-changes/nabar.png)

* ### Footer 

    - The footer section is common to every page across the site, the footer includes links to each social media platform, currently all these links send you straight to the main social media page as this campaign is yet to be added to these platforms excluding the discord link. The discord link sends you an invite to a server I set up.
    - The link items were imported using font awesome using the script at the bottom of the page. 
    - Included is a copyright notice including my name.

* ### Banner Title Card

    - The banner card is common to every page but the home page, this is to keep a consistant theme that is contrasted by the changing banner photos. The banner card is shown below.
    - The banner card is fully responsive with moblie devices as an issue arised with it overlapping the main body of text on each page. 

    ![Banner Card](assests/media/ux-changes/banner-card.png)

* ### Text Container

    - Each page's body of text is incased in this container it ensures the design remains consistent across the site.
    - This is made fully responsive where at 1024px the container expands to the full page width prevent the text from looking squashed in. 

    * [Container without media query](assests/media/container-without-med.png)
    * [Container with media query](assests/media/container-with-med.png)

## Home Page Features

*    ### Hero Image 
        - The home page has a hero image to width and height of the full scrren. As previously stated in the design section this is to draw the user in.
        - The hero image is fully responsive so the figure in the image remains center of the screen at all time. 
        - The hero image contains the title of the website which is contained within a fully responsive div element, this changes position and font size dependant on screen width.
        - The hero image as contains an interactive button which animates when hovered over or clicked, this is also fully responsive and caused an interesting bug which will be addressed in the bug section of this document.

![Hero Image](assests/media/hero-image-read.png)

* ### Home Page Information Section
    - Taking inspiration from the [call of duty vanguard website](https://www.callofduty.com/content/atvi/callofduty/vanguard/web/en_gb/home.html), the sections of text have been separated and style in 4 separate divs to control the position and stagger the text. 
    - Images that correlate to the banner of each page sit above their related counter part e.g. the warrior holding a torch is above "Story" the banner for the Story section is that image.
    - Learn more buttons have been added which light up when hovered over and are linked to the id of the specific section directing the user to specific sections of the site.
    - The sections are responsive under both the 1024px media query and at 768px where the sections sit one on top of the over giving a clean user interface the difference can be seen in the links below..
    - [Home page full screen](assests/media/homepage-section.png)
    - [Home page responsive](assests/media/homepage-768px.png)

## Campaign Features
* ### Page Content 
    - The main section of the campagin page is to give the user digestable information and to give a teaser to the campaign story.
    - The main section also includes information for DMs looking to branch into horror with a summary of information and links to external resources. 

![Snippet of compaign section](assests/media/Campaign-section.png)

* ### Soundcloud Player
    - The interactive soundcloud player at the foot of the page is fully responsive with links to the artist placed above.

    ![Soundcloud player](assests/media/soundcloud.png)

    ![Responsive Soundcloud player](assests/media/responsive-soundclound.png)

## Character Creation Features
The purpose of this page was to be more interactive by distributing quite a lot of information in an engaging manor, for this there is a combination of drop down menus and pop-ups that the user can easily use to get the exact information they want. The purpose of this is for site retention by producing a page that has links to the external material and a more compact breakdown of the roles it becomes more convinent to visit this webpage.
* ### Inital Section
    - The inital section introduces the key feature of the capaign and give an overview of available character parameters.
    - The inital section also includes likes to the official race and class guides which are the foundations for the ones related to the campaign. 
* ### Races Section 
    - The layout is organised into a series of drop down menus using the details and summary function of CSS This gives the user the option to have just the specific information they require as opposed to an undigestable amount of text on the screen. 

    ![drop down menu evidence](assests/media/dropdown.png)

    - The details and summary elements were checked using the site [caniuse.com](https://caniuse.com/?search=details%26summary) to which it is supported by 97.4% of gobal users. 

    ![Can I Use Evidence](assests/media/caniuse.png)

* ### Classes Section 
    - Individual interactive images are used to represent each class allowing users to click on each image to reveal the description.

    ![Class Image Layout](assests/media/classes.png)

    - A seperate interface opens changing the opacity of the background bringing full attention to the text container. When the window is closed using the close window button the user is returned to the exact same position they were previously on, the page.  

    ![Class Image Popup](assests/media/classes-popup.png)

    - The images and popups are fully responsive as shown in the images below.
    - The screen width has been lowered to 1277px for the first image.

    ![Lower Screen width for Class Images](assests/media/class-responsive-1.png)

    - The screen width has been lowered to 375px (iPhoneX width) for the second image.

    ![Mobile Screen width for Class Images](assests/media/class-responsive-2.png)

    - The screen width is at 375px to show the popup window is responsive for the third image.

    ![Mobile Screen width for Popup](assests/media/class-responsive-3.png)

## Contact Page Features

* ### Community Section
    - This section is to highlight the community aspect of the campaign and encourage users by highlighting the discord. The discord is referred to on the Main page and in each footer to achieve to goal of users returning to the site or remaining engaged with the content.

    ![Join the Community Image](assests/media/community.png)

    - The contact form gives users the ability to contact the campaign creators for a copy of the campaign or any queries. The user is asked for full name, last name, email address and message which are all required fields.

    ![Contact Form Image](assests/media/contact.png)

<h1 align="center">Future-Enhancements</h1>

The future intention of this webpage would be to enable users to create their own characters using the webpage, share stories or images of themselves enjoying the campaign to build a bigger community.

- ### Future Goals:

* Website design and layout: 
    - Addition of more images or fanart to break up the campaign section. 
    - Addition of the linked youtube video and soundcloud to the website, this would required a response from the current creators. 
    - Seperate the contact form into another webpage and have a dedicated community page which would display fanart or community events. 
    - Add the remaining races and classes from the basic free to use D&D 5e adventure book.

* Functionality:
    - Introduce a section where users can propose new races or classes via a submission form which would then link to a database.
    - Introduce a section as part of the character creation that allows users to input a desired character name chose from a drop down menu their class and race. The site would take that input to randomly generate the numbers for the stats on a character sheet taking into account the users chosen race/class and produce and downloaded character sheet. 
    - Feedback section, where users can share difficulties in the campaign which is then logged into a database that can correlate responses to show where sections of the campaign requires rebalancing. 

* Long term:
    - The long term goal of the website is to gian enough traffic where the homepage can advertise multiple campaigns where the users can select a campaign they like the look off be able to generate a new character or have their current one modified (if required to suit) and download a copy of the campaign. 


<h1 align="center">Testing</h1>

I carried out continuous testing as the site was being developed. Once a git commit was carried out I would then test the site using chrome dev tools. This in theory allowed me to confirm the styling was being applied correctly however, I had ignored to test for responsive design until midway through the development cycle resulting in many interactions not working as intended and required serveral fixes, the more interesting fixes shown below. 

* Issue 1: Popup for classes snapping to the top of the page what the window was closed. 
   - [Faulty code](assests/images/codefixes/issue-1.1.png)
   - [Image of Fault 1](assests/images/codefixes/issue-1.2.png)
   - [Image of Fault 2](assests/images/codefixes/issue-1.3.png)
* Solution: The href being "#" was forcing the view to return to the top of the page, by giving both href and the anchor tage an id to return back to the screen remains in place.

* Issue 2: The whole homepage was being offset to the left once the screen width was shrunk to <600px leaving a continuous bar on the right of the page that increased in size while pushing the content to the left of the page. 
* Soloution: Interestingly I haven't been able to recreate this bug I inspected the element and saw that the container my animated button was in ignored the boundary set by the container above that, by removing the float property and adjusting the padding and width of the containers affecting the button the content now remains in the correct place. 

Once I believed the site to be complete I shared it amongst friends and family to get a large sample size of different devices to find out any issues encoutered or anything they didn't like from a user perspective, the messages can be seen below and I have been given permission to shared then in the context the chat and names are covered. 

* [Feedback 1](assests/media/ux-changes/messenger-feedback1.png)
* [Feedback 2](assests/media/ux-changes/messenger-feedback2.png)

Additional testing carried out using the chrome developer tools was to keep dragging the resolution across to find breakpoints where sections would overlap or spacing issues, a regular occurence from this was linehieghts and margin spacing, to overcome this instead of using pixels to determine heights and widths I used percentages or viewport heights where required.

Physical testing by myself was carried out with the following devices:
* Desktop Computer: 1920 x 1080 & 1280 x 720
    - Mozilla Firefox
    - Google Chrome
* Microsoft Surface Pro 2: 1920 x 1080
    - Google Chrome
* iPhone XR: 828 x 1792
    - Safari


<h1 align="center">Validator Testing</h1>

* ## HTML 
    - Two re-occurring errors came up when initally validating.
        - [First Error](assests/media/error.png) which was fixed by removing the achor tag as it was unecessary with the set ID, this error I requested help from slack. 
        - Second error was reusing IDs of the same value, where possible these were changed to classes and others the IDs where numerically changed. 

    - Final validation testing where no errors occured.
        - [Home Page](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fryanmawalker.github.io%2FDepths-of-Ebonshade%2Findex.html)
        - [Campaign Overview Page](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fryanmawalker.github.io%2FDepths-of-Ebonshade%2Foverview.html)
        - [Character Creation Page](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fryanmawalker.github.io%2FDepths-of-Ebonshade%2Fcharacter-creation.html)
        - [Contact Page](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fryanmawalker.github.io%2FDepths-of-Ebonshade%2Fcontact.html)

* ## CSS 
    - No errors were returned when using the [CCS Validator link](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fryanmawalker.github.io%2FDepths-of-Ebonshade%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

* ## Lighthouse
    - I generated a lighthouse report for the deployed site through the google extension. 
    - The inital report came back clear with one error regarding an image containers in my nav bar which  didn't have description. Resolved issues report below:

    ![Desktop Report](assests/media/lighthouse-report.png)

    - See below for mobile generated report through the google extension lighthouse
    - I was able to improve performance to 80% on mobile devices, with the only way to increase perfomance is "Serve static assets with an efficient cache policy"

    ![Lighthouse report for mobile](assests/media/final-mobile.png)

<h1 align="center">Deployment</h1>

I Deployed the page on GitHub pages via the following procedure:
* From the project repository got to settings.
* Scroll down to the bottom of the page, underneath GitHub Pages is a link to it's own dedicated tab. Or alternatively select Pages from the menu of the left hand side.
* Under the Source click the drop down menu, select main and click save.
* A message will appear to show sucessful deployment and a link will appear as shown below.
![Example deployment link image](assests/media/example github.png)

To access the live site click the following link - [Depths of Ebonshade live site](https://ryanmawalker.github.io/Depths-of-Ebonshade/)


<h1 align="center">Credits</h1>

### Content

* The learn more buttons were adapted from the following [stackoverflow article](https://stackoverflow.com/questions/17375708/how-to-create-an-html-button-that-acts-like-a-link-to-an-item-on-the-same-page)
* The collapsable class menus were inspired by the top comment on this [stackoverflow article](https://stackoverflow.com/questions/15095933/pure-css-collapse-expand-div/38905720)
* The popup class boxes were adapted from [CodeShack](https://codeshack.io/pure-css3-modal-example/)
* The popup box fix adapted from the following [stackoverflow article](https://stackoverflow.com/questions/37178728/css-popup-jumps-back-to-top-of-page-when-closed)
* The responsive form was adapted from [W3Schools](https://www.w3schools.com/howto/howto_css_responsive_form.asp)
* The Races and classes we adapted from dndbeyond [Classes](https://www.dndbeyond.com/classes), [Races](https://www.dndbeyond.com/races). The text for all other pages was written by me. 
* The Icon and navbar were adapted from the Code Institute lessons.
* All Fonts imported from [Google Fonts](https://fonts.google.com/)
* As a general reference material [W3Schools](https://www.w3schools.com/) was used.
* As reference for my README and general project layout I was provided a link to MattBCoding [leinster-trophy](https://github.com/MattBCoding/leinster-trophy)

### Media
* The d20 icon use for the logo taken from [Font Awesome](https://fontawesome.com/v5.15/icons/dice-d20?style=solid)
* All images used on the webpage were from [Shutterstock](https://www.shutterstock.com/collections/305116529-f270b672)
* Media links used in the article send to the orignal source which were [Soundcloud](https://soundcloud.com/timkuligfreemusic) and [YouTube](https://www.youtube.com/).

### Mentions 

This project wouldn't have been to the standard is currently is without many people helping to test it and support me.

* Rahul Lakhanpal - My project mentor, he has guided me through this project supplying great sources of information and clearly communicate to me how to get myself unstuck. 

* Thomas Freeman - Close Personal friend, who helped me solve UI issues and test the website.

* Harry Pearson - Close Personal friend, who helped me solve through issues in my html, CSS and taught me how to effeciently use inspect element. 

* Harry Champman - Close Personal friend, who proof read my site and pointed out a considerable amount of grammatical errors.

* Emanuel Silva - Who has helped me into the early hours of the morning when I was having a deployment issue with my code.



























        
