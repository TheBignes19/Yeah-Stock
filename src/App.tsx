import { MagnifyingGlass, PencilSimple, Plus, Trash,} from "@phosphor-icons/react";
import axios from "axios";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Tab } from "./components/Tab";
import { useEffect, useState } from "react";
import { TabView } from "./components/TabView";
import { TypeView } from "./components/TabView";
import { ProductCard } from "./components/ProductCard";
import { Modal } from "./components/Modal";
import { TextArea } from "./components/TextArea";
import { Product } from "./models/products";

const tabs = [
  {id:"1", title: "All"},
  {id:"2", title: "Active"},
  {id:"3", title: "Completed"},
];

function App() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [view, setView] = useState<TypeView>(TypeView.COLUMN);
  const [openModal, setOpenModal] = useState(false)
  const [products, setProducts] = useState<Product[]>([]);

useEffect ( ()=> {
  getProduct()
}, [])

  async function getProduct(){
    try {
      const response = await axios.get('http://localhost:3333/products')

      setProducts(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="pr-10">
      <header className="flex items-center gap-2 justify-between mt-10">
        <div className="w-40 md:max-w-96 md:w-full">
          <Input
          placeholder="Search for a product" 
          starIcon={MagnifyingGlass}/>
        </div>
        <div className="flex items-center gap-5">
          <Button starIcon={Plus}>Add Product</Button>

          <img src="https://avatars.githubusercontent.com/u/142906324?s=400&u=19211c90ff8a6da794f830428cb4d874041a9b6b&v=4" 
          alt="avatar" 
          className="h-14 w-14 rounded-full hidden lg:block"
          />
        </div>
      </header>

      <main className="mt-10">
        <h1 className="text-white text-2xl font-semibold">Home</h1>
      

      <div className="mt-10">
        <div className="flex justify-between items-center">
          <Tab tabs={tabs} activeId={activeTab} onChange={setActiveTab} />

          <TabView view={view} onChange={setView}/>

        </div>

        <div 
        data-view = {view}
        className="grid data-[view=column]:md:grid-cols-3 data-[view=column]:lg:grid-cols-4 gap-6 mt-10">
          {products.map((product) => (
            <ProductCard 
            product={product}
            key={product.id}
            typeView={view} 
            onOpenModal={() => setOpenModal(true)}/>
          ))}
        </div>
      </div>
      </main>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div className="pl-5 pr-10">
          <h2 className="text-white text-2xl"> Product Details</h2>

          <div className="mt-10 flex flex-col gap-1">
            <p className="text-white text-sm">
              <span className="text-gray-primary text-sm">Name:</span> Product's name
            </p>
            <p className="text-white text-sm">
              <span className="text-gray-primary text-sm">Quantity:</span> 106
            </p>
            <p className="text-white text-sm">
              <span className="text-gray-primary text-sm">Measure unity::</span> 106
            </p>
            <p className="text-white text-sm">
              <span className="text-gray-primary text-sm">Purchase price:</span> 535
            </p>
            <p className="text-white text-sm">
              <span className="text-gray-primary text-sm">Sale Price:</span> 512
            </p>
            <p className="text-white text-sm">
              <span className="text-gray-primary text-sm">Currency: :</span> Unity
            </p>
            <p className="text-white text-sm">
              <span className="text-gray-primary text-sm">Fornecedor: :</span> TheBignes
            </p>
            <p className="text-white text-sm">
              <span className="text-gray-primary text-sm">Active: :</span> Yes or No
            </p>
          </div>

          <div className="w-full h-36 bg-[#4A4A4A] rounded-lg flex items-center justify-center mt-3">
            <img src="/image.svg" alt="card" />
          </div>

          <div className="mt-3">
            <TextArea label="Description"/>
          </div>
          
          <div className="mt-10 space-y-4 flex flex-col items-center">
            <Button starIcon={PencilSimple} >Edit</Button>
            <Button starIcon={Trash} variant="error">Trash</Button>
          </div>
        </div>
        </Modal>
    </div>
  );
}

export default App
