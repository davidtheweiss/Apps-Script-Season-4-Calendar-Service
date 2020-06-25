function myFunction() {
  
  const cal = CalendarApp.getDefaultCalendar();
//  const recurrence = CalendarApp.newRecurrence()
//  .addWeeklyRule()
//  .onlyOnWeekday(CalendarApp.Weekday.SUNDAY)
//  .interval(2)
//  .until(new Date(2020, 5, 1));
//  
//  cal.createEventSeries("Lunch with friends", new Date(2020, 2, 1, 12), new Date(2020, 2, 1, 13), recurrence);
  
  cal.getEventsForDay(new Date(2020, 2, 1, 12))[0].getEventSeries().setTitle("Party!");
}
