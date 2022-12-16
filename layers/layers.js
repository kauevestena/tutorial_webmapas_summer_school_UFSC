var wms_layers = [];

var format_restaurantes_floripa_0 = new ol.format.GeoJSON();
var features_restaurantes_floripa_0 = format_restaurantes_floripa_0.readFeatures(json_restaurantes_floripa_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restaurantes_floripa_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restaurantes_floripa_0.addFeatures(features_restaurantes_floripa_0);
var lyr_restaurantes_floripa_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_restaurantes_floripa_0, 
                style: style_restaurantes_floripa_0,
                interactive: true,
    title: 'restaurantes_floripa<br />\
    <img src="styles/legend/restaurantes_floripa_0_0.png" /> american<br />\
    <img src="styles/legend/restaurantes_floripa_0_1.png" /> arab<br />\
    <img src="styles/legend/restaurantes_floripa_0_2.png" /> asian<br />\
    <img src="styles/legend/restaurantes_floripa_0_3.png" /> asian;thai<br />\
    <img src="styles/legend/restaurantes_floripa_0_4.png" /> barbecue<br />\
    <img src="styles/legend/restaurantes_floripa_0_5.png" /> brazilian<br />\
    <img src="styles/legend/restaurantes_floripa_0_6.png" /> burger<br />\
    <img src="styles/legend/restaurantes_floripa_0_7.png" /> burger;american<br />\
    <img src="styles/legend/restaurantes_floripa_0_8.png" /> chicken<br />\
    <img src="styles/legend/restaurantes_floripa_0_9.png" /> coffee<br />\
    <img src="styles/legend/restaurantes_floripa_0_10.png" /> fine_dining<br />\
    <img src="styles/legend/restaurantes_floripa_0_11.png" /> fish<br />\
    <img src="styles/legend/restaurantes_floripa_0_12.png" /> fish;seafood<br />\
    <img src="styles/legend/restaurantes_floripa_0_13.png" /> indian<br />\
    <img src="styles/legend/restaurantes_floripa_0_14.png" /> international<br />\
    <img src="styles/legend/restaurantes_floripa_0_15.png" /> italian<br />\
    <img src="styles/legend/restaurantes_floripa_0_16.png" /> italian;burger;regional;seafood<br />\
    <img src="styles/legend/restaurantes_floripa_0_17.png" /> japanese<br />\
    <img src="styles/legend/restaurantes_floripa_0_18.png" /> japanese;ramen<br />\
    <img src="styles/legend/restaurantes_floripa_0_19.png" /> japanese;regional<br />\
    <img src="styles/legend/restaurantes_floripa_0_20.png" /> mediterranean<br />\
    <img src="styles/legend/restaurantes_floripa_0_21.png" /> mediterranean;portuguese<br />\
    <img src="styles/legend/restaurantes_floripa_0_22.png" /> mexican<br />\
    <img src="styles/legend/restaurantes_floripa_0_23.png" /> pasta<br />\
    <img src="styles/legend/restaurantes_floripa_0_24.png" /> pasta;pizza<br />\
    <img src="styles/legend/restaurantes_floripa_0_25.png" /> pizza<br />\
    <img src="styles/legend/restaurantes_floripa_0_26.png" /> pizza;burger;italian;pasta<br />\
    <img src="styles/legend/restaurantes_floripa_0_27.png" /> pizza;italian_pizza<br />\
    <img src="styles/legend/restaurantes_floripa_0_28.png" /> pizza;Rodizio<br />\
    <img src="styles/legend/restaurantes_floripa_0_29.png" /> pizza;sushi<br />\
    <img src="styles/legend/restaurantes_floripa_0_30.png" /> portuguese<br />\
    <img src="styles/legend/restaurantes_floripa_0_31.png" /> pub<br />\
    <img src="styles/legend/restaurantes_floripa_0_32.png" /> regional<br />\
    <img src="styles/legend/restaurantes_floripa_0_33.png" /> regional;burger<br />\
    <img src="styles/legend/restaurantes_floripa_0_34.png" /> regional;portuguese<br />\
    <img src="styles/legend/restaurantes_floripa_0_35.png" /> seafood<br />\
    <img src="styles/legend/restaurantes_floripa_0_36.png" /> steak_house<br />\
    <img src="styles/legend/restaurantes_floripa_0_37.png" /> sushi<br />\
    <img src="styles/legend/restaurantes_floripa_0_38.png" /> sushi;japanese<br />\
    <img src="styles/legend/restaurantes_floripa_0_39.png" /> thai<br />\
    <img src="styles/legend/restaurantes_floripa_0_40.png" /> <br />'
        });

        var lyr_DarkMatter_1 = new ol.layer.Tile({
            'title': 'Dark Matter',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });

lyr_restaurantes_floripa_0.setVisible(true);lyr_DarkMatter_1.setVisible(true);
var layersList = [lyr_restaurantes_floripa_0,lyr_DarkMatter_1];
lyr_restaurantes_floripa_0.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'service:electricity': 'service:electricity', 'payment:cards': 'payment:cards', 'toilets': 'toilets', 'not:name': 'not:name', 'image': 'image', 'air_conditioning': 'air_conditioning', 'level': 'level', 'url': 'url', 'addr:door': 'addr:door', 'opening_hours:covid19': 'opening_hours:covid19', 'microbrewery': 'microbrewery', 'diet:vegan': 'diet:vegan', 'diet:meat': 'diet:meat', 'reservation': 'reservation', 'access': 'access', 'name:zh': 'name:zh', 'contact:instagram': 'contact:instagram', 'contact:phone': 'contact:phone', 'internet_access:fee': 'internet_access:fee', 'payment:visa_debit': 'payment:visa_debit', 'payment:cash': 'payment:cash', 'internet_access': 'internet_access', 'name:pt': 'name:pt', 'outdoor_seating': 'outdoor_seating', 'contact:facebook': 'contact:facebook', 'email': 'email', 'smoking': 'smoking', 'payment:coins': 'payment:coins', 'payment:bitcoin': 'payment:bitcoin', 'capacity': 'capacity', 'diet:vegetarian': 'diet:vegetarian', 'training': 'training', 'name:en': 'name:en', 'shop': 'shop', 'takeaway': 'takeaway', 'delivery': 'delivery', 'phone': 'phone', 'description': 'description', 'alt_name': 'alt_name', 'source:name': 'source:name', 'opening_hours': 'opening_hours', 'website': 'website', 'name': 'name', 'cuisine': 'cuisine', 'addr:suburb': 'addr:suburb', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'wheelchair': 'wheelchair', 'toilets:wheelchair': 'toilets:wheelchair', 'historic': 'historic', 'contact:whatsapp': 'contact:whatsapp', 'loc_name': 'loc_name', 'roof:shape': 'roof:shape', 'roof:material': 'roof:material', 'brewery': 'brewery', 'survey:date': 'survey:date', 'landuse': 'landuse', 'building:material': 'building:material', 'diet:mediterranean': 'diet:mediterranean', 'bar': 'bar', 'contact:website': 'contact:website', 'contact:email': 'contact:email', 'old_name': 'old_name', 'short_name': 'short_name', 'building:levels': 'building:levels', 'building': 'building', 'type': 'type', 'layer': 'layer', 'path': 'path', });
lyr_restaurantes_floripa_0.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'service:electricity': 'TextEdit', 'payment:cards': 'TextEdit', 'toilets': 'TextEdit', 'not:name': 'TextEdit', 'image': 'TextEdit', 'air_conditioning': 'TextEdit', 'level': 'TextEdit', 'url': 'TextEdit', 'addr:door': 'TextEdit', 'opening_hours:covid19': 'TextEdit', 'microbrewery': 'TextEdit', 'diet:vegan': 'TextEdit', 'diet:meat': 'TextEdit', 'reservation': 'TextEdit', 'access': 'TextEdit', 'name:zh': 'TextEdit', 'contact:instagram': 'TextEdit', 'contact:phone': 'TextEdit', 'internet_access:fee': 'TextEdit', 'payment:visa_debit': 'TextEdit', 'payment:cash': 'TextEdit', 'internet_access': 'TextEdit', 'name:pt': 'TextEdit', 'outdoor_seating': 'TextEdit', 'contact:facebook': 'TextEdit', 'email': 'TextEdit', 'smoking': 'TextEdit', 'payment:coins': 'TextEdit', 'payment:bitcoin': 'TextEdit', 'capacity': 'TextEdit', 'diet:vegetarian': 'TextEdit', 'training': 'TextEdit', 'name:en': 'TextEdit', 'shop': 'TextEdit', 'takeaway': 'TextEdit', 'delivery': 'TextEdit', 'phone': 'TextEdit', 'description': 'TextEdit', 'alt_name': 'TextEdit', 'source:name': 'TextEdit', 'opening_hours': 'TextEdit', 'website': 'TextEdit', 'name': 'TextEdit', 'cuisine': 'TextEdit', 'addr:suburb': 'TextEdit', 'addr:street': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'wheelchair': 'TextEdit', 'toilets:wheelchair': 'TextEdit', 'historic': 'TextEdit', 'contact:whatsapp': 'TextEdit', 'loc_name': 'TextEdit', 'roof:shape': 'TextEdit', 'roof:material': 'TextEdit', 'brewery': 'TextEdit', 'survey:date': 'DateTime', 'landuse': 'TextEdit', 'building:material': 'TextEdit', 'diet:mediterranean': 'TextEdit', 'bar': 'TextEdit', 'contact:website': 'TextEdit', 'contact:email': 'TextEdit', 'old_name': 'TextEdit', 'short_name': 'TextEdit', 'building:levels': 'TextEdit', 'building': 'TextEdit', 'type': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_restaurantes_floripa_0.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'service:electricity': 'no label', 'payment:cards': 'no label', 'toilets': 'no label', 'not:name': 'no label', 'image': 'no label', 'air_conditioning': 'inline label', 'level': 'no label', 'url': 'no label', 'addr:door': 'no label', 'opening_hours:covid19': 'no label', 'microbrewery': 'no label', 'diet:vegan': 'no label', 'diet:meat': 'no label', 'reservation': 'no label', 'access': 'no label', 'name:zh': 'no label', 'contact:instagram': 'no label', 'contact:phone': 'no label', 'internet_access:fee': 'no label', 'payment:visa_debit': 'no label', 'payment:cash': 'no label', 'internet_access': 'no label', 'name:pt': 'no label', 'outdoor_seating': 'no label', 'contact:facebook': 'no label', 'email': 'no label', 'smoking': 'inline label', 'payment:coins': 'no label', 'payment:bitcoin': 'no label', 'capacity': 'no label', 'diet:vegetarian': 'no label', 'training': 'no label', 'name:en': 'no label', 'shop': 'no label', 'takeaway': 'no label', 'delivery': 'no label', 'phone': 'no label', 'description': 'no label', 'alt_name': 'no label', 'source:name': 'no label', 'opening_hours': 'no label', 'website': 'no label', 'name': 'inline label', 'cuisine': 'no label', 'addr:suburb': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'wheelchair': 'no label', 'toilets:wheelchair': 'no label', 'historic': 'no label', 'contact:whatsapp': 'no label', 'loc_name': 'no label', 'roof:shape': 'no label', 'roof:material': 'no label', 'brewery': 'no label', 'survey:date': 'no label', 'landuse': 'no label', 'building:material': 'no label', 'diet:mediterranean': 'no label', 'bar': 'no label', 'contact:website': 'no label', 'contact:email': 'no label', 'old_name': 'no label', 'short_name': 'no label', 'building:levels': 'no label', 'building': 'no label', 'type': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_restaurantes_floripa_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});