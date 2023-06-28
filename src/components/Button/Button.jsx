import css from './Button.module.css';

const LoadMore = ({onClick}) => {
    return (
        <button className={css.LoadMoreBtn} onClick={onClick}>Load more...</button>
    );

}
 
export default LoadMore;