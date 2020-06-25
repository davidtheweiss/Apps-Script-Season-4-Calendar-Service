function myFunction() {
  //CalendarApp.getCalendarById('davidtheweiss7@gmail.com').getEventById(id);
  
  const id = CalendarApp.getDefaultCalendar().getEventsForDay(new Date())[0].getId();
  const id_2 = Utilities.newBlob(Utilities.base64Decode('NXRyZ2c1YmowYjJiMm42ZDZpY2Nwb2k1aGcgZGF2aWR0aGV3ZWlzczdAbQ')).getDataAsString().split(" ")[0];
  
  Logger.log(id);
  Logger.log(id_2);
  
  Logger.log(CalendarApp.getCalendarById('davidtheweiss7@gmail.com').getEventById(id_2).getTitle());
}
