import articleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem';

const ArticleList = ({articles}) => {
    return (
        <div className={articleStyles.grid}>
            {articles.map((article, index) => (
                <ArticleItem article={article} index={index+1}/>
            ))}
        </div>
    )
}

export default ArticleList