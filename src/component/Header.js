import './Header.css';

function Header() {
    return(
        <header>
            <div className='header-container'>
                <div className='page-text'>
                    <p className='first-page'>หน้าแรก / ร้านอาหาร /</p><p className='now-page'>ค้นหาร้านอาหาร</p>
                </div>
                <div className='header-text'>
                    <h1>ร้านอาหาร ยอดนิยม</h1>
                </div>
            </div>
        </header>
    );
}

export default Header;