function myFunction() {
  const event = CalendarApp.getDefaultCalendar().getEventsForDay(new Date(2020, 1, 28))[0];
  
//  Logger.log(event.getTitle());
//  Logger.log(event.getDescription());
//  Logger.log(event.getLocation());
//  Logger.log(event.getDateCreated());
//  Logger.log(event.getStartTime());
//  Logger.log(event.getEndTime());
//  Logger.log(event.getGuestList());
//  Logger.log(event.getGuestList()[0].getEmail());
  Logger.log(event.getGuestList()[0].getGuestStatus());
}
