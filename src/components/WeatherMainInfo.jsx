export const WeatherMainInfo = ({ clima }) => {
  return (
    <div>
      <div>{clima?.location.name}</div>
      <div>{clima?.location.country}</div>
      <div>
        <div>
          <img
            src={`http:${clima?.current.condition.icon}`}
            width="128"
            alt={clima?.current.condition.text}
          />
        </div>
        <div>
          <div>{clima?.current.condition.text}</div>
          <div>{clima?.current.temp_c}</div>
        </div>
      </div>
      <iframe
        title="mapa"
        src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d28977.54539107969!2d${clima?.location.lon}39!3d${clima?.location.lat}8!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1674166362617!5m2!1ses!2sar`}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
