function myFunction() {
//  CalendarApp.createCalendar("My Tech Team", {
//    summary: 'Used for my tecchnology team',
//    color: CalendarApp.Color.LIME
//  });
  Logger.log(CalendarApp.getAllCalendars());
  Logger.log(CalendarApp.getCalendarById('en.usa#holiday@group.v.calendar.google.com'));
  Logger.log(CalendarApp.getCalendarsByName('My Tech Team'));
}
