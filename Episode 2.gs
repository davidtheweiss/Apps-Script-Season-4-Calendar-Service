function myFunction() {
  
  const cal = CalendarApp.getDefaultCalendar();
  const today = new Date(2020, 1, 26, 0, 0, 0);
  const tomorrow = new Date(2020, 1, 27, 0, 0, 0);  
  
//  Logger.log(cal.getEvents(today, tomorrow, {
//    //author: 'weissdav@sas.upenn.edu'
//    statusFilters: [CalendarApp.GuestStatus.INVITED]
//  })[0].getTitle());
  
  Logger.log(cal.getEventsForDay(new Date()));
}
