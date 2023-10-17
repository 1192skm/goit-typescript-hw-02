/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DayWeek {
  Monday = "Workday",
  Tuesday = "Workday",
  Wednesday = "Workday",
  Thursday = "Workday",
  Friday = "Workday",
  Saturday = "Weekend",
  Sunday = "Weekend",
}

function isWeekend(day: DayWeek) {
    return day === "Weekend";
}