import css from './Main.module.css';
import getADate from './../../utils/getDate';

const Main = ({ weather }) => {
  return (
    <div className={css.main}>
      <div className={css['location-box']}>
        <div className={css.location}>
          {weather.name}, {weather.sys.country}
        </div>
        <div className={css.date}>{getADate(new Date())}</div>
      </div>
      <div className={css['weather-box']}>
        <div className={css.temp}>{Math.round(weather.main.temp)}°C</div>
        <div className={css.weather}>{weather.weather[0].description}</div>
        <img
          src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
          alt=""
        />
      </div>
    </div>
  );
};

export default Main;
