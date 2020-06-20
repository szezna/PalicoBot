const monster = new Map([
    // ★★ 48 - C
    [1, 'https://i.imgur.com/HRcm2na.png'],  // | Anjanath
    [2, 'https://i.imgur.com/cfjKUA3.png'],  // | Arzuros
    [3, 'https://i.imgur.com/sKbGSXv.png'],  // | Pukei Pukei
    [4, 'https://i.imgur.com/MG3p0Hm.png'],  // | Qurupeco
    [5, 'https://i.imgur.com/Oteqxbb.png'],  // | Rathalos
    [6, 'https://i.imgur.com/1gR3iCY.png'],  // | Rathian
    [7, 'https://i.imgur.com/ZPuaeCG.png'],  // | Royal Ludroth
    [8, 'https://i.imgur.com/6zEVxlO.png'],  // | Ruby Basarios
    [9, 'https://i.imgur.com/9ghtUAh.png'],  // | Shogun Ceanataur
    [10, 'https://i.imgur.com/eYZnM4t.png'], // | Tigrex
    [11, 'https://i.imgur.com/sS9DqGj.png'], // | Tobi Kadachi
    [12, 'https://i.imgur.com/TkgFYEU.png'], // | Uragaan
    [13, 'https://i.imgur.com/yWc2in1.png'], // | Volvidon
    [14, 'https://i.imgur.com/5OSW64N.png'], // | Yian Garuga
    [15, 'https://i.imgur.com/0Fdljc7.png'], // | Barioth
    [16, 'https://i.imgur.com/xkFU8Kf.png'], // | Diablos
    [17, 'https://i.imgur.com/lH8gOND.png'], // | Congalala
    [18, 'https://i.imgur.com/3hSiBMe.png'], // | Yian Kut Ku
    [19, 'https://i.imgur.com/qAK3rmC.png'], // | Daimyo Hermitaur
    [20, 'https://i.imgur.com/0NGoeji.png'], // | Zamtrios
    [21, 'https://i.imgur.com/8zPVtqa.png'], // | Dodogama
    [22, 'https://i.imgur.com/KucJJzw.png'], // | Barroth
    [23, 'https://i.imgur.com/1Ej64Cs.png'], // | Basarios
    [24, 'https://i.imgur.com/kaXrMv0.png'], // | Blangonga
    [25, 'https://i.imgur.com/zPH2rjM.png'], // | Cephadrome
    [26, 'https://i.imgur.com/XWldpPH.png'], // | Emerald Congalala
    [27, 'https://i.imgur.com/vQ9Q2xE.png'], // | Gravios
    [28, 'https://i.imgur.com/yx4KKwm.png'], // | Gigginox
    [29, 'https://i.imgur.com/wGvFJr2.png'], // | Great Girros
    [30, 'https://i.imgur.com/4lGN909.png'], // | Great Baggi
    [31, 'https://i.imgur.com/vR9tYvz.png'], // | Gobul
    [32, 'https://i.imgur.com/bARH8be.png'], // | Great Jaggi
    [33, 'https://i.imgur.com/iN4l5jG.png'], // | Green Plesioth
    [34, 'https://i.imgur.com/87hJOhY.png'], // | Gypceros
    [35, 'https://i.imgur.com/asjhyte.png'], // | Jyuratodos
    [36, 'https://i.imgur.com/iSwlnX3.png'], // | Jade Barroth
    [37, 'https://i.imgur.com/Id7lguf.png'], // | Kecha Wacha
    [38, 'https://i.imgur.com/uotwQne.png'], // | Lavasioth
    [39, 'https://i.imgur.com/HiUOyXI.png'], // | Lagombi
    [40, 'https://i.imgur.com/weKzd2o.png'], // | Khezu
    [41, 'https://i.imgur.com/xcFPkR1.png'], // | Legiana
    [42, 'https://i.imgur.com/QAt9xZ5.png'], // | Malfestio
    [43, 'https://i.imgur.com/qIhkeVD.png'], // | Nerscylla
    [44, 'https://i.imgur.com/RNamIO8.png'], // | Nargacuga
    [45, 'https://i.imgur.com/gCMMNc2.png'], // | Nibelsnarf
    [46, 'https://i.imgur.com/nkkXTyB.png'], // | Odogaron
    [47, 'https://i.imgur.com/JFhGR07.png'], // | Paolumu
    [48, 'https://i.imgur.com/NbSXHx0.png'], // | Plesioth

    // ★★★ 32 - B
    [49, 'https://i.imgur.com/I159Nbq.png'], // | Agnaktor
    [50, 'https://i.imgur.com/Kym9jlM.png'], // | Astalos
    [51, 'https://i.imgur.com/q7CzwJb.png'], // | Atlal - Ka
    [52, 'https://i.imgur.com/PtMDRxB.png'], // | Azure Rathalos
    [53, 'https://i.imgur.com/FmPWuD2.png'], // | Bazelgeuse
    [54, 'https://i.imgur.com/hCOQFsb.png'], // | Black Diablos
    [55, 'https://i.imgur.com/pwqG3Tt.png'], // | Gammoth
    [56, 'https://i.imgur.com/POjSnJU.png'], // | Brachydios
    [57, 'https://i.imgur.com/GkmVPTu.png'], // | Brute Tigrex
    [58, 'https://i.imgur.com/9rv9IKM.png'], // | Chameleos
    [59, 'https://i.imgur.com/qwoCY3C.png'], // | Deviljho
    [60, 'https://i.imgur.com/3dydhwP.png'], // | Glacial Agnaktor
    [61, 'https://i.imgur.com/tx9bmLd.png'], // | Glavenus
    [62, 'https://i.imgur.com/aksvSvD.png'], // | Gold Rathian
    [63, 'https://i.imgur.com/NeIG5Z3.png'], // | Gore Magala
    [64, 'https://i.imgur.com/4FqkUzn.png'], // | Ivory Lagiacrus
    [65, 'https://i.imgur.com/qYBypHv.png'], // | Kirin
    [66, 'https://i.imgur.com/B463JYe.png'], // | Lagiacrus
    [67, 'https://i.imgur.com/KPGd831.png'], // | Lunastra
    [68, 'https://i.imgur.com/Ufx23GR.png'], // | Mizutsune
    [69, 'https://i.imgur.com/rDwaJFq.png'], // | Molten Tigrex
    [70, 'https://i.imgur.com/WtVZ72Z.png'], // | Oroshi Kirin
    [71, 'https://i.imgur.com/Rbw6Z0N.png'], // | Pink Rathian
    [72, 'https://i.imgur.com/dnzzgNj.png'], // | Rajang
    [73, 'https://i.imgur.com/b3v4a5l.png'], // | Sand Barioth
    [74, 'https://i.imgur.com/bx14irj.png'], // | Seregios
    [75, 'https://i.imgur.com/sah7HYe.png'], // | Shen Gaoren
    [76, 'https://i.imgur.com/fB7aNHt.png'], // | Silver Rathalos
    [77, 'https://i.imgur.com/BIUb7DU.png'], // | Teostra
    [78, 'https://i.imgur.com/mVYQPVr.png'], // | Vaal Hazak
    [79, 'https://i.imgur.com/GrXuCfL.png'], // | White Monoblos
    [80, 'https://i.imgur.com/90wlEWX.png'], // | Zinogre

    // ★★★★ 19 - A
    [81, 'https://i.imgur.com/EWTcBzr.png'], // | Kushala Daora
    [82, 'https://i.imgur.com/zALuAi7.png'], // | Akantor
    [83, 'https://i.imgur.com/A56DdR3.png'], // | Ceadeus
    [84, 'https://i.imgur.com/PXsuNP5.png'], // | Chaotic Gore Magala
    [85, 'https://i.imgur.com/1hEG5c4.png'], // | Dah'ren Mohran
    [86, 'https://i.imgur.com/mHpomds.png'], // | Furious Rajang
    [87, 'https://i.imgur.com/Dd3TyXc.png'], // | Gogmazios
    [88, 'https://i.imgur.com/QIJdLaQ.png'], // | Jhen Moran
    [89, 'https://i.imgur.com/LzulcF5.png'], // |  Kulve Taroth
    [90, 'https://i.imgur.com/sRgFSSj.png'], // | Lao - Shan Lung
    [91, 'https://i.imgur.com/V4n8Ynu.png'], // | Nergigante
    [92, 'https://i.imgur.com/WjLoFSE.png'], // | Rusted Kushala Daora
    [93, 'https://i.imgur.com/R9qLdXX.png'], // | Savage Deviljho
    [94, 'https://i.imgur.com/lrdO5IT.png'], // | Shagaru Magala
    [95, 'https://i.imgur.com/b7vhRS6.png'], // | Stygian Zinogre
    [96, 'https://i.imgur.com/LSHbN7B.png'], // | Ukanlos
    [97, 'https://i.imgur.com/E74llnu.png'], // | Valstrax
    [98, 'https://i.imgur.com/mqwDy5y.png'], // | Yama Tsukami
    [99, 'https://i.imgur.com/nxmSIHf.png'], // | Zorah Magdaros
    
    // ★★★★★ 9 - S
    [100, 'https://i.imgur.com/jDqbzyr.png'], // | Alatreon
    [101, 'https://i.imgur.com/N8duTTi.png'], // | Amatsu
    [102, 'https://i.imgur.com/EnPoA30.png'], // | Black Fatalis
    [103, 'https://i.imgur.com/laWm6wU.png'], // | Crimsion Fatalis
    [104, 'https://i.imgur.com/KFFj0ia.png'], // | Dalamadur
    [105, 'https://i.imgur.com/iPPTnf7.png'], // | Dalamadur
    [106, 'https://i.imgur.com/sPE89pT.png'], // | Dire Miralis
    [107, 'https://i.imgur.com/JibypZE.png'], // | Safi'jiiva
    [108, 'https://i.imgur.com/J2vlf3j.png'], // | Xeno'jiiva

    // ★★★★★★+ 2 - S+
    [109, 'https://i.imgur.com/5VRWHzo.png'], // | White Fatalis
    [110, 'https://i.imgur.com/R3oBdzo.png'], // | Fat Handler
]);
module.exports = { monster };