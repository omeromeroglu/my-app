
import './App.css';
import Card from './Components/card';
import Collapse from './Components/Collapse';


const App = () => {
  return (
    <div className="container">

      <div className="row" >
        <div className="card-group w-100">
          <div className="col" >
            <Collapse href="Card1href">
              <Card cardTitle='Title 1'
                cardText="Lorem Text 1"
                updatedTime="Last updated 2 min ago "
                image="https://picsum.photos/id/100/500/500" />
            </Collapse>
          </div>


          <div className="col" >


            <Collapse href="Card2href">
              <Card cardTitle='Title 2'
                cardText="Lorem Text 1"
                updatedTime="Last updated 2 min ago "
                image="https://picsum.photos/id/1001/500/500"
              />
            </Collapse>
          </div>
          <div className="col" >

            <Collapse href="Card3href">
              <Card cardTitle='Title 3'
                cardText="Lorem Text 1"
                updatedTime="Last updated 2 min ago "
                image="https://picsum.photos/id/1004/500/500" />
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
