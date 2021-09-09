import harvestTable from '../../images/HarvestTableLayout.png'
import keepBox from '../../images/KeepboxLayout.png'
import flag from '../../images/RepLayout.png'
import cvp from '../../images/CVP.png'

export default [
    {
        name: "Conviction Vacation Project",
        url: "https://convictionvacation.org/",
        github: "https://github.com/openseattle/cvp",
        img: {cvp},
        skills: ["JS", " JSX", "React", "HTML", "CSS"],
        summary: "The Conviction Vacation Project's misson is to create software that simplifies some of the steps people go through when asking a court to vacate their convictions. We will be creating and releasing the software bit by bit, making sure earlier features work before stacking on additional features."
    },
    {
        name: "Harvest Table",
        url: "https://harvest-table.vercel.app/",
        github: "https://github.com/LaraDei/harvest-table",
        img: {harvestTable},
        skills: ["JS", "React", "Node", "HTML", "CSS", "SQL", "JWT", "AJAX", "AWS"],
        summary: "Harvest Table is a responsive app designed to help reduce local food waste. In Los Angeles, it is common to see citrus trees covered with uneaten fruit. Harvest Table allows users to post their surplus produce to share with neighbors. It uses Google Maps, Places, and Geocoding as well as AWS."
    },
    {
        name: "Keepbox",
        url: "https://keepbox.vercel.app/",
        github: "https://github.com/LaraDei/keepbox",
        img: {keepBox},
        skills: ["JS", "React", "Node", "HTML", "CSS", "SQL", "JWT", "AJAX"],
        summary: "Keepbox is a responsive app that helps you keep track of your child's artistic and creative milestones. After the user creates an account, they can create albums and upload photos of their children's art. It is a full-stack app created with React, Node, and SQL."
    },
    {
        name: "Representative Finder",
        url: "https://laradei.github.io/representatives-app/",
        github: "https://github.com/LaraDei/representatives-app",
        img: {flag},
        skills: ["JS", "jQuery", "HTML", "CSS", "AJAX"],
        summary: "This app accepts your address and returns your U.S. representatives at the local, state, and federal level. It uses several endpoints from the Vote Smart API to gather the data as completely as possible."
    }
]
