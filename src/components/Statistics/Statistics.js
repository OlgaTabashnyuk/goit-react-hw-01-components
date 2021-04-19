import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import styles from "../Statistics/Statistics.module.css"

function getRandomColor() 
{
    var r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}


const Statistics = ({title, stats}) => {
    return <section className={styles.statistics}>
  <h2 className={styles.title}>{title = true ? title : ""}</h2>

  <ul className={styles.list}>
     {stats.map(({id, label, percentage}) => {
         return <li key={id} className={styles.item} style={{backgroundColor: getRandomColor()}}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
     })}  
  </ul>
</section>

}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        label:  PropTypes.string.isRequired,
        percentage:  PropTypes.number.isRequired, 
       })
   ).isRequired,
}
export default Statistics;

