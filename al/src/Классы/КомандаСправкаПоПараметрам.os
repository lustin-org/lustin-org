//////////////////////////////////////////////////////////////////////////////
//
// Служебный модуль с реализацией работы команды help
//
///////////////////////////////////////////////////////////////////////////////

Процедура НастроитьКоманду(Знач Команда, Знач Парсер) Экспорт

	Парсер.ДобавитьПозиционныйПараметрКоманды(Команда, "Команда", "Имя команды");
	
КонецПроцедуры // НастроитьКоманду

// Выполняет логику команды
// 
// Параметры:
//   ПараметрыКоманды - Соответствие - Соответствие ключей командной строки и их значений
//   Приложение - Модуль - Модуль менеджера приложения
//
Функция ВыполнитьКоманду(Знач ПараметрыКоманды, Знач Приложение) Экспорт

	Лог = Приложение.ПолучитьЛог();

	КомандаДляСправки = ПараметрыКоманды["Команда"];

	Если КомандаДляСправки = Неопределено Тогда

		Приложение.ВывестиСправкуПоКомандам();

		Лог.Отладка("Вывод справки по командам");

	Иначе

		Приложение.ВывестиСправкуПоКоманде(КомандаДляСправки);

		Лог.Отладка(СтрШаблон("Вывод справки по команде %1", КомандаДляСправки));
		
	КонецЕсли;

	Возврат Приложение.РезультатыКоманд().Успех;
	
КонецФункции // ВыполнитьКоманду
