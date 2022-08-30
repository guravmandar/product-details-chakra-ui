import "./App.css";
import SplitWithImage from "./components/SplitWithImage.js";
import products from "./components/products";
import SimpleNav from "./components/SimpleNav";

function App() {

    return (
        <div>
            <SimpleNav category={products[0].category} subCategory={products[0].subcat}/>
            {products.map((product) => (
                <SplitWithImage key={product._id} product={product}/>
            ))}
        </div>
    );
}

export default App;