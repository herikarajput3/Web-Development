import logo from './logo.svg';
import './App.css';
import Card from './Component/Card'

function App() {
  return (
    <>
      <div className="container">
        <div className='row mt-5'>
          <Card imgsrc={'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg'}></Card>
          <Card imgsrc={'https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg'}></Card>
          <Card imgsrc={'https://image-processor-storage.s3.us-west-2.amazonaws.com/images/866759932dc5358cee86f6552d1250f2/inside-bubble-spheres.jpg'}></Card>
          {/* <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card> */}

        </div>
      </div>
    </>
  );
}

export default App;
