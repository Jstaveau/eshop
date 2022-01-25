import Produit from "./Components/Produit/Produit";
import Panier from "./Components/Panier/Panier";
import React, {useState} from "react";
import imgcoca from './img/coca.png'
import imgfanta from './img/fanta.jpg'
import imgicetea from './img/ice-tea.jpg'

function App() {
  const [argent, setArgent] = useState(20);

  const [articles, setArticles] = useState([
    {nom: 'Coca Cola', prix: 1, stock: 5, img:imgcoca},
    {nom: 'Fanta', prix: 1.5, stock: 5, img:imgfanta},
    {nom: 'Ice Tea', prix: 2, stock: 5, img:imgicetea}]
  );

  const [panier, setPanier] = useState([]);

  const ajoutPanier = (article) => {
    setArgent(argent - article.prix)
    article.stock -= 1
    const newPanier = [...panier]
    if (newPanier.includes(article)) {
      article.quantite += 1 
    } else {
      article.quantite = 1
      newPanier.push(article)
    }
    setPanier(newPanier)
  }

  const rendreArticle = (article) => {
    setArgent(argent + article.prix)
    article.stock += 1
    const newPanier = [...panier]
    if (article.quantite == 1) {
      newPanier.splice(newPanier.indexOf(article), 1)
    } else {
      article.quantite -= 1
    }
    setPanier(newPanier)
  } 

  return (
    <div>
      <h1 className="titre-argent">Mon argent : {argent}€</h1>
      <div className="container-produits">
        {articles.map((item, index) => {
          return <Produit
          ajoutPanier={() => ajoutPanier(item)}
          argent={argent}
          stock={item.stock}
          img={item.img}
          prix={item.prix}
          nom={item.nom}/>
        })}
      </div>
      <div className='panier-container'>
        <h1>Mon panier : </h1>
        {panier.map((item, index) => {
          return <Panier
          rendreArticle={() => rendreArticle(item)} 
          nom={item.nom}
          quantite={item.quantite}
          />
        })}
      </div>;
    </div>
  );
}

export default App;
