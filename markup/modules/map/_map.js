
// Map

ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
		    center: [55.708389, 37.625487],
		    zoom: 17,
		    controls: ['smallMapDefaultSet']
		}),
		myPlacemark = new ymaps.Placemark(myMap.getCenter(), {

		}, {
		    // Опции.
		    // Необходимо указать данный тип макета.
		    iconLayout: 'default#image',
		    // Своё изображение иконки метки.
		    iconImageHref: 'static/img/general/map_pin.png',
		    // Размеры метки.
		    iconImageSize: [130, 116],
		    // Смещение левого верхнего угла иконки относительно
		    // её "ножки" (точки привязки).
		    iconImageOffset: [-65, -128]
		});

		myMap.geoObjects.add(myPlacemark);

});

