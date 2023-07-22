import './Navbar.css'

function Navbar() {
    return(
        <navbar>
            <div className='navbar-container'>
                <div className='logo-search'>
                    <img src='https://static2.wongnai.com/static2/images/HTZaHLM.png' alt='logoWongnai' className='logo'/>
                    <div className='place-search searchBar'>
                        <i class="bi bi-geo-alt-fill"></i>
                        <input type='text' className='inputText input-place' placeholder='พิมพ์สถานที่ ...'/>
                        <i class="bi bi-caret-down-fill"></i>
                        <div className='dropdown-place'></div>
                    </div>
                    <div className='name-button-search'>
                        <div className='name-search'>
                            <input type='text' className='inputText input-name' placeholder='ร้านอาหาร โรงแรม ที่เที่ยว สปา ...'/>
                        </div>
                        <button className='button-search'><i class="bi bi-search"></i></button>
                        <div className='dropdown-search'></div>
                    </div>
                </div>
                <div className='user-option'>
                    <div className='user-login'>
                        <div className='user-icon'><i class="bi bi-person-circle"></i></div>
                        <h3 className='login-text'>เข้าสู่ระบบ</h3>
                    </div>
                    <button className='dropdown-icon-user'>
                        <i class="bi bi-chevron-down"></i>
                    </button>
                </div>
            </div>
            <div className='line-navbar'></div>
        </navbar>
    );
}

export default Navbar;