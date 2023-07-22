import './Stores.css';
import GStore from './GStore';
import TStore from './TStore';
import EStore from './EStore';

function Stores() {
    return(
        <div className='stores-container'>
            <div className='store-box'>
                <GStore/>
                <TStore/>
                <EStore/>
            </div>
            <div className='store-box'>
                <GStore/>
                <TStore/>
                <EStore/>
            </div>
            <div className='store-box'>
                <GStore/>
                <TStore/>
                <EStore/>
            </div>
            <div className='store-box'>
                <GStore/>
                <TStore/>
                <EStore/>
            </div>
            <div className='store-box'>
                <GStore/>
                <TStore/>
                <EStore/>
            </div>
            <div className='forward-reverse'>
                <p className='p-fv'>&lt;ย้อนกลับ</p>
                <p className='p-fv'>ถัดไป&gt;</p>
            </div>
            <div className='add-store'>
                <i class="bi bi-plus"></i>
                <div className='text-add-store'>
                    <h3 className='h3-add-store'>หาสถานที่ที่ต้องการไม่เจอหรอครับ</h3>
                    <p className='p-add-store'>เพิ่มสถานที่ใหม่ Wongnai</p>
                </div>
            </div>
        </div>
    );
}

export default Stores;