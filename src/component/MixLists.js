import Lists from './Lists';
import './MixLists.css'

function MixLists() {
    return(
        <div className='lists-suggest'>
            <div className='topic-all-lists'>
                <h3 className='topic-lists'>รวมลิสต์แนะนำที่คุณต้อง...</h3>
                <p className='all-lists'>ดูทั้งหมด</p>
            </div>
            <div className='sub-lists-container'>
                <Lists/>
                <Lists/>
                <Lists/>
            </div>
        </div>
    );
}

export default MixLists;