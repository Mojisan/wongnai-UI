import './Gallery.css'

function Gallery() {
    return(
        <div className='gallery-container'>
            <div>
                <button className='button-gallery'>
                    <i class="bi bi-chevron-left"></i>
                </button>
            </div>
            <div className='gallery-mix'>
                <div className='image-text-gallery'>
                    <div className='image-gallery'>
                        <span className='text-gallery'>ร้านใหม่ และ แนะนำ</span>
                    </div>
                </div>
                <div className='image-text-gallery'>
                    <div className='image-gallery'>
                        <span className='text-gallery'>ร้านใหม่ และ แนะนำ</span>
                    </div>
                </div>
                <div className='image-text-gallery'>
                    <div className='image-gallery'>
                        <span className='text-gallery'>ร้านใหม่ และ แนะนำ</span>
                    </div>
                </div>
                <div className='image-text-gallery'>
                    <div className='image-gallery'>
                        <span className='text-gallery'>ร้านใหม่ และ แนะนำ</span>
                    </div>
                </div>
                <div className='image-text-gallery'>
                    <div className='image-gallery'>
                        <span className='text-gallery'>ร้านใหม่ และ แนะนำ</span>
                    </div>
                </div>
                <div className='image-text-gallery'>
                    <div className='image-gallery'>
                        <span className='text-gallery'>ร้านใหม่ และ แนะนำ</span>
                    </div>
                </div>
            </div>
            <div>
                <button className='button-gallery'>
                    <i class="bi bi-chevron-right"></i>
                </button>
            </div>
        </div>
    );
}

export default Gallery;