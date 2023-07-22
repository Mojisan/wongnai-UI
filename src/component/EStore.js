import './EStore.css';

function EStore() {
    return(
        <div className='end-box-store'>
            <div className='end-text-store'>
                <img src='https://seeklogo.com/images/L/line-man-icon-logo-ABF26BA94B-seeklogo.com.png' alt='lineman' className='image-end-store'/>
                <p className='h3-end-store'>เดลิเวอรี</p>
                <p className='p-end-store'>ค่าส่งเริ่มต้น 0 บาท *ภายในระยะทางที่กำหนด</p>
            </div>
            <div className='end-button-store'>
                <button className='button-store'>สั่ง</button>
            </div>
        </div>
    );
}

export default EStore;