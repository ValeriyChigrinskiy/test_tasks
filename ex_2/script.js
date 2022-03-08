function getDayInfo(dateString){
    const weekDayNames = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
    ];
    const MonthNames = [
        "Января",
        "Февраля",
        "Марта",
        "Апреля",
        "Мая",
        "Июня",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декабря",
    ];
    try{
        var dateSplitted = dateString.split(".");
        var date = new Date(parseInt(dateSplitted[2]),parseInt(dateSplitted[1]) - 1,parseInt(dateSplitted[0]));
        var yearJanFirst = new Date(date.getFullYear(),date.getMonth(),1);
        var daysCount = Math.floor((date - yearJanFirst) / (24 * 60 * 60 * 1000));
        var week = Math.ceil(( date.getDay() + 1 + daysCount) / 7);
        var day = weekDayNames[date.getDay()];
        var month = MonthNames[date.getMonth()];
        var year = date.getFullYear();

        if(day == undefined)
        return "Неверный формат даты";

        return `${day}, ${week} неделя ${month} ${year} года`;
    }catch{
        return "Неверный формат даты";
    }
}