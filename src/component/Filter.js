import './Filter.css'

function Filter() {
    return(
        <div className='place-filter'>
            <form className='filter-form'>
                <label className='filter-text'>
                    <input type='radio' name='place' className='radio-filter'/> ร้านอาหาร
                </label>
                <label className='filter-text'>
                    <input type='radio' name='place' className='radio-filter'/> ร้านเสริมสวย และ สปา
                </label>
                <label className='filter-text'>
                    <input type='radio' name='place' className='radio-filter'/> ที่พัก
                </label>
                <label className='filter-text'>
                    <input type='radio' name='place' className='radio-filter'/> สถานที่ท่องเที่ยว
                </label>
            </form>
            <div className='line1-filter'></div>
            <form className='filter-form'>
                <h3 className='topic-filter'>เรตติ้ง</h3>
                <label className='filter-text'>
                    <input type='radio' name='rating' className='radio-filter'/> 3.5+
                </label>
                <label className='filter-text'>
                    <input type='radio' name='rating' className='radio-filter'/> 4.0+
                </label>
            </form>
            <div className='line1-filter'></div>
            <form className='filter-form'>
                <h3 className='topic-filter'>ค้นหาตามระยะห่างจาก</h3>
                <input type='text' className='inputPlace-filter' placeholder='เช่น วัดพระเจ้า'/>
                <select className='selectPlace-filter'>
                    <option className='optionPlace-filter'>500 ม.</option>
                    <option className='optionPlace-filter'>1 กม.</option>
                    <option className='optionPlace-filter'>3 กม.</option>
                    <option className='optionPlace-filter'>5 กม.</option>
                    <option className='optionPlace-filter'>10 กม.</option>
                    <option className='optionPlace-filter'>25 กม.</option>
                    <option className='optionPlace-filter'>50 กม.</option>
                </select>
            </form>
            <div className='line1-filter'></div>
            <form className='filter-form'>
                <h3 className='topic-filter'>ประเภทอาหาร</h3>
                <label className='filter-text'>
                    <input type='checkbox' name='typeFood' className='checkbox-filter'/> อาหารตามสั่ง
                </label>
                <label className='filter-text'>
                    <input type='checkbox' name='typeFood' className='checkbox-filter'/> อาหารจานเดียว
                </label>
                <label className='filter-text'>
                    <input type='checkbox' name='typeFood' className='checkbox-filter'/> ก๋วยเตี๋ยว
                </label>
                <p className='more-typeFood-filter'>ดูเพิ่มเติม (18 ประเภท)</p>
            </form>
            <div className='line1-filter'></div>
            <form className='filter-form'>
                <h3 className='topic-filter'>ส่วนลด</h3>
                <label className='filter-text'>
                    <input type='checkbox' name='customer' className='checkbox-filter'/> Wongnai
                </label>
                <label className='filter-text'>
                    <input type='checkbox' name='customer' className='checkbox-filter'/> ลูกค้าเซเรเนด
                </label>
                <label className='filter-text'>
                    <input type='checkbox' name='customer' className='checkbox-filter'/> UOB
                </label>
                <label className='filter-text'>
                    <input type='checkbox' name='customer' className='checkbox-filter'/> GSB
                </label>
                <label className='filter-text'>
                    <input type='checkbox' name='customer' className='checkbox-filter'/> ลูกค้าเอไอเอส
                </label>
                <label className='filter-text'>
                    <input type='checkbox' name='customer' className='checkbox-filter'/> Shell ClubSmart
                </label>
            </form>
            <div className='line1-filter'></div>
            <form className='filter-form'>
                <h3 className='topic-filter'>ราคา</h3>
                <label className='filter-text'>
                    <input type='checkbox' name='price' className='checkbox-filter'/> ฿ ถูกกว่า 100
                </label>
                <label className='filter-text'>
                    <input type='checkbox' name='price' className='checkbox-filter'/> ฿ 100 - 250
                </label>
                <label className='filter-text'>
                    <input type='checkbox' name='price' className='checkbox-filter'/> ฿ 251 - 500
                </label>
                <label className='filter-text'>
                    <input type='checkbox' name='price' className='checkbox-filter'/> ฿ 500+
                </label>
                <label className='filter-text'>
                    <input type='checkbox' name='price' className='checkbox-filter'/> ฿ 1000+
                </label>
            </form>
            <div className='line1-filter'></div>
            <form className='filter-form'>
                <label className='filter-text'>
                    <input type='checkbox' name='promotion' className='checkbox-filter'/> ดีลสุดคุ้ม
                </label>
                <label className='filter-text'>
                    <input type='checkbox' name='promotion' className='checkbox-filter'/> เดลิเวอรี
                </label>
                <label className='filter-text'>
                    <input type='checkbox' name='promotion' className='checkbox-filter'/> เปิดตอนนี้
                </label>
                <label className='filter-text'>
                    <input type='checkbox' name='promotion' className='checkbox-filter'/> ร้านเปิดใหม่
                </label>
                <label className='filter-text'>
                    <input type='checkbox' name='promotion' className='checkbox-filter'/> ที่จอดรถ
                </label>
                <p className='more-typeFood-filter'>ดูเพิ่มเติม</p>
            </form>
        </div>
    );
}

export default Filter;