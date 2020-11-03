import React, { useEffect } from "react";
import moment from "moment";
// Наш хук
export default function useScheduleCalc(dateFrom, dateTo, total, delay) {
  // Состояние и сеттер для отложенного значения
  const [scheduleCalcValue, setScheduleCalcValue] = React.useState([]);

  useEffect(
    () => {
      // Выставить debouncedValue равным value (переданное значение)
      // после заданной задержки
      const handler = setTimeout(() => {
        let diffDc = dateTo.diff(dateFrom, "month", true).toFixed(0);

        let testData = [];

        if (total !== 0) {
          for (let i = 0; i < diffDc; i++) {
            testData.push({
              id: i + 1,
              date: moment(dateFrom)
                .add(i + 1, "month")
                .format("DD.MM.YYYY"),
              sum: (total / diffDc).toFixed(0),
            });
          }
        }
        setScheduleCalcValue(testData);
      }, delay);

      // Вернуть функцию очистки, которая будет вызываться каждый раз, когда ...
      // ... useEffect вызван снова. useEffect будет вызван снова, только если ...
      // ... value будет изменено (смотри ниже массив зависимостей).
      // Так мы избегаем изменений debouncedValue, если значение value ...
      // ... поменялось в рамках интервала задержки.
      // Таймаут очищается и стартует снова.
      // Что бы сложить это воедино: если пользователь печатает что-то внутри ...
      // ... нашего приложения в поле поиска, мы не хотим, чтобы debouncedValue...
      // ... не менялось до тех пор, пока он не прекратит печатать дольше, чем 500ms.
      return () => {
        clearTimeout(handler);
      };
    },
    // Вызывается снова, только если значение изменится
    // мы так же можем добавить переменную "delay" в массива зависимостей ...
    // ... если вы собираетесь менять ее динамически.
    [dateFrom, dateTo, total, delay]
  );

  return scheduleCalcValue;
}
