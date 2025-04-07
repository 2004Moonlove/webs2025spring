# Proposal
My plan for the web is to construct a web introducing myself. There will be a big title of my name at the top of the page with a small photo next to it.
And there will be a guide line at the left part under the title. In the guide line there will be three part, about me, photos, my life.
Each one can be click to reach another page to show the detailed information. And I want to put some daily photos or traveling photos to my photo part.
And for my life part, I  want to include my experience during schools like the clubs, the researches, the works.


![sketch](https://github.com/user-attachments/assets/12e511a5-9c7b-4870-a27e-5605727da990)

## Introduction
This web project is to build a personal website that introduces myself in a clean, interactive, and visually engaging format. At the top of the page, there will be a large title with my name "Yang Ye", alongside a small profile photo to highlight my identity.
On the top side of the page, there will be a vertical navigation bar that guides visitors to different sections: About Me, Photos, and My Life. Each section will be clickable and dynamically load different content on the same page.
- The intro part is a breif summary of the later different parts.
- The About Me section will introduce who I am, my background, and my personality.
- The experience part is about my previous working experience and research experience as well as other aspect of me.
- The my school part is an introduction of the school from my high school to university, where you can also reach the official website of them and get more detailed information of them.
- The Photos section will showcase some of my daily moments, travel memories, and fun snapshots with friends.

In the My School part, I will show my academic journey from high school to college, including names of my schools and visual elements that help tell my story. In this section, you can find different school with dofferent cards where you can click and get in to the detailed information of the school you click to know more about it.

The layout is designed to be clear and simple, while still expressing my creativity and personality. This website serves as a self-introduction and a creative portfolio of my student life.

| Title | Author | Source | License (TASL) |
|------|----|------|------|
|  Cathy | Karthik Pansetty | Unsplash | Photo by <a href="https://unsplash.com/@karthikpansetty?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Karthik Pansetty</a> on <a href="https://unsplash.com/photos/a-very-tall-building-with-a-clock-tower-in-the-background-yv6PT5t-fDk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> |
| uPittsburgh  | Karthik Pansetty | Unsplash | Photo by <a href="https://unsplash.com/@connorgan?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Connor Gan</a> on <a href="https://unsplash.com/photos/brown-concrete-building-HQmLRN-cxaQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> |
| edb754511cf8bdb395ae262d6b0633e  | me | photo taken  by myself |  |
| HL | me | photo taken by myself |  |
| SICHuan | me | photo taken by myself |  |
| upitt | me | photo taken by myself |  |
| 主持人 | me | photo taken by myself |  |
| 大教堂 | me | photo taken by myself |  |
| 大梅沙 | me | photo taken by myself |  |
| 山顶 | me | photo taken by myself |  |
| 树 | me | photo taken by myself |  |
| 横图加州 | me | photo taken by myself |  |
| 横图滑雪 | me | photo taken by myself |  |
| 海洋馆 | me | photo taken by myself |  |
| 滑雪 | me | photo taken by myself |  |
| 爱心 | me | photo taken by myself |  |
| 生活照 | me | photo taken by myself |  |
| 粉色 | me | photo taken by myself |  |
| 红岭 | me | photo taken by myself |  |
| 长图 | me | photo taken by myself |  |
| 骑车 | me | photo taken by myself |  |
| 龙头 | me | photo taken by myself |  |


Photo by <a href="https://unsplash.com/@connorgan?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Connor Gan</a> on <a href="https://unsplash.com/photos/brown-concrete-building-HQmLRN-cxaQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>  

Photo by <a href="https://unsplash.com/@karthikpansetty?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Karthik Pansetty</a> on <a href="https://unsplash.com/photos/a-very-tall-building-with-a-clock-tower-in-the-background-yv6PT5t-fDk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      
## My Thinks and Works
First and foremost, I decide to design a web about myself where you can find different aspects of information about me. When you get inn to the web (main page is the index.html file), a web with light blue tone using a picture I taken before under bright sunlight as the back ground. This page is linked with the main_page.css file. You can find the keynote of the web as the words "Welcome to Yang's page" which is in the largest font size telling you that this web is design to introduce myself. After that there is a line "Hi! Nice to meet you!" in a kind of art font.

![Image](https://github.com/user-attachments/assets/c2bd21b1-3caa-4092-9530-a0c90ccbb48f)

For the background to use my photo, I add an independent div for it in order to make the background not move when sliding up and down. And to make it, I load the photo in the css file and put the phot in the -2 z-index controlling the opacity to make the web looking better.

![Image](https://github.com/user-attachments/assets/08b0728f-6458-4718-ac76-27ec37ff3bd9)

![Image](https://github.com/user-attachments/assets/79c48215-55e7-47d4-8aa7-6b2fb581761e)

There is a horizontal bar where you can click on each different part to look into the detailed information. this part I use the .js file to help me realize that. In the index.html file, I include all the elements of the information in different section, and set the part of later information or say the information I want it to appear only when clicking on the their button to display as none. I load the id of different part as reference, and add even listener of each one, setting function to load each part to let them appear when clicking. To make different part appear and not appear, I change the state of their display to none, block, grid.

![Image](https://github.com/user-attachments/assets/c904501a-858b-4ef5-9cd7-90312e8bea62)

You can also find there is a translucent white frame between the background and the content, which i set it to make the words or say information more readable as well as make the web more beautiful. It is set in the class of sections, where make the background to translucent  white and bur it.

![Image](https://github.com/user-attachments/assets/f5665fb7-e2ad-4400-81d8-fe1e6d66d2b0)

![Image](https://github.com/user-attachments/assets/f94dd2fb-756b-4883-833b-f8e1bb00d878)

- In the intro part, you can find brief introduction including information of different part: About Me, Hobbies, My Photos, My School.

![Image](https://github.com/user-attachments/assets/a6db9b91-9da9-4835-8827-1c9f657c50b3)

![Image](https://github.com/user-attachments/assets/9070bf9b-db66-47ae-954c-7f106374cc76)

![Image](https://github.com/user-attachments/assets/92a86fe1-5c54-4866-b91c-b21e2945cae1)

At the my school part, there I put a link where you can get to another page looking for some information about the three school in Chinese version, and get back with the "back" link.

![Image](https://github.com/user-attachments/assets/afa888a9-7824-4091-910c-6f71c50ad9ba)

![Image](https://github.com/user-attachments/assets/c42a92f0-59ad-4c56-a6d3-4a3c01a0940f)

![Image](https://github.com/user-attachments/assets/463e9b47-8f10-4ea3-9267-de3c8abf6976)

![Image](https://github.com/user-attachments/assets/86e82c80-4eec-46c0-aaaa-4e81c4d9d172)

![Image](https://github.com/user-attachments/assets/da9bebbd-4c33-4e0e-a943-fb4cfd89ca02)

- In the About Me part, you can find a brief introduction about myself.

![Image](https://github.com/user-attachments/assets/85c294e1-6728-4fb8-99e6-2ef3b64e37ed)

When you click the link, it will take you to another page where I put some detailed information of University of Pittsburgh, where you can also click the back link to get back the index.html page.

![Image](https://github.com/user-attachments/assets/43f8844d-4256-4405-a8e0-fc707a378ec3)

![Image](https://github.com/user-attachments/assets/7bc20ce2-1ee6-4907-bb47-e45ad190cd69)

- In the Experience part, I include more information about me. This part is more likely to be similar to a resume where I include my working experience , research experience, as well as  my campus life and spare time life.

![Image](https://github.com/user-attachments/assets/b5a414c4-3040-4359-b927-c123d750dbe2)

![Image](https://github.com/user-attachments/assets/ff9def51-35d1-45bc-99db-a4a31a7dc5c7)

![Image](https://github.com/user-attachments/assets/f3a9646f-9f74-460c-a6b5-d57a799f30e3)

- In the My School part, you can find there are three cards in the page where you can click on each one to see the detail information, and you can also find the official school website on it.

![Image](https://github.com/user-attachments/assets/24cb8e9b-aae3-4005-990b-561a0b90395b)

![Image](https://github.com/user-attachments/assets/7d37a233-0e37-4071-bcba-27b0d55db721)

When you click each one, you will get information like:

![Image](https://github.com/user-attachments/assets/8cf75361-f61d-413a-868d-7e8e12837231)

![Image](https://github.com/user-attachments/assets/4a747043-f9ef-4bf1-bfe5-b793fb988699)

![Image](https://github.com/user-attachments/assets/8c411538-3775-41eb-bf09-23c5ca0d09c6)

There are also back buttons in each page so that after you finish reading the detailed information, you can get back to the previous page where you can click another school for information.

![Image](https://github.com/user-attachments/assets/d870e016-d31f-459d-9068-5ab52faf3489)

- In the Photo part, you can find some pictures of my life with small notes.

![Image](https://github.com/user-attachments/assets/30dc5b04-a0f9-4153-93a2-184587aa5240)

![Image](https://github.com/user-attachments/assets/fe991a59-a420-47da-bd02-1856c05600eb)

In the project, I encounter many new things, like setting the background for my page as well as not only set it but also make the background not move while sliding up and down, like using the .js file for better use, like using the card in a page, and many many things. The tutorial materials helps me a lot to learn those knowledge.
If I have time, i would try to make a web using other tools as well as exploring how to get information from others using a web page rather than just showing the information of myself.

## Respond To Revising

![Image](https://github.com/user-attachments/assets/efd7f21c-45ef-4e4a-9da5-1efe229e111e)

![Image](https://github.com/user-attachments/assets/2650b6a8-d299-4508-ace6-789a96046864)

![Image](https://github.com/user-attachments/assets/b04431ac-0495-4df8-a8a1-221c2380bd77)

After revising time, I add more link to my web like the official website links to each school. Also for the clicking problem, I add more pages and add the .js file to help implement that. I also create more pages to make my web more abundant.
For the difficult to read due to the background, I add a translucent white frame to the content part to separate the content with the background to make my web more readable and more beautiful.
I also change the button part to make them clickable and look much more better.

## Criteria
### Baseline criteria
✅ Use arrangement, size, color, visual rhythm, and/or contrast to focus viewers' attention.
✅ Use the reflection to clarify your compositional choices and goals (e.g. design hierarchy)
✅ Include at least 3 navigable html locations (separate pages or distinct scrolling locations on the same page)
✅ Include a sitewide css stylesheet (i.e. an organized visual theme)
✅ Link internally from all pages (no dead ends)
✅ Include at least one licensed or fair-use image, with alt text
✅ Credit all assets correctly on the site itself (or link to credits in the repo), including Title, Author, Source, and License (TASL)
✅ Successfully load all elements in a web browser, at least locally
✅ Use meaningful commit messages that say what’s changing (or even why)
### Aspirational inspirations
Dynamism:
✅Use responsive design (e.g. @media queries, flex-wrap, auto-fill, etc) to dynamically resize elements based on viewport width
✅Animate HTML elements via CSS or JavaScript (e.g. image carousel,  @keyframes, etc)
✅Swap in/out content via JavaScript (e.g. on-click events / functions)
✅Use  .js file to help construct the web page
Coding:
✅[Validate](https://validator.w3.org/) your HTML
✅Use Flexbox or Grid layouts
✅Use classes shared across multiple elements to minimize repetition in your CSS
✅Use CSS preprocessors (e.g. SASS, LESS) or [custom properties](https://css-tricks.com/a-complete-guide-to-custom-properties/) to minimize repetition in your stylesheets
✅Add comments, whitespace, and other formatting to code to make it more readable
Audience Engagement:
✅Use non-default fonts, drawing on visual unit knowledge
✅Use best practices for accessible design (see [W3's Four Principles](https://www.w3.org/TR/UNDERSTANDING-WCAG20/intro.html#introduction-fourprincs-head) and the [WAVE web accessibility evaluation tool](http://wave.webaim.org/))
✅These include, but are not limited to, using semantic HTML elements like <section> instead of <div>
✅Optimize image filetypes, resolutions, and file sizes for faster loading
✅Load site publicly over the internet with GitHub Pages
Reflection：
✅Refer to specific tutorials or reference materials that helped you in your design
✅Make a clear argument in your reflection as to why you met enough of the aspirational criteria to be stretching the abilities you came in with: e.g. clarify what skills you came in with, and what was new
✅Justify the website's structure for its intended purpose / audience
(For all of the above, clarify your compositional choices and goals (e.g. design hierarchy)
✅Refer to specific tutorials or reference materials that helped you in your design
✅Discuss what you would do if you had more time, and why you didn't have time now
