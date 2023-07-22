import './Suggest.css';
import SearchMap from './SearchMap';
import PlaceSuggest from './PlaceSuggest';
import Article from './Article';
import MixLists from './MixLists';

function Suggest() {
    return(
        <div className='suggest-container'>
            <SearchMap/>
            <PlaceSuggest/>
            <Article/>
            <MixLists/>
        </div>
    );
}

export default Suggest;