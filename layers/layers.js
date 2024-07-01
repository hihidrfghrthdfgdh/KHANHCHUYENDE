var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_NHAMAY_1 = new ol.format.GeoJSON();
var features_NHAMAY_1 = format_NHAMAY_1.readFeatures(json_NHAMAY_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NHAMAY_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NHAMAY_1.addFeatures(features_NHAMAY_1);
var lyr_NHAMAY_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NHAMAY_1, 
                style: style_NHAMAY_1,
                popuplayertitle: "NHAMAY",
                interactive: true,
                title: '<img src="styles/legend/NHAMAY_1.png" /> NHAMAY'
            });
var format_MATNUOC_2 = new ol.format.GeoJSON();
var features_MATNUOC_2 = format_MATNUOC_2.readFeatures(json_MATNUOC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MATNUOC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MATNUOC_2.addFeatures(features_MATNUOC_2);
var lyr_MATNUOC_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MATNUOC_2, 
                style: style_MATNUOC_2,
                popuplayertitle: "MATNUOC",
                interactive: true,
                title: '<img src="styles/legend/MATNUOC_2.png" /> MATNUOC'
            });
var format_CHUNGCU_3 = new ol.format.GeoJSON();
var features_CHUNGCU_3 = format_CHUNGCU_3.readFeatures(json_CHUNGCU_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHUNGCU_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHUNGCU_3.addFeatures(features_CHUNGCU_3);
var lyr_CHUNGCU_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHUNGCU_3, 
                style: style_CHUNGCU_3,
                popuplayertitle: "CHUNGCU",
                interactive: true,
                title: '<img src="styles/legend/CHUNGCU_3.png" /> CHUNGCU'
            });
var format_HANHCHINH_4 = new ol.format.GeoJSON();
var features_HANHCHINH_4 = format_HANHCHINH_4.readFeatures(json_HANHCHINH_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HANHCHINH_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HANHCHINH_4.addFeatures(features_HANHCHINH_4);
var lyr_HANHCHINH_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HANHCHINH_4, 
                style: style_HANHCHINH_4,
                popuplayertitle: "HANHCHINH",
                interactive: true,
                title: '<img src="styles/legend/HANHCHINH_4.png" /> HANHCHINH'
            });
var format_TTVH_5 = new ol.format.GeoJSON();
var features_TTVH_5 = format_TTVH_5.readFeatures(json_TTVH_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TTVH_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TTVH_5.addFeatures(features_TTVH_5);
var lyr_TTVH_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TTVH_5, 
                style: style_TTVH_5,
                popuplayertitle: "TTVH",
                interactive: true,
                title: '<img src="styles/legend/TTVH_5.png" /> TTVH'
            });
var format_CHO_6 = new ol.format.GeoJSON();
var features_CHO_6 = format_CHO_6.readFeatures(json_CHO_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHO_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHO_6.addFeatures(features_CHO_6);
var lyr_CHO_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHO_6, 
                style: style_CHO_6,
                popuplayertitle: "CHO",
                interactive: true,
                title: '<img src="styles/legend/CHO_6.png" /> CHO'
            });
var format_CAYXANG_7 = new ol.format.GeoJSON();
var features_CAYXANG_7 = format_CAYXANG_7.readFeatures(json_CAYXANG_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAYXANG_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAYXANG_7.addFeatures(features_CAYXANG_7);
var lyr_CAYXANG_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAYXANG_7, 
                style: style_CAYXANG_7,
                popuplayertitle: "CAYXANG",
                interactive: true,
                title: '<img src="styles/legend/CAYXANG_7.png" /> CAYXANG'
            });
var format_BIETTHU_8 = new ol.format.GeoJSON();
var features_BIETTHU_8 = format_BIETTHU_8.readFeatures(json_BIETTHU_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BIETTHU_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BIETTHU_8.addFeatures(features_BIETTHU_8);
var lyr_BIETTHU_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BIETTHU_8, 
                style: style_BIETTHU_8,
                popuplayertitle: "BIETTHU",
                interactive: true,
                title: '<img src="styles/legend/BIETTHU_8.png" /> BIETTHU'
            });
var format_TRUONGHOC_9 = new ol.format.GeoJSON();
var features_TRUONGHOC_9 = format_TRUONGHOC_9.readFeatures(json_TRUONGHOC_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRUONGHOC_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRUONGHOC_9.addFeatures(features_TRUONGHOC_9);
var lyr_TRUONGHOC_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRUONGHOC_9, 
                style: style_TRUONGHOC_9,
                popuplayertitle: "TRUONGHOC",
                interactive: true,
                title: '<img src="styles/legend/TRUONGHOC_9.png" /> TRUONGHOC'
            });
var format_LIENKE_10 = new ol.format.GeoJSON();
var features_LIENKE_10 = format_LIENKE_10.readFeatures(json_LIENKE_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIENKE_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIENKE_10.addFeatures(features_LIENKE_10);
var lyr_LIENKE_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIENKE_10, 
                style: style_LIENKE_10,
                popuplayertitle: "LIENKE",
                interactive: true,
                title: '<img src="styles/legend/LIENKE_10.png" /> LIENKE'
            });
var format_DUONG_11 = new ol.format.GeoJSON();
var features_DUONG_11 = format_DUONG_11.readFeatures(json_DUONG_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DUONG_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DUONG_11.addFeatures(features_DUONG_11);
var lyr_DUONG_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DUONG_11, 
                style: style_DUONG_11,
                popuplayertitle: "DUONG",
                interactive: true,
                title: '<img src="styles/legend/DUONG_11.png" /> DUONG'
            });
var format_CAYXANH_12 = new ol.format.GeoJSON();
var features_CAYXANH_12 = format_CAYXANH_12.readFeatures(json_CAYXANH_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAYXANH_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAYXANH_12.addFeatures(features_CAYXANH_12);
var lyr_CAYXANH_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAYXANH_12, 
                style: style_CAYXANH_12,
                popuplayertitle: "CAYXANH",
                interactive: true,
                title: '<img src="styles/legend/CAYXANH_12.png" /> CAYXANH'
            });
var format_HLDIEN_13 = new ol.format.GeoJSON();
var features_HLDIEN_13 = format_HLDIEN_13.readFeatures(json_HLDIEN_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HLDIEN_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HLDIEN_13.addFeatures(features_HLDIEN_13);
var lyr_HLDIEN_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HLDIEN_13, 
                style: style_HLDIEN_13,
                popuplayertitle: "HLDIEN",
                interactive: true,
                title: '<img src="styles/legend/HLDIEN_13.png" /> HLDIEN'
            });
var format_CONG_14 = new ol.format.GeoJSON();
var features_CONG_14 = format_CONG_14.readFeatures(json_CONG_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONG_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONG_14.addFeatures(features_CONG_14);
var lyr_CONG_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONG_14, 
                style: style_CONG_14,
                popuplayertitle: "CONG",
                interactive: true,
    title: 'CONG<br />\
    <img src="styles/legend/CONG_14_0.png" /> 26 - 27<br />\
    <img src="styles/legend/CONG_14_1.png" /> 27 - 28<br />\
    <img src="styles/legend/CONG_14_2.png" /> 28 - 29<br />\
    <img src="styles/legend/CONG_14_3.png" /> 29 - 30<br />\
    <img src="styles/legend/CONG_14_4.png" /> 30 - 31<br />\
    <img src="styles/legend/CONG_14_5.png" /> 31 - 32<br />\
    <img src="styles/legend/CONG_14_6.png" /> 32 - 33<br />\
    <img src="styles/legend/CONG_14_7.png" /> 33 - 34<br />\
    <img src="styles/legend/CONG_14_8.png" /> 34 - 35<br />\
    <img src="styles/legend/CONG_14_9.png" /> 35 - 36<br />\
    <img src="styles/legend/CONG_14_10.png" /> 36 - 37<br />\
    <img src="styles/legend/CONG_14_11.png" /> 37 - 38<br />\
    <img src="styles/legend/CONG_14_12.png" /> 38 - 39<br />\
    <img src="styles/legend/CONG_14_13.png" /> 39 - 40<br />\
    <img src="styles/legend/CONG_14_14.png" /> 40 - 41<br />\
    <img src="styles/legend/CONG_14_15.png" /> 41 - 42<br />\
    <img src="styles/legend/CONG_14_16.png" /> 42 - 43<br />\
    <img src="styles/legend/CONG_14_17.png" /> 43 - 44<br />\
    <img src="styles/legend/CONG_14_18.png" /> 44 - 45<br />\
    <img src="styles/legend/CONG_14_19.png" /> 45 - 46<br />\
    <img src="styles/legend/CONG_14_20.png" /> 46 - 47<br />\
    <img src="styles/legend/CONG_14_21.png" /> 47 - 48<br />\
    <img src="styles/legend/CONG_14_22.png" /> 48 - 49<br />\
    <img src="styles/legend/CONG_14_23.png" /> 49 - 50<br />\
    <img src="styles/legend/CONG_14_24.png" /> 50 - 51<br />\
    <img src="styles/legend/CONG_14_25.png" /> 51 - 52<br />\
    <img src="styles/legend/CONG_14_26.png" /> 52 - 53<br />\
    <img src="styles/legend/CONG_14_27.png" /> 53 - 54<br />\
    <img src="styles/legend/CONG_14_28.png" /> 54 - 55<br />\
    <img src="styles/legend/CONG_14_29.png" /> 55 - 56<br />\
    <img src="styles/legend/CONG_14_30.png" /> 56 - 57<br />\
    <img src="styles/legend/CONG_14_31.png" /> 57 - 58<br />\
    <img src="styles/legend/CONG_14_32.png" /> 58 - 59<br />\
    <img src="styles/legend/CONG_14_33.png" /> 59 - 60<br />\
    <img src="styles/legend/CONG_14_34.png" /> 60 - 61<br />\
    <img src="styles/legend/CONG_14_35.png" /> 61 - 62<br />\
    <img src="styles/legend/CONG_14_36.png" /> 62 - 63<br />\
    <img src="styles/legend/CONG_14_37.png" /> 63 - 64<br />\
    <img src="styles/legend/CONG_14_38.png" /> 64 - 65<br />\
    <img src="styles/legend/CONG_14_39.png" /> 65 - 66<br />\
    <img src="styles/legend/CONG_14_40.png" /> 66 - 67<br />\
    <img src="styles/legend/CONG_14_41.png" /> 67 - 68<br />\
    <img src="styles/legend/CONG_14_42.png" /> 68 - 69<br />\
    <img src="styles/legend/CONG_14_43.png" /> 69 - 70<br />\
    <img src="styles/legend/CONG_14_44.png" /> 70 - 71<br />\
    <img src="styles/legend/CONG_14_45.png" /> 71 - 72<br />\
    <img src="styles/legend/CONG_14_46.png" /> 72 - 73<br />\
    <img src="styles/legend/CONG_14_47.png" /> 73 - 74<br />\
    <img src="styles/legend/CONG_14_48.png" /> 74 - 75<br />\
    <img src="styles/legend/CONG_14_49.png" /> 75 - 76<br />\
    <img src="styles/legend/CONG_14_50.png" /> 76 - 77<br />\
    <img src="styles/legend/CONG_14_51.png" /> 77 - 78<br />\
    <img src="styles/legend/CONG_14_52.png" /> 78 - 79<br />\
    <img src="styles/legend/CONG_14_53.png" /> 79 - 80<br />\
    <img src="styles/legend/CONG_14_54.png" /> 80 - 81<br />\
    <img src="styles/legend/CONG_14_55.png" /> 81 - 82<br />\
    <img src="styles/legend/CONG_14_56.png" /> 82 - 83<br />\
    <img src="styles/legend/CONG_14_57.png" /> 83 - 84<br />\
    <img src="styles/legend/CONG_14_58.png" /> 84 - 85<br />\
    <img src="styles/legend/CONG_14_59.png" /> 85 - 86<br />\
    <img src="styles/legend/CONG_14_60.png" /> 86 - 87<br />\
    <img src="styles/legend/CONG_14_61.png" /> 87 - 88<br />\
    <img src="styles/legend/CONG_14_62.png" /> 88 - 89<br />\
    <img src="styles/legend/CONG_14_63.png" /> 89 - 90<br />\
    <img src="styles/legend/CONG_14_64.png" /> 90 - 91<br />\
    <img src="styles/legend/CONG_14_65.png" /> 91 - 92<br />\
    <img src="styles/legend/CONG_14_66.png" /> 92 - 93<br />\
    <img src="styles/legend/CONG_14_67.png" /> 93 - 94<br />\
    <img src="styles/legend/CONG_14_68.png" /> 94 - 95<br />\
    <img src="styles/legend/CONG_14_69.png" /> 95 - 96<br />\
    <img src="styles/legend/CONG_14_70.png" /> 96 - 97<br />\
    <img src="styles/legend/CONG_14_71.png" /> 97 - 98<br />'
        });
var format_LUUVUC_15 = new ol.format.GeoJSON();
var features_LUUVUC_15 = format_LUUVUC_15.readFeatures(json_LUUVUC_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LUUVUC_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LUUVUC_15.addFeatures(features_LUUVUC_15);
var lyr_LUUVUC_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LUUVUC_15, 
                style: style_LUUVUC_15,
                popuplayertitle: "LUUVUC",
                interactive: true,
                title: '<img src="styles/legend/LUUVUC_15.png" /> LUUVUC'
            });
var format_HOGAA_16 = new ol.format.GeoJSON();
var features_HOGAA_16 = format_HOGAA_16.readFeatures(json_HOGAA_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOGAA_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOGAA_16.addFeatures(features_HOGAA_16);
var lyr_HOGAA_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HOGAA_16, 
                style: style_HOGAA_16,
                popuplayertitle: "HOGAA",
                interactive: true,
                title: '<img src="styles/legend/HOGAA_16.png" /> HOGAA'
            });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_NHAMAY_1,lyr_MATNUOC_2,lyr_CHUNGCU_3,lyr_HANHCHINH_4,lyr_TTVH_5,lyr_CHO_6,lyr_CAYXANG_7,lyr_BIETTHU_8,lyr_TRUONGHOC_9,lyr_LIENKE_10,lyr_DUONG_11,lyr_CAYXANH_12,lyr_HLDIEN_13,lyr_CONG_14,lyr_LUUVUC_15,lyr_HOGAA_16,],
                                fold: "open",
                                title: "group1"});

lyr_GoogleSatellite_0.setVisible(true);lyr_NHAMAY_1.setVisible(true);lyr_MATNUOC_2.setVisible(true);lyr_CHUNGCU_3.setVisible(true);lyr_HANHCHINH_4.setVisible(true);lyr_TTVH_5.setVisible(true);lyr_CHO_6.setVisible(true);lyr_CAYXANG_7.setVisible(true);lyr_BIETTHU_8.setVisible(true);lyr_TRUONGHOC_9.setVisible(true);lyr_LIENKE_10.setVisible(true);lyr_DUONG_11.setVisible(true);lyr_CAYXANH_12.setVisible(true);lyr_HLDIEN_13.setVisible(true);lyr_CONG_14.setVisible(true);lyr_LUUVUC_15.setVisible(true);lyr_HOGAA_16.setVisible(true);
var layersList = [group_group1];
lyr_NHAMAY_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_MATNUOC_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_CHUNGCU_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'DANSOCHUNGCU': 'DANSOCHUNGCU', });
lyr_HANHCHINH_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_TTVH_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_CHO_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_CAYXANG_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BIETTHU_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'DANSOBT': 'DANSOBT', });
lyr_TRUONGHOC_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_LIENKE_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'DANSO': 'DANSO', });
lyr_DUONG_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_CAYXANH_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_HLDIEN_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_CONG_14.set('fieldAliases', {'ID': 'ID', 'CHIỀU DÀI (L)': 'CHIỀU DÀI (L)', 'ĐƯỜNG KÍNH (D)': 'ĐƯỜNG KÍNH (D)', 'ĐỘ DỐC (I%)': 'ĐỘ DỐC (I%)', 'Q= MƯA (L/S)': 'Q= MƯA (L/S)', 'Q= CỐNG (L/S)': 'Q= CỐNG (L/S)', 'VẬN TỐC (M/S)': 'VẬN TỐC (M/S)', 'H/D % (5 NĂM)': 'H/D % (5 NĂM)', 'H/D 5 (20 NĂM)': 'H/D 5 (20 NĂM)', 'NGÀY LẮP ĐẶT': 'NGÀY LẮP ĐẶT', 'NGÀY BẢO TRÌ': 'NGÀY BẢO TRÌ', 'GHI CHÚ': 'GHI CHÚ', });
lyr_LUUVUC_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', });
lyr_HOGAA_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', });
lyr_NHAMAY_1.set('fieldImages', {'OBJECTID': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_MATNUOC_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_CHUNGCU_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'DANSOCHUNGCU': 'Range', });
lyr_HANHCHINH_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_TTVH_5.set('fieldImages', {'OBJECTID': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_CHO_6.set('fieldImages', {'OBJECTID': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_CAYXANG_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_BIETTHU_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'DANSOBT': 'TextEdit', });
lyr_TRUONGHOC_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_LIENKE_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'DANSO': 'TextEdit', });
lyr_DUONG_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_CAYXANH_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_HLDIEN_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_CONG_14.set('fieldImages', {'ID': 'TextEdit', 'CHIỀU DÀI (L)': 'TextEdit', 'ĐƯỜNG KÍNH (D)': 'TextEdit', 'ĐỘ DỐC (I%)': 'TextEdit', 'Q= MƯA (L/S)': 'TextEdit', 'Q= CỐNG (L/S)': 'TextEdit', 'VẬN TỐC (M/S)': 'TextEdit', 'H/D % (5 NĂM)': 'Range', 'H/D 5 (20 NĂM)': 'TextEdit', 'NGÀY LẮP ĐẶT': 'DateTime', 'NGÀY BẢO TRÌ': 'DateTime', 'GHI CHÚ': 'TextEdit', });
lyr_LUUVUC_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', });
lyr_HOGAA_16.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', });
lyr_NHAMAY_1.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'SHAPE_Length': 'header label - always visible', 'SHAPE_Area': 'header label - always visible', });
lyr_MATNUOC_2.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'SHAPE_Length': 'header label - always visible', 'SHAPE_Area': 'header label - always visible', });
lyr_CHUNGCU_3.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'SHAPE_Length': 'header label - always visible', 'SHAPE_Area': 'header label - always visible', 'DANSOCHUNGCU': 'header label - always visible', });
lyr_HANHCHINH_4.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'SHAPE_Length': 'header label - always visible', 'SHAPE_Area': 'header label - always visible', });
lyr_TTVH_5.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'SHAPE_Length': 'header label - always visible', 'SHAPE_Area': 'header label - always visible', });
lyr_CHO_6.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'SHAPE_Length': 'header label - always visible', 'SHAPE_Area': 'header label - always visible', });
lyr_CAYXANG_7.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'SHAPE_Length': 'header label - always visible', 'SHAPE_Area': 'header label - always visible', });
lyr_BIETTHU_8.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'SHAPE_Length': 'header label - always visible', 'SHAPE_Area': 'header label - always visible', 'DANSOBT': 'header label - always visible', });
lyr_TRUONGHOC_9.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'SHAPE_Length': 'header label - always visible', 'SHAPE_Area': 'header label - always visible', });
lyr_LIENKE_10.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'SHAPE_Length': 'header label - always visible', 'SHAPE_Area': 'header label - always visible', 'DANSO': 'header label - always visible', });
lyr_DUONG_11.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'SHAPE_Length': 'header label - always visible', 'SHAPE_Area': 'header label - always visible', });
lyr_CAYXANH_12.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'SHAPE_Length': 'header label - always visible', 'SHAPE_Area': 'header label - always visible', });
lyr_HLDIEN_13.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'SHAPE_Length': 'header label - always visible', 'SHAPE_Area': 'header label - always visible', });
lyr_CONG_14.set('fieldLabels', {'ID': 'header label - always visible', 'CHIỀU DÀI (L)': 'header label - always visible', 'ĐƯỜNG KÍNH (D)': 'header label - always visible', 'ĐỘ DỐC (I%)': 'header label - always visible', 'Q= MƯA (L/S)': 'header label - always visible', 'Q= CỐNG (L/S)': 'header label - always visible', 'VẬN TỐC (M/S)': 'header label - always visible', 'H/D % (5 NĂM)': 'header label - always visible', 'H/D 5 (20 NĂM)': 'header label - always visible', 'NGÀY LẮP ĐẶT': 'header label - always visible', 'NGÀY BẢO TRÌ': 'header label - always visible', 'GHI CHÚ': 'header label - always visible', });
lyr_LUUVUC_15.set('fieldLabels', {'OBJECTID': 'header label - visible with data', 'SHAPE_Length': 'header label - visible with data', });
lyr_HOGAA_16.set('fieldLabels', {'OBJECTID': 'header label - visible with data', 'SHAPE_Length': 'header label - visible with data', });
lyr_HOGAA_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});