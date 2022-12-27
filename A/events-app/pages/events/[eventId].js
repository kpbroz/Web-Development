import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventConten from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventItem from "../../components/event-detail/logistics-item";

function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>Not event found for this ID!</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.address}
        imageAlt={event.title}
      />
      <EventConten>{event.description}</EventConten>
    </Fragment>
  );
}

export default EventDetailPage;
