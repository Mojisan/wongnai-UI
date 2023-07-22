import './Main.css';
import Filter from './Filter';
import Gallery from './Gallery';
import Stores from './Stores';
import Suggest from './Suggest';

function Main() {
    return(
        <main>
            <div className='main-container'>
                <div className='filter-navbar box'>
                    <Filter/>
                </div>
                <div className='gallery-section box'>
                    <Gallery/>
                </div>
                <div className='store-section box'>
                    <Stores/>
                </div>
                <div className='suggest-section box'>
                    <Suggest/>
                </div>
            </div>
        </main>
    );
}

export default Main;