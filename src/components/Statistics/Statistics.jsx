import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { randomBgColor } from 'utils/randomBgColor';

export const Statistics = ({ stats, title }) => {
  return (
    <section class={css.statistics}>
      <h2 class={css.title}>{
        title && <h2 className={css.title}>{title}</h2>
      }</h2>

      <ul className={css.statList}>
        {stats.map(({id,label,percentage}) =>(
            <li className={css.item}
            key={id}
            style={{backgroundColor: randomBgColor()}}
            >
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage} %</span>
            </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  title: PropTypes.string,
};
