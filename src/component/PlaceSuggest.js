import './PlaceSuggest.css'

function PlaceSuggest() {
    return(
        <div className='place-suggest'>
            <h3 className='topic-place-suggest'>ร้านอาหารที่น่าสนใจ</h3>
            <div className='image-text-place-suggest'>
                <img src='https://img.wongnai.com/p/64x64/2022/08/21/10dffb64ef23446688f6b9f6ef85bb32.jpg' alt='food' className='image-place-suggest'/>
                <div className='text-place-suggest'>
                    <div className='headtext-place-suggest'>
                        <p className='ad-text-place-suggest'>Ad -</p>
                        <p className='title-text-place-suggest'> ตำ ยำ ย่าง แซ่บนัว</p>
                    </div>
                    <div className='status-place-suggest'>
                        <p className='text-place-suggest'>฿ </p>
                        <p className='sta-text-place-suggest'>ปิดอยู่</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlaceSuggest;