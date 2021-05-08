import harvestTable from '../../images/harvestTable.png'
import keepBox from '../../images/keepbox.jpg'
import flag from '../../images/flag.jpg'
import garden from '../../images/garden.png'

export default [
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
