import React from "react"
import BodyText from "./BodyText"

const articles = [
  {
    titrePrinc: "Champagne Patrick Regaunlt",
    titre: "un peu d'histoire",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.",
    pictureLeft:"image/raisin vert.png",
    altLeft: "raisin vert",
    pictureRight:"image/raisin noir.jpg",
    altRight:"raisn noir"
  },
    {
    titre: "le vin",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.",
    pictureLeft:"image/raisin vert.png",
    altLeft: "raisin vert",
    pictureRight:"image/raisin noir.jpg",
    altRight:"raisn noir"
  },  {
    titre: "le champagne",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.",
    pictureLeft:"image/raisin vert.png",
    altLeft: "raisin vert",
    pictureRight:"image/raisin noir.jpg",
    altRight:"raisn noir"
  }
]
const ListArticle = () => 
  <div>    
    {articles.map(article => <BodyText {...article} />)}
  </div>

export default ListArticle