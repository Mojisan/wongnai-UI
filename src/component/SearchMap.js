import './SearchMap.css'

function SearchMap() {
    return(
        <div className='map-suggest'>
            <h3 className='topic-map-suggest'>ค้นหาจากแผนที่</h3>
            <div className='image-map-suggest'>
                <button className='button-map-suggest'>
                    <i class="bi bi-geo-alt-fill"></i>
                    <p className='p-map-suggest'>ดูแผนที่</p>
                </button>
            </div>
        </div>
    );
}

export default SearchMap;