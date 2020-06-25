function myFunction() {
//  Logger.log(CalendarApp.getAllCalendars().filter(cal => cal.isOwnedByMe()).map(cal => cal.getName()));
//  Logger.log(CalendarApp.getAllOwnedCalendars().map(cal => cal.getName()));
  Logger.log(CalendarApp.getOwnedCalendarById('davidtheweiss7@gmail.com'));
  Logger.log(CalendarApp.getOwnedCalendarsByName('David Weiss'));
}
