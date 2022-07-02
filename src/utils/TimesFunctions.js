

export const differenceInDays = (date1,date2) => 
{


    var Difference_In_Time = date2.getTime() - date1.getTime();
  
    // To calculate the no. of days between two dates
    return Difference_In_Time / (1000 * 3600 * 24);
}