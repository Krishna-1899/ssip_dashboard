import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='mt-[140px] flex items-end gap-3 max-w-[1280px] mx-auto'>
        <h1 className='font-bold text-3xl'>Mehesana</h1>
        <h2 className='font-[400] '>(Gujarat)</h2>
      </div>
    </div>
  );
}

export default App;
