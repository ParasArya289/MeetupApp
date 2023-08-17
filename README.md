# Meetup App

## Key Features

### Event Listings

- Create an event listing page displaying key details prominently:
  - Event title
  - Date
  - Type of event (Online/Offline)
  - Thumbnail or image related to the event for visual context
- Use consistent layout and design for a cohesive and user-friendly experience.

### Event Search and Filtering

- Dropdown for Type of Event: Online/Offline/Both (Both as default view).
- Search box for searching by event title and tags.

### Meetup Listing Page

#### Event Details and Descriptions

- Create individual event pages with comprehensive information:
  - Detailed event description highlighting key features
  - Event topic and description, including session timings and speakers/presenters
  - Pricing details if the event is paid
  - Event venue details and address
  - Additional attendee information: dress code, age restrictions, etc.
  - Display event tags.

### RSVP

- Implement an RSVP feature for users to indicate their intention to attend an event.
- On clicking the RSVP button:
  - For a free event, open a modal with input fields for name and email, and an RSVP button.
  - For a paid event, open a modal with input fields for name and email, an RSVP button, and a note indicating payment at the venue.
- Allow users to view their RSVP status by changing the button text to "Already RSVPed".
- If the event time has passed, do not display the RSVP button.
