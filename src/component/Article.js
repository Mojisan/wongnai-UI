import './Article.css'
import SubArticle from './SubArticle';

function Article() {
    return(
        <div className='article-suggest'>
            <div className='topic-all-article'>
                <h3 className='topic-article'>บทความแนะนำ</h3>
                <p className='all-article'>ดูทั้งหมด</p>
            </div>
            <div className='sub-article-container'>
                <SubArticle/>
                <SubArticle/>
                <SubArticle/>
                <SubArticle/>
            </div>
        </div>
    );
}

export default Article;