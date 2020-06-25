function myFunction() {
  
  const cal = CalendarApp.getDefaultCalendar();
  
//  cal.createEvent("My awesome Party!", new Date(2020, 1, 28, 15), new Date(2020, 1, 28, 16), {
//    location: 'At my house',
//    guests: 'weissdav@sas.upenn.edu, davidtheweiss7@gmail.com'
//  });
  
//  cal.createAllDayEvent("My Birthday", new Date());
  
//  cal.createEventFromDescription('Lunch with buddies Saturday from 3pm to 4pm');
  
  cal.createEvent("My awesome Party!", new Date(2020, 1, 28, 15), new Date(2020, 1, 28, 16))
  .addGuest('weissdav@sas.upenn.edu')
  .addGuest('davidtheweiss7@gmail.com')
  .setMyStatus(CalendarApp.GuestStatus.YES)
  .setLocation('At my house')
  .setDescription('Please bring presents!')
  .setColor(CalendarApp.EventColor.MAUVE);
}




/*
description	  String	 the description of the event
location	  String	 the location of the event
guests	      String	 a comma-separated list of email addresses that should be added as guests
sendInvites	  Boolean	 whether to send invitation emails (default: false)
*/
