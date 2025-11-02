var wms_layers = [];


        var lyr_ESRINationalGeographic_0 = new ol.layer.Tile({
            'title': 'ESRI National Geographic',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Burmeseroutelin_1 = new ol.format.GeoJSON();
var features_Burmeseroutelin_1 = format_Burmeseroutelin_1.readFeatures(json_Burmeseroutelin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Burmeseroutelin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Burmeseroutelin_1.addFeatures(features_Burmeseroutelin_1);
var lyr_Burmeseroutelin_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Burmeseroutelin_1, 
                style: style_Burmeseroutelin_1,
                popuplayertitle: 'Burmese route lin',
                interactive: false,
                title: '<img src="styles/legend/Burmeseroutelin_1.png" /> Burmese route lin'
            });
var format_Burmeseroutepts_2 = new ol.format.GeoJSON();
var features_Burmeseroutepts_2 = format_Burmeseroutepts_2.readFeatures(json_Burmeseroutepts_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Burmeseroutepts_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Burmeseroutepts_2.addFeatures(features_Burmeseroutepts_2);
var lyr_Burmeseroutepts_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Burmeseroutepts_2, 
                style: style_Burmeseroutepts_2,
                popuplayertitle: 'Burmese route pts',
                interactive: true,
                title: '<img src="styles/legend/Burmeseroutepts_2.png" /> Burmese route pts'
            });

lyr_ESRINationalGeographic_0.setVisible(true);lyr_Burmeseroutelin_1.setVisible(true);lyr_Burmeseroutepts_2.setVisible(true);
var layersList = [lyr_ESRINationalGeographic_0,lyr_Burmeseroutelin_1,lyr_Burmeseroutepts_2];
lyr_Burmeseroutelin_1.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', });
lyr_Burmeseroutepts_2.set('fieldAliases', {'fid': 'fid', 'SYS_ID': 'SYS_ID', 'NAME_PY': 'NAME_PY', 'NAME_CH': 'NAME_CH', 'NAME_FT': 'NAME_FT', 'X_COORD': 'X_COORD', 'Y_COORD': 'Y_COORD', 'PRES_LOC': 'PRES_LOC', 'TYPE_PY': 'TYPE_PY', 'TYPE_CH': 'TYPE_CH', 'LEV_RANK': 'LEV_RANK', 'BEG_YR': 'BEG_YR', 'BEG_RULE': 'BEG_RULE', 'END_YR': 'END_YR', 'END_RULE': 'END_RULE', 'DYN_PY': 'DYN_PY', 'DYN_CH': 'DYN_CH', 'LEV1_PY': 'LEV1_PY', 'LEV1_CH': 'LEV1_CH', 'LEV2_PY': 'LEV2_PY', 'LEV2_CH': 'LEV2_CH', 'NOTE_ID': 'NOTE_ID', 'OBJ_TYPE': 'OBJ_TYPE', 'GEO_ID': 'GEO_ID', 'GEO_SRC': 'GEO_SRC', 'COMPILER': 'COMPILER', 'GEOCOMP': 'GEOCOMP', 'CHECKER': 'CHECKER', 'ENT_DATE': 'ENT_DATE', 'LEN1_CH': 'LEN1_CH', 'CNTY_PY': 'CNTY_PY', 'CNTY_CH': 'CNTY_CH', 'LOC_ID': 'LOC_ID', 'layer': 'layer', 'path': 'path', 'NAME': 'NAME', 'ID': 'ID', });
lyr_Burmeseroutelin_1.set('fieldImages', {'fid': 'TextEdit', 'begin': 'Range', 'end': 'Range', });
lyr_Burmeseroutepts_2.set('fieldImages', {'fid': 'TextEdit', 'SYS_ID': 'TextEdit', 'NAME_PY': 'TextEdit', 'NAME_CH': 'TextEdit', 'NAME_FT': 'TextEdit', 'X_COORD': 'TextEdit', 'Y_COORD': 'TextEdit', 'PRES_LOC': 'TextEdit', 'TYPE_PY': 'TextEdit', 'TYPE_CH': 'TextEdit', 'LEV_RANK': 'TextEdit', 'BEG_YR': 'Range', 'BEG_RULE': 'TextEdit', 'END_YR': 'Range', 'END_RULE': 'TextEdit', 'DYN_PY': 'TextEdit', 'DYN_CH': 'TextEdit', 'LEV1_PY': 'TextEdit', 'LEV1_CH': 'TextEdit', 'LEV2_PY': 'TextEdit', 'LEV2_CH': 'TextEdit', 'NOTE_ID': 'Range', 'OBJ_TYPE': 'TextEdit', 'GEO_ID': 'Range', 'GEO_SRC': 'TextEdit', 'COMPILER': 'TextEdit', 'GEOCOMP': 'TextEdit', 'CHECKER': 'TextEdit', 'ENT_DATE': 'TextEdit', 'LEN1_CH': 'TextEdit', 'CNTY_PY': 'TextEdit', 'CNTY_CH': 'TextEdit', 'LOC_ID': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', 'NAME': 'TextEdit', 'ID': 'Range', });
lyr_Burmeseroutelin_1.set('fieldLabels', {'fid': 'no label', 'begin': 'no label', 'end': 'no label', });
lyr_Burmeseroutepts_2.set('fieldLabels', {'fid': 'no label', 'SYS_ID': 'no label', 'NAME_PY': 'inline label - always visible', 'NAME_CH': 'inline label - always visible', 'NAME_FT': 'no label', 'X_COORD': 'no label', 'Y_COORD': 'no label', 'PRES_LOC': 'no label', 'TYPE_PY': 'no label', 'TYPE_CH': 'no label', 'LEV_RANK': 'no label', 'BEG_YR': 'no label', 'BEG_RULE': 'no label', 'END_YR': 'no label', 'END_RULE': 'no label', 'DYN_PY': 'no label', 'DYN_CH': 'no label', 'LEV1_PY': 'no label', 'LEV1_CH': 'no label', 'LEV2_PY': 'no label', 'LEV2_CH': 'no label', 'NOTE_ID': 'no label', 'OBJ_TYPE': 'no label', 'GEO_ID': 'no label', 'GEO_SRC': 'no label', 'COMPILER': 'no label', 'GEOCOMP': 'no label', 'CHECKER': 'no label', 'ENT_DATE': 'no label', 'LEN1_CH': 'no label', 'CNTY_PY': 'no label', 'CNTY_CH': 'no label', 'LOC_ID': 'no label', 'layer': 'no label', 'path': 'no label', 'NAME': 'no label', 'ID': 'inline label - always visible', });
lyr_Burmeseroutepts_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});