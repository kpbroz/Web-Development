import EventItem from "./event-item";
import classes from "./event-item.module.css";

function EventList(props) {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <EventItem
          key={item.key}
          id={item.id}
          title={item.title}
          location={item.location}
          image={item.image}
          date={item.date}
        />
      ))}
    </ul>
  );
}

export default EventList;
